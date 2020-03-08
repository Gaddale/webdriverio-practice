const alterPage = require('../pages/alertpage')

describe('Handle alert pop ups', function(){

    it('accept Alert', function(){
        browser.url('http://the-internet.herokuapp.com/javascript_alerts');
        browser.maximizeWindow();
        alterPage.clickAlertButton(1);
        const alertText = browser.getAlertText();
        assert.equal('I am a JS Alert',alertText);
        browser.acceptAlert();
        browser.pause(3000);    
    });

    it('dismiss Alert', function(){
        browser.url('http://the-internet.herokuapp.com/javascript_alerts');
        browser.maximizeWindow();
        alterPage.clickAlertButton(2);
        const alertText = browser.getAlertText();
        browser.dismissAlert();
        browser.pause(3000);    
    })

    it('send text to Alert', function(){
        browser.url('http://the-internet.herokuapp.com/javascript_alerts');
        browser.maximizeWindow();
        alterPage.clickAlertButton(3);
        browser.sendAlertText('this is alert text');
        browser.pause(2000);
        browser.acceptAlert();
        browser.pause(2000);    
    })

} )