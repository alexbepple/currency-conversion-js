var symbols, lastUpdate;

var updateConversionRate = function(from, to) {
    if (!(from in symbols)) throw new Error('Invalid from currency: ' + from);
    if (!(to in symbols)) throw new Error('Invalid to currency: ' + to);

    var url = 'http://www.gocurrency.com/v2/dorate.php?inV=1&from=' + from + 
        '&to=' + to + '&Calculate=Convert';
    var anyOriginUrl = 'http://anyorigin.com/get/?url=' + encodeURIComponent(url) + '&callback=?';
    $.getJSON(anyOriginUrl, function(data){
        var page = data.contents;
        var start = page.lastIndexOf('<div id="converter_results"><ul><li>');
        var substring = page.substring(start);
        var startOfInterestingStuff = substring.indexOf('<b>') + 3;
        var endOfInterestingStuff = substring.indexOf('</b>', startOfInterestingStuff);
        var interestingStuff = substring.substring(startOfInterestingStuff, endOfInterestingStuff);
        var parts = interestingStuff.split('=');
        var value = parts[1].trim().split(' ')[0];
        $('#conversion-rate').html(value);
    });
};

$('#currency-form').submit(function() {
    var from = $('#from').val();
    var to = $('#to').val();

    if (symbols && Date.now() - lastUpdate <= 10000) {
        updateConversionRate(from, to);
        return false;
    }

    var url = "http://www.xe.com/iso4217.php";
    var anyOriginUrl = 'http://anyorigin.com/get/?url=' + encodeURIComponent(url) + '&callback=?';
    $.getJSON(anyOriginUrl, function(data){
        var page = data.contents;
        symbols = {};
        var currencyRegex = /href="\/currency\/[^>]+>(...)<\/a><\/td><td class="[^"]+">([A-Za-z ]+)/g;
        
        var match;
        while (match = currencyRegex.exec(page)) {
            symbols[match[1]] = match[2];
        }
        lastUpdate = Date.now();

        updateConversionRate(from, to);
    });
    

    return false;
});
