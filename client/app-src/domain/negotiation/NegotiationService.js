//import { HttpService } from '../../util/HttpService.js';
//import { Negotiation } from './Negotiation.js';

class NegotiationService{
    constructor(){
        this._http = new HttpService();
    }

    getNegotiationWeek(){
        return this._http
            .get('negociacoes/semana')
            .then(dados => {
                const negotiations = dados.map(obj => new Negotiation(
                new Date(obj.data), obj.quantidade, obj.valor));

                return negotiations;    
                
            }, 
            
                err => {
                    throw new Error('Não foi possível obter as negociações');
                }
                    
                    
            );
    }

    getNegotiationLastWeek(){
        return this._http.get('negociacoes/anterior')
            .then( dados => {
                const negotiations = dados.map(obj => new Negotiation(
                new Date(obj.data), obj.quantidade, obj.valor));

                return negotiations;
            },
                err => {
                    throw new Error('Não foi possível obter as negociações da semana anterior');
                }

            );
    }

    getNegotiationLast(){
        return this._http.get('negociacoes/retrasada')
            .then( dados => {
                const negotiations = dados.map(obj => new Negotiation(
                new Date(obj.data), obj.quantidade, obj.valor));

                return negotiations;
            },
                err => {
                    throw new Error('Não foi possível obter as negociações da semana retrasada');
                }

            );
    }

    getNegotiationPeriod(){
        
        return Promise.all([
            this.getNegotiationWeek(),
            this.getNegotiationLastWeek(),
            this.getNegotiationLast()
        ]).then(periodo => 
            periodo.reduce((newArray,item) => newArray.concat(item),[])
            .sort((a,b) => b.data.getTime() - a.data.getTime())        
        ).catch(err => {
            throw new Error('Não foi possível obter as negociações do periodo');
        });
    }
}