System.register(['../domain/negotiation/Negotiation.js'], function (_export, _context) {
    "use strict";

    var Negotiation;
    return {
        setters: [function (_domainNegotiationNegotiationJs) {
            Negotiation = _domainNegotiationNegotiationJs.Negotiation;
        }],
        execute: function () {
            class NegotiationDao {
                constructor(connection) {
                    this._connection = connection;
                    this._store = 'negociacoes';
                }

                add(negotiation) {
                    return new Promise((resolve, reject) => {
                        const request = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).add(negotiation);

                        request.onsuccess = e => {
                            resolve();
                        };

                        request.onerror = e => {
                            console.log(e.target.error);
                            reject('Não foi possível salvar as negociações');
                        };
                    });
                }

                listAll() {
                    return new Promise((resolve, reject) => {
                        const negotiations = [];

                        const cursor = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).openCursor();

                        cursor.onsuccess = e => {
                            const current = e.target.result;

                            if (current) {
                                const negotiation = new Negotiation(current.value._data, current.value._quantity, current.value._value);

                                negotiations.push(negotiation);
                                current.continue();
                            } else {
                                resolve(negotiations);
                            }
                        };

                        cursor.onerror = e => {
                            console.log(e.target.error);
                            reject('Não foi possível listar as negociações!');
                        };
                    });
                }

                clearAll() {
                    return new Promise((resolve, reject) => {
                        const request = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).clear();

                        request.onsuccess = e => {
                            resolve();
                        };

                        request.onerror = e => {
                            console.log(e.target.error);
                            reject('Não foi possível apagar as negociações');
                        };
                    });
                }
            }

            _export('NegotiationDao', NegotiationDao);
        }
    };
});
//# sourceMappingURL=NegotiationDao.js.map