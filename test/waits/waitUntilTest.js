describe("Wait until sync for the elements", function(){

    it("wait for the home page", function(){

        browser.url('http://app.hubspot.com/login');
        browser.maximizeWindow();
        const email = $('#username');
        const password = $('#password');
        const loginBtn = $('#loginBtn');

        browser.waitUntil(function(){
            return email.isDisplayed() === true
        },10000,'email is not displayed within the timeframe');

        email.setValue('nagaraja.gaddale@gmail.com');
        password.setValue('Godsaveme@1');
        loginBtn.click();

        const header = $('h1.private-page__title')

        browser.waitUntil(function(){
            return header.getText() === 'Sales Dashboard'
        },6000,'Header is not displayed within the time frame');

    })
})