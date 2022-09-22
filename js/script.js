const input = document.querySelector('#inpalimentos');
const btnAdd = document.querySelector('#btnadd');
const table = document.querySelector('table');
const total = document.querySelector('#total');
const comboboxAlimentos = document.querySelector('#list-alimentos');

var primeiroAlimento = true;

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

            total.innerHTML = Number(total.innerHTML) + alimento.calorias;
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
