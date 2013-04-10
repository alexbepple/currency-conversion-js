describe('Currency-rate retriever', function() {
    var original;

    beforeEach(function() {
        original = {getJSON: $.getJSON};
        loadFixtures('rate.html');
    });
    afterEach(function() {
        $.getJSON = original.getJSON;
    });

    var stubResponse = function(html) {
        return {contents: html};
    };

    it('finds conversion rate', function() {

        var fakeCurrencyHtml = 
            'href="/currency/foo>USD</a></td><td class="baz">foo</td>' +
            'href="/currency/foo>EUR</a></td><td class="baz">bar</td>';

        var fakeRatesHtml = 
            '<div id="converter_results"><ul><li><b>1 x = 2 y</b>';

        var callNumber = 0;
        spyOn($, 'getJSON').andCallFake(function(_url, callback) { 
            switch (callNumber++) {
                case 0: 
                    callback(stubResponse(fakeCurrencyHtml)); break;
                case 1:
                    callback(stubResponse(fakeRatesHtml)); break;
            }
        });

        reactOnSubmitForm();

        var rate = parseInt($('#conversion-rate').text(), 10);
        expect(rate).toEqual(2);
    });
});
