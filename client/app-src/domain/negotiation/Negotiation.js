class Negotiation{
    constructor(_data, _quantity, _value){
        this._data = new Date(_data.getTime());
        Object.assign(this,{_quantity, _value})
        Object.freeze(this);
    }

    get volume(){
        return (parseInt(this._quantity) * parseFloat(this._value));
    }

   
    get data(){     
        return new Date(this._data.getTime());
    }

    get quantity(){
        return this._quantity;
    }

    get value(){
        return this._value;
    }

    set data(data){
        this._data = data;
    }

    set quantity(quantity){
        this._quantity = quantity;
    }

    set value(value){
        this._value = value;
    }

    equals(negotiation){
        // JSON.stringify : transforma o valor de cada propriedade de 
        // um objeto em string
        return JSON.stringify(this) == JSON.stringify(negotiation);
    }
}