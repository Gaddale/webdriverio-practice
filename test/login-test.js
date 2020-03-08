const loginpage = require('../pages/loginpage')
const loginData = require('../test-data/logindata')

describe('Login Page',function(){

    it('enter username', function(){
        browser.url(`${browser.options.baseUrl}/login`)
        loginpage.enterUserName(loginData.username);
        assert.equal(loginData.username, loginpage.username.getValue());
    })

    it('enter password', function(){
        // browser.url(`${browser.options.baseUrl}/login`)
        loginpage.enterPassword(loginData.password);
        assert.equal(loginData.password, loginpage.password.getValue());
    })


    it('click login button', function(){
        // browser.url(`${browser.options.baseUrl}/login`)
        loginpage.clickLoginBtn();
    })

})