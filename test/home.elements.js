const homePage = require("../pages/homePage")

describe("HomePage elements",function(){

    it("verify home page elements",function(){

        browser.url("https://www.freshworks.com/")
        browser.maximizeWindow();
        let header = homePage.pageHeader.getText();
        console.log(header);
        homePage.supportLink.click();
        browser.pause(3000);
    });

});