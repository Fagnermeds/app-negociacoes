/*
import { Negotiations } from '../domain/negotiation/Negotiations.js';
import { NegotiationsView } from '../ui/views/NegotiationsView.js';
import { Message } from '../ui/models/Message.js';
import { MessageView } from '../ui/views/MessageView.js';
import { NegotiationService } from '../domain/negotiation/NegotiationService.js';
import { DaoFactory } from '../util/DaoFactory.js';
import { InvalidDateException } from '../ui/converters/InvalidDateException.js';
import { Negotiation } from '../domain/negotiation/Negotiation.js';
import { Bind } from '../util/Bind.js';
import { DateFormat } from '../ui/converters/DateFormat.js';
*/

class NegotiationController{
    
    constructor(){

        //informando que o querySelector vai para variável $ 
        const $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');
        
        this._negotiations = new Bind(
            new Negotiations(),
            new NegotiationsView('#negociacao'),
            'add','clear'
        );

        this._msg = new Bind(
            new Message(),
            new MessageView('#mensagemView'),
            'text'
        );

        this._service = new NegotiationService();
        this._init();
    }
    
    _init(){
        DaoFactory
            .getNegotiationDao()
            .then(dao => dao.listAll())
            .then(negotiations => negotiations.forEach(
                negotiation => this._negotiations.add(negotiation)))
            .catch(err => this._msg.text = err);
    }

    addNegociation(event)
    {
        try {
            //cancela a submissão do formulário (botão submit)
            event.preventDefault();    

            const negotiation = this._createNegociation();
            
            DaoFactory
                .getNegotiationDao()
                .then(dao => dao.add(negotiation))
                .then(() => {
                    this._negotiations.add(negotiation);
                    this._msg.text = 'Negociação adicionada com sucesso!';
                    this._clearForm();
                }).catch(err => this._msg.text = err);
            
            
        } catch (err) {
            
            if(err instanceof InvalidDateException) {
                this._msg.text = err.message;
            } else {
                this._msg.text = 'Um erro não esperado aconteceu!';       
            }

        }                
    }

    _clearForm(){
        this._inputData.value = '';
        this._inputQuantity.value = '1';
        this._inputValue.value = '0.0'; 
        this._inputData.focus();
    }

    _createNegociation(){
        
        //let data = new Date(this._inputData.value.split('-'));
        
        let data = DateFormat.toDate(this._inputData.value);

        return new Negotiation(
            data,
            this._inputQuantity.value,
            this._inputValue.value
        );
    }

    delete(){
        DaoFactory
            .getNegotiationDao()
            .then(dao => dao.clearAll())
            .then(() => {
                this._negotiations.clear();
                this._msg.text = 'Negociações apagadas com sucesso!';
        });
    }
    
    importNegotiations(){
        // Resolvendo Promises de forma paralela
        this._service.getNegotiationPeriod().then(
            negotiations => {
                negotiations
                .filter(newNegotiation => 
                    !this._negotiations.getNegotiations().some(existNegotiation =>
                        newNegotiation.equals(existNegotiation))).forEach(negotiation => 
                            this._negotiations.add(negotiation));
                    
            this._msg.text = 'Negociações do período importadas com sucesso';

            }).catch(err => this._msg.text = err);
    }
    
    
    /*
    importNegotiations(){

    //Resolvendo Promises de forma sequencial    
        const negotiations = [];

        // Padrão de projeto Promise
        this._service.getNegotiationWeek().then(
            week => {
                negotiations.push(...week);
                return this._service.getNegotiationLastWeek();
            }).then(
                last => {
                    negotiations.push(...last);
                    return this._service.getNegotiationLast();
            }).then(
                lastW => {
                    negotiations.push(...lastW);
                    negotiations.forEach(negotiation => this._negotiations.add(negotiation));
                        this._msg.text = 'Negociações importadas com sucesso!';
                }).catch(err => this._msg.text = err);
    }*/
}