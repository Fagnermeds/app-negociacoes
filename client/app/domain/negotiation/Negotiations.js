System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class Negotiations {
                constructor() {
                    this._negotiations = [];
                    Object.freeze(this);
                }

                add(negotiation) {
                    this._negotiations.push(negotiation);
                }

                getNegotiations() {
                    return [].concat(this._negotiations);
                }

                get totalVolume() {
                    let total = 0;
                    this._negotiations.forEach(item => {
                        total += item.volume;
                    });

                    return total;
                }

                clear() {
                    this._negotiations.length = 0;
                }
            }

            _export("Negotiations", Negotiations);
        }
    };
});
//# sourceMappingURL=Negotiations.js.map