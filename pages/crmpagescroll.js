class CrmPage{

    get forgotPwdLnk(){ return $('=Forgot Password?')}

    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }

}

module.exports = new CrmPage();