describe('Currency-rate retriever', function() {
    beforeEach(function() {
        loadFixtures('rate.html');
    });
    // This does not work! Am I missing something or is it impossible to submit a form?
    xit('retrieves rate', function() {
        runs(function() {
            $('#currency-form').submit();
        });
        waitsFor(function() {return !($('#conversion-rate').is(':empty')); }, '', 7000);
        runs(function() {
            var rate = $('#conversion-rate').text();
            expect(rate).toBeGreaterThan(0);
            expect(rate).toBeLessThan(1);
        });
    });

    it('finds USD-to-EUR to be between 0 and 1', function() {
        runs(function() {
            reactOnSubmitForm();
        });
        waitsFor(function() {return !($('#conversion-rate').is(':empty')); }, '', 7000);
        runs(function() {
            var rate = $('#conversion-rate').text();
            expect(rate).toBeGreaterThan(0);
            expect(rate).toBeLessThan(1);
        });
    });
});
