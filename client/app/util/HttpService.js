System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class HttpService {

                get(url) {

                    // Promise : Padrão de Projeto
                    return new Promise((resolve, reject) => {

                        // XMLHttpRequest : objeto capaz de realizar requisições
                        const xhr = new XMLHttpRequest();

                        // Abre uma conexão com o servidor
                        xhr.open('GET', url);

                        // Realizar algumas configurações antes do envio
                        xhr.onreadystatechange = () => {

                            //4 : requisição está concluída e a resposta está pronta
                            if (xhr.readyState == 4) {
                                //200 : código padrão que indica que a operação foi realizada 
                                //com sucesso
                                if (xhr.status == 200) {
                                    resolve(JSON.parse(xhr.responseText));
                                } else {
                                    reject(xhr.responseText);
                                }
                            }
                        };
                        xhr.send();
                    });
                }
            }

            _export('HttpService', HttpService);
        }
    };
});
//# sourceMappingURL=HttpService.js.map