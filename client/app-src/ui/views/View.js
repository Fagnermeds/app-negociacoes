class View{
    constructor(selector){
        this._element = document.querySelector(selector);
    }

    update(model){
        if(model.text != '')
            this._element.innerHTML = this.template(model);
    }

    template(model){
        throw new Error('Você precisa implementar o método template');
        
    }
}