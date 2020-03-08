const loginpage = require('../pages/loginpage')

describe('Login Page',function(){

    it('enter username', function(){
        browser.url(`${browser.options.baseUrl}/login`)
        loginpage.enterUserName('tomsmith');
        assert.equal('tomsmith', loginpage.username.getValue());
    })

    it('enter password', function(){
        // browser.url(`${browser.options.baseUrl}/login`)
        loginpage.enterPassword('SuperSecretPassword');
        assert.equal('SuperSecretPassword', loginpage.password.getValue());
    })


    it('click login button', function(){
        // browser.url(`${browser.options.baseUrl}/login`)
        loginpage.clickLoginBtn();
    })

})