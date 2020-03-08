describe("interaction with web element", function(){
    it("enter value to the field", function(){
        browser.url("/");
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Mac Book');
        browser.pause(3000);
        const label = $('span.a-size-base.a-color-base');
        let text = label.getText();
        console.log(text);
    });

    it("get text", function(){
        browser.url("/");
        const label = $('span.a-size-base.a-color-base');
        let text = label.getText();
        console.log(text);
    });

    it("click on field", function(){
        browser.url("/");
        const label = $('input.nav-input');
        let text = label.getText();
        console.log(text);
        browser.pause(3000);
    });

});