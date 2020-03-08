const crmpage = require('../pages/crmpagescroll')

describe("scroll to element", function(){
    it("scroll to forgot password", function(){
        browser.url('http://classic.crmpro.com/')
        browser.maximizeWindow();
        // crmpage.moveToElement(crmpage.forgotPwdLnk);
        crmpage.forgotPwdLnk.scrollIntoView();
        crmpage.forgotPwdLnk.click();
        browser.pause(3000);
    });
});