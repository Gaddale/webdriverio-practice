class AlertPage{

    getAlertButton(index){
        return $(`ul li:nth-child(${index}) button`)
    }

    clickAlertButton(index){
        this.getAlertButton(index).waitForDisplayed();
        this.getAlertButton(index).click();
    }
}
module.exports = new AlertPage();