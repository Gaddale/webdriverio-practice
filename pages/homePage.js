class HomePage{
    get pageHeader() {return $('h1') }
    get supportLink() {return $("//span[text()='Support']") }
}

module.exports = new HomePage();