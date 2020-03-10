//import { View } from './View.js';
//import { DateFormat } from '../converters/DateFormat.js';


class NegotiationsView extends View{

    template(model){
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
                `
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