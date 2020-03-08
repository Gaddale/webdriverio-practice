describe("wait for enabled", function(){

    it.skip("wait for enable submit button", function(){
        browser.url('http://classic.crmpro.com/register/');
        const checkbox = $(`//input[@name='agreeTerms']`)
        const submitbtn = $('#submitButton');
        checkbox.click();
        submitbtn.waitForEnabled(4000);
        assert.equal(true, submitbtn.isEnabled());
    })
    it("wait for disable submit button", function(){
        browser.url('http://classic.crmpro.com/register/');
        const checkbox = $(`//input[@name='agreeTerms']`)
        const submitbtn = $('#submitButton');
        checkbox.waitForDisplayed();
        checkbox.click();
        submitbtn.waitForEnabled(4000);
        // assert.equal(true, submitbtn.isEnabled());
        checkbox.click();
        submitbtn.waitForEnabled(4000,true);
        assert.equal(false,submitbtn.isEnabled());
    })
})