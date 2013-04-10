describe('Currency-rate retriever', function() {
    var original;
    var returnHtml;

    beforeEach(function() {
        original = {getJSON: $.getJSON};
        loadFixtures('rate.html');

        returnHtml = (function() {
            var returnedHtml = [];
            spyOn($, 'getJSON').andCallFake(function(_url, callback) { 
                callback(stubResponse(returnedHtml.shift()));
            });
            var stubResponse = function(html) {
                return {contents: html};
            };

            return function(html) {
                returnedHtml.push(html);
            };
        })();
    });
    afterEach(function() {
        $.getJSON = original.getJSON;
    });

    it('finds conversion rate', function() {
        var fakeCurrencyHtml = 
            'href="/currency/foo>USD</a></td><td class="baz">foo</td>' +
            'href="/currency/foo>EUR</a></td><td class="baz">bar</td>';

        var fakeRatesHtml = 
            '<div id="converter_results"><ul><li><b>1 x = 2 y</b>';

        returnHtml(fakeCurrencyHtml);
        returnHtml(fakeRatesHtml);

        reactOnSubmitForm();

        var rate = parseInt($('#conversion-rate').text(), 10);
        expect(rate).toEqual(2);
    });
});
