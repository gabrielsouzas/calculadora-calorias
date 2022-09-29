const input = document.querySelector('#inpalimentos');
const btnAdd = document.querySelector('#btnadd');
const table = document.querySelector('table');
const tableContainer = document.querySelector('#table-container');
const total = document.querySelector('#total');
const comboboxAlimentos = document.querySelector('#list-alimentos');
const btnLimparTabela = document.querySelector('#btn-limpar');
const secaoTreino = document.querySelector('.treino');
const btnVoltarAoTopo = document.querySelector("#btn-voltar-ao-topo");

var primeiroAlimento = true;
var arrayTabela = [];

// Preenche a caixa de seleção de alimentos com o array de objetos "alimentos"
preencherComboBox();

// Evento clique do botão adicionar alimento
btnAdd.addEventListener('click', () => {
    if (input.value != null && input.value.length > 0) {
        const alimento = alimentos.find( alimento => alimento.nome == input.value);
        if (alimento != null) {
            if (primeiroAlimento) {
                // Limpa a tabela
                table.innerHTML = '<tr><th>Alimento</th><th>Porção</th><th>Calorias</th><th>Del</th></tr>';
                primeiroAlimento = false;
            }
            
            if (!verificarAlimentoTabela(alimento)) {
                table.innerHTML += `<tr><td>${alimento.nome}</td><td>${alimento.porcao}</td><td>${alimento.calorias}</td><td><button id="btn-remover" class='bx bxs-trash' onclick='remover("${alimento.nome}")'></button></td></tr>`;
            }
            total.innerHTML = Number(total.innerHTML) + Number(alimento.calorias);

            // Rolagem tabela p/ o último elemento
            tableContainer.scrollTop = table.scrollHeight;

        } else {
            alert('Alimento não encontrado');
        }
    } else {
        alert('Escolha um alimento!');
    }
});

function preencherComboBox() {
    alimentos.forEach(element => {
        comboboxAlimentos.innerHTML += `<option value="${element.nome}">${element.nome}</option>`;
    });
}

// Testa se o alimento já existe na tabela e se não adiciona no array
function verificarAlimentoTabela(alimento) {
    if (arrayTabela.includes(alimento.nome)) {
        const trs = document.querySelectorAll('tr');

        trs.forEach((tr) => {
            let array = tr.innerHTML.replaceAll("/", "").split("<td>");
            if ( array != null) {
                // Verifica se o segundo elemento é undefined
                if (typeof array[1] != "undefined") {
                    var descAlimento = array[1].split(" ")
                    if (descAlimento.length > 1) {
                        if (!isNaN(descAlimento[0])) {
                            descAlimento.shift();
                        }
                    }
                    descAlimento = descAlimento.toString().replaceAll(",", " ");
                    
                    if ( descAlimento == alimento.nome) {
                        let qtde = (Number(array[5])+Number(alimento.calorias)) / Number(alimento.calorias);
                        tr.innerHTML = `<td>${qtde + " " + descAlimento}</td><td>${array[3]}</td><td>${Number(array[5])+Number(alimento.calorias)}</td><td><button id="btn-remover" class='bx bxs-trash' onclick='remover("${descAlimento}")'></button></td>`;
                    }
                }
                
            }
        });
        return true;
      } else {
        arrayTabela.push(alimento.nome);
        return false;
      }
}

// Método do botão de limpar a tabela
btnLimparTabela.addEventListener('click', () => {
    resetarTabela();
});

// Resetar tabela
function resetarTabela() {
    table.innerHTML = `<tr><th>Alimento</th><th>Porção</th><th>Calorias</th><th>Del</th></tr><tr></tr><tr><td>-</td><td>-</td><td>-</td><td><button id="btn-remover" class='bx bxs-trash'></button></td></tr>`;

    primeiroAlimento = true;
    arrayTabela.length = 0;
    total.innerHTML = 0;
}

// Remover alimento da tabela através do botão "btn-remover"
function remover(nomeAlimento) {
    const alimentoLista = alimentos.find( alimento => alimento.nome == nomeAlimento);
    var trHtml = document.querySelectorAll('tr');

    trHtml.forEach((tr) => {
        let array = tr.innerHTML.replaceAll("/", "").split("<td>");
        if ( array != null) {
            // Verifica se o segundo elemento é undefined (onde está o nome do alimento)
            if (typeof array[1] != "undefined") {
                // Transforma o nome do alimento em um array que foi separado por espaço
                var descAlimento = array[1].split(" ")
                if (descAlimento.length > 1) {
                    // Verifica se o alimento tem um numero na frente e o remove
                    if (!isNaN(descAlimento[0])) {
                        descAlimento.shift();
                    }
                }
                // Transforma o array do nome do alimento em uma string, trocando as , por espaço como o nome original
                descAlimento = descAlimento.toString().replaceAll(",", " ");
                
                if ( descAlimento == alimentoLista.nome) {
                    let qtde = (Number(array[5])-Number(alimentoLista.calorias)) / Number(alimentoLista.calorias);

                    if (qtde > 0) {
                        tr.innerHTML = `<td>${qtde + " " + descAlimento}</td><td>${array[3]}</td><td>${Number(array[5])-Number(alimentoLista.calorias)}</td><td><button id="btn-remover" class='bx bxs-trash' onclick='remover("${descAlimento}")'></button></td>`;

                        total.innerHTML = Number(total.innerHTML) - Number(alimentoLista.calorias);
                    } else {
                        if (trHtml.length <= 2) {
                            resetarTabela();
                        } else {
                            tr.remove();
                            if (arrayTabela.length > 0) {
                                arrayTabela = arrayTabela.filter(al => al != nomeAlimento);
                            }
                            total.innerHTML = Number(total.innerHTML) - Number(alimentoLista.calorias);
                        }
                    }
                    
                }
            }
            
        }
    });
}

/* Evento botão voltar ao topo */
btnVoltarAoTopo.addEventListener("click", function() {
    console.log('clicou')
    window.scrollTo(0, 0);
});

/*
Método utilizado para extrair os dados dos alimentos de um js da internet

const ali = [
    {
        "nome": "Abacate",
        "porcao": "1 abacate (200 g)",
        "calorias": 320
    }
]

for (let i = 0; i < produtos.length; i++) {
    let array = produtos[i].split("|");
    let alsep = {
        "nome": array[1],
        "porcao": array[2],
        "calorias": array[3]
    }
    ali.push(alsep);
}

console.log(ali)
*/
