
$('#currency-form').submit(function() {
    var from = $('#from').val();
    var to = $('#to').val();
    var url = 'http://www.gocurrency.com/v2/dorate.php?inV=1&from=' + from + 
        '&to=' + to + '&Calculate=Convert';
    var whateverUrl = 'http://anyorigin.com/get?url=' + encodeURIComponent(url) + '&callback=?';
    console.log(whateverUrl);
    $.getJSON(whateverUrl, function(data){
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
    return false;
});
