const input = document.querySelector('#inpalimentos');
const btnAdd = document.querySelector('#btnadd');
const table = document.querySelector('table');
const total = document.querySelector('#total');
const comboboxAlimentos = document.querySelector('#list-alimentos');

var primeiroAlimento = true;

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
            table.innerHTML += `<tr><td>${alimento.nome}</td><td>${alimento.porcao}</td><td>${alimento.calorias}</td></tr>`;

            total.innerHTML = Number(total.innerHTML) + Number(alimento.calorias);
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
