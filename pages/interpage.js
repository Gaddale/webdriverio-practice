class InternetPage{

    getLinkElement(index){
        return $(`ul li:nth-child(${index}) a`)
    }

    clickOnLinkElement(index){
        this.getLinkElement(index).waitForDisplayed();
        this.getLinkElement(index).click();
    }

    getCheckBoxElement(index){
        return $(`form#checkboxes input:nth-child(${index})`);
    }

    clickOnCheckBox(index){
        this.getCheckBoxElement(index).waitForDisplayed();
        this.getCheckBoxElement(index).click();
    }
}

module.exports = new InternetPage();