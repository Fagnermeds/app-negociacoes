System.register(['./controllers/NegotiationController.js'], function (_export, _context) {
    "use strict";

    var NegotiationController;
    return {
        setters: [function (_controllersNegotiationControllerJs) {
            NegotiationController = _controllersNegotiationControllerJs.NegotiationController;
        }],
        execute: function () {

            const controller = new NegotiationController();
            const $ = document.querySelector.bind(document);

            $('.form').addEventListener('submit', controller.addNegociation.bind(controller));

            $('#botao-apaga').addEventListener('click', controller.delete.bind(controller));

            $('#botao-importa').addEventListener('click', controller.importNegotiations.bind(controller));
        }
    };
});
//# sourceMappingURL=app.js.map