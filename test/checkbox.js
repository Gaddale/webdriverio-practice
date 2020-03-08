const interpage = require('../pages/interpage')

describe("Handing Checkboxes", function(){
    
    it('click on checkbox', function(){
        browser.url('/');
        browser.maximizeWindow();
        interpage.clickOnLinkElement(6);
        browser.pause(3000);
        interpage.clickOnCheckBox(1);
        browser.pause(3000);
        expect(interpage.getCheckBoxElement(1).isSelected()).equals(true);
    });

        it("Check page url", function(){
        browser.url('/');
        browser.maximizeWindow();
        interpage.clickOnLinkElement(6);
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}/checkboxes`);
    });
})