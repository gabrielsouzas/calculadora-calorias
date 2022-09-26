const input = document.querySelector('#inpalimentos');
const btnAdd = document.querySelector('#btnadd');
const table = document.querySelector('table');
const tableContainer = document.querySelector('#table-container');
const total = document.querySelector('#total');
const comboboxAlimentos = document.querySelector('#list-alimentos');
const btnLimparTabela = document.querySelector('#btn-limpar');

var primeiroAlimento = true;
const arrayTabela = [];

// Preenche a caixa de seleção de alimentos com o array de objetos "alimentos"
preencherComboBox();

// Evento clique do botão adicionar alimento
btnAdd.addEventListener('click', () => {
    if (input.value != null && input.value.length > 0) {
        const alimento = alimentos.find( alimento => alimento.nome == input.value);
        if (alimento != null) {
            if (primeiroAlimento) {
                // Limpa a tabela
                table.innerHTML = '<tr><th>Alimento</th><th>Porção</th><th>Calorias</th></tr><tr></tr>';
                primeiroAlimento = false;
            }
            
            if (!verificarAlimentoTabela(alimento)) {
                table.innerHTML += `<tr><td>${alimento.nome}</td><td>${alimento.porcao}</td><td>${alimento.calorias}</td></tr>`;
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
                        tr.innerHTML = `<td>${qtde + " " + descAlimento}</td><td>${array[3]}</td><td>${Number(array[5])+Number(alimento.calorias)}</td>`;
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
    table.innerHTML = '<tr><th>Alimento</th><th>Porção</th><th>Calorias</th></tr><tr></tr><tr><td>-</td><td>-</td><td>-</td></tr>';

    primeiroAlimento = true;
    arrayTabela.length = 0;
    total.innerHTML = 0;
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
