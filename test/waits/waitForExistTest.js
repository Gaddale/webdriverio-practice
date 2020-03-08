describe("wait for delete button using waitforexist", function(){

    it("should wait for delete button", function(){

        browser.url('http://the-internet.herokuapp.com/add_remove_elements/');
        browser.maximizeWindow();
        const addElement = $(`//button[text()='Add Element']`);
        const deleteElement = $(`//button[text()='Delete']`);

        addElement.waitForDisplayed();
        addElement.click();

        deleteElement.waitForExist(4000);
        assert.equal(true, deleteElement.isExisting());

        deleteElement.click();
        assert.equal(false, deleteElement.isExisting());
        browser.pause(3000);
    });

    it("should wait for preview button", function(){

        browser.url('http://app.hubspot.com/login');
        browser.maximizeWindow();
        const email = $('#username');
        const password = $('#password');
        const loginBtn = $('#loginBtn');

        email.waitForDisplayed();
        email.setValue('nagaraja.gaddale@gmail.com');
        password.setValue('Godsaveme@1');
        loginBtn.click();

        $('#nav-primary-contacts-branch').waitForDisplayed();
        $('#nav-primary-contacts-branch').click();

        $('#nav-secondary-contacts').waitForDisplayed();
        $('#nav-secondary-contacts').click();

        const previewBtn = $(`//span[text()='Cool Robot (Sample Contact)']//ancestor::a//following-sibling::span/button`);

        previewBtn.moveTo();
        previewBtn.waitForExist(3000);
        previewBtn.waitForDisplayed();
        previewBtn.click();
        browser.pause(3000);
    
    })
})