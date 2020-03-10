System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class View {
                constructor(selector) {
                    this._element = document.querySelector(selector);
                }

                update(model) {
                    if (model.text != '') this._element.innerHTML = this.template(model);
                }

                template(model) {
                    throw new Error('Você precisa implementar o método template');
                }
            }

            _export('View', View);
        }
    };
});
//# sourceMappingURL=View.js.map