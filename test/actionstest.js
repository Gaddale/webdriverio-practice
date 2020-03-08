const spiceJetPage = require('../pages/actionspage')

describe("action on spiceJet page", function(){

    // it('mouse over', function(){
    //     browser.url('https://www.spicejet.com/');
    //     browser.maximizeWindow();
    //     spiceJetPage.moveToElement(spiceJetPage.loginSignUp);
    //     spiceJetPage.moveToElement(spiceJetPage.spiceClubMembers);
    //     spiceJetPage.clickOnElement(spiceJetPage.memberLogin);
    //     browser.pause(3000);
    // })

    it('test KEY stroke Tab', function(){
        browser.url('http://the-internet.herokuapp.com/key_presses');
        browser.maximizeWindow();
        spiceJetPage.enterKeyInSearch('Tab')
        const labelText = spiceJetPage.getResultLableText();
        assert.equal("You entered: TAB",labelText)
        browser.pause(3000);
    });
})