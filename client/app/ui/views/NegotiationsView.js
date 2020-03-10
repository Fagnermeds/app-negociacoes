System.register(['./View.js', '../converters/DateFormat.js'], function (_export, _context) {
    "use strict";

    var View, DateFormat;
    return {
        setters: [function (_ViewJs) {
            View = _ViewJs.View;
        }, function (_convertersDateFormatJs) {
            DateFormat = _convertersDateFormatJs.DateFormat;
        }],
        execute: function () {
            class NegotiationsView extends View {

                template(model) {
                    return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
            ${model.getNegotiations().map(item => {
                        return `<tr>
                    <td>${DateFormat.toText(item.data)}</td>
                    <td>${item.quantity}</td>
                    <td>${item.value}</td>
                    <td>${item.volume}</td>
                </tr>
                `;
                    }).join('')}
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3"></td>
                <td>${model.totalVolume.toFixed(2)}</td>
            </tr>
        </tfoot>
    </table>
    `;
                }
            }

            _export('NegotiationsView', NegotiationsView);
        }
    };
});
//# sourceMappingURL=NegotiationsView.js.map