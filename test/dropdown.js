describe('Play with dropdown', function(){

    it('Display all the elements',function(){
            browser.url('https://www.facebook.com/')
            browser.maximizeWindow();
            let list = $$('#month option')
            for(let i=0; i<list.length; i++){
                const element = list[i];
                console.log(element.getText());
            }
    });
});