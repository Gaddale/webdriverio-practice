class BlazeMeter{

    get parent(){
        return $('ul.list-nav-links');
    }

    get childElements(){
        return this.parent.$$('li');
    }

    get textOfLi(){
        return this.childElements.filter(element =>{
            console.log(element.getText());
        });
    }

    specificChildElement(index){
            return this.parent.$(`li:nth-child(${index})`);
    }

}

module.exports =new BlazeMeter();