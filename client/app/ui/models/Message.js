System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class Message {
                // valor padrão de text caso não for passado nenhum parâmetro
                constructor(text = '') {
                    this._text = text;
                }

                get text() {
                    return this._text;
                }

                set text(text) {
                    this._text = text;
                }
            }

            _export('Message', Message);
        }
    };
});
//# sourceMappingURL=Message.js.map