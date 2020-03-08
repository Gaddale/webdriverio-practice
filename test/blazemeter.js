const blazepage = require('../pages/blazePage')

describe("Blaze meter page test", function(){

    it("verify all the child elements", function(){
        browser.url('https://www.blazemeter.com/');
        browser.maximizeWindow();
        // blazepage.textOfLi;
        blazepage.specificChildElement(3).getText();
    })
})