class SpiceJet{

    get loginSignUp(){ return $('#ctl00_HyperLinkLogin')}
    get spiceClubMembers(){ return $('=SpiceClub Members')}
    get memberLogin(){ return $('=Member Login')}
    get search() { return $('#target')}
    get resultlable() { return $('#result')}

    getResultLableText(){
        this.resultlable.waitForDisplayed();
        return this.resultlable.getText();
    }

    enterKeyInSearch(text){
        this.search.waitForDisplayed()
        this.search.setValue(text);
    }

    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }

    clickOnElement(element){
        element.waitForDisplayed();
        element.click();
    }
}

module.exports = new SpiceJet();