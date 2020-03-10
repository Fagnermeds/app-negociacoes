System.register(['./View.js'], function (_export, _context) {
    "use strict";

    var View;
    return {
        setters: [function (_ViewJs) {
            View = _ViewJs.View;
        }],
        execute: function () {
            class MessageView extends View {

                template(model) {
                    return `<p class="alert alert-info">${model.text}</p>`;
                }

            }

            _export('MessageView', MessageView);
        }
    };
});
//# sourceMappingURL=MessageView.js.map