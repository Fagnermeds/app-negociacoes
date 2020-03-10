class Message{
    // valor padrão de text caso não for passado nenhum parâmetro
    constructor(text = ''){
        this._text = text;
    }

    get text(){
        return this._text;
    }

    set text(text){
        this._text = text;
    }
}