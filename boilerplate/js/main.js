
$('#currency-form').submit(function() {
    $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://www.bepple.de') + '&callback=?', function(data){
        $('#conversion-rate').html(data.status.http_code);
    });
    return false;
});
