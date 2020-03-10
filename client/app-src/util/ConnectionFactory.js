// Padrão de projeto MODULE PATTERN
const ConnectionFactory = (() => {
    
    const stores = ['negociacoes'];
    let connection = null;
    let close = null;

    return class ConnectionFactory{
    
        constructor(){
            throw new Error('Unable to create instances of this class');
        }
    
        static getConnection(){
            return new Promise((resolve, reject) => {
    
                if(connection) return resolve(connection);
    
                const openRequest = indexedDB.open('jscangaceiro', 2);
    
                openRequest.onupgradeneeded = e => {
                    ConnectionFactory._creatStores(e.target.result);
                }
                
                openRequest.onsuccess = e => {
                    connection = e.target.result;
                    close = connection.close.bind(connection);

                    connection.close = () =>{
                        throw new Error('Você não pode fechar diretamente a conexão');
                    }
                    resolve(e.target.result);
                }
                
                openRequest.onerror = e => {
                    reject(e.target.error.name);
                }
    
            });
        }
    
        static _creatStores(connection){
            stores.forEach(store =>{
                if(connection.objectStoreNames.contains(store))
                    connection.deleteObjectStore(store);
                connection.createObjectStore(store, { autoIncrement : true });
            });
        }

        static closeConnection(){
            if(connection){
                close();
            }
        }
    }
})();
