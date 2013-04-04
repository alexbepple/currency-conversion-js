$.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://www.bepple.de') + '&callback=?', function(data){
    $('#content').html(data.contents);
});
