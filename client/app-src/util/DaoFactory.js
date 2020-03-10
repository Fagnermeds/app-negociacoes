//import { ConnectionFactory } from './ConnectionFactory.js';
//import { NegotiationDao } from '../domain/negotiation/NegotiationDao.js';

class DaoFactory{
    static getNegotiationDao(){
        return ConnectionFactory
            .getConnection()
            .then(conn => new NegotiationDao(conn));
    }
}