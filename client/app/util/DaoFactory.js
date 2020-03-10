System.register(['./ConnectionFactory.js', '../domain/negotiation/NegotiationDao.js'], function (_export, _context) {
    "use strict";

    var ConnectionFactory, NegotiationDao;
    return {
        setters: [function (_ConnectionFactoryJs) {
            ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
        }, function (_domainNegotiationNegotiationDaoJs) {
            NegotiationDao = _domainNegotiationNegotiationDaoJs.NegotiationDao;
        }],
        execute: function () {
            class DaoFactory {
                static getNegotiationDao() {
                    return ConnectionFactory.getConnection().then(conn => new NegotiationDao(conn));
                }
            }

            _export('DaoFactory', DaoFactory);
        }
    };
});
//# sourceMappingURL=DaoFactory.js.map