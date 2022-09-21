const input = document.querySelector('#inpalimentos');
const btnAdd = document.querySelector('#btnadd');
const table = document.querySelector('table');
const total = document.querySelector('#total');

btnAdd.addEventListener('click', () => {
    if (input.value != null && input.value.length > 0) {
        if (alimentos[input.value] != null) {
            table.innerHTML += `<tr><td>${input.value}</td><td>${alimentos[input.value]["calorias"]}</td></tr>`;

            total.innerHTML = Number(total.innerHTML) + alimentos[input.value]["calorias"];
        } else {
            alert('Alimento não encontrado');
        }
    } else {
        alert('Escolha um alimento!');
    }
});
