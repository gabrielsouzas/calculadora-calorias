/* Navbar */
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

const input = document.querySelector('#inpalimentos');
const btnAdd = document.querySelector('#btnadd');
const table = document.querySelector('table');
const tableContainer = document.querySelector('#table-container');
const total = document.querySelector('#total');
const comboboxAlimentos = document.querySelector('#list-alimentos');
const btnLimparTabela = document.querySelector('#btn-limpar');

const secaoCalculadora = document.querySelector('.calculadora');
const secaoTreino = document.querySelector('.treino');

const btnVoltarAoTopo = document.querySelector("#btn-voltar-ao-topo");
const btnTopo = document.querySelector("#btn-topo");

const menuTreino = document.querySelector('.menu-treino')

const divsMusculos = document.getElementsByClassName('musculo');
const btnTreino = document.getElementsByClassName('btn-treino');
const btnMusculoExercicio = document.querySelector('.musculo-exercicio');

const legendaContainer = document.querySelector('.legenda-container');
const legendaTreino = document.querySelector('.legenda');
const legendaTitulo = document.querySelector('.legenda-titulo');

var cliqueBtnMusculo = false;
var primeiroAlimento = true;
var arrayTabela = [];

// Controle Menu e Navbar
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {

    //console.log(window.pageYOffset);
    //console.log(legendaContainer.getBoundingClientRect().top)
/*
    if (legendaContainer.getBoundingClientRect().top >= 66 && legendaContainer.getBoundingClientRect().top <= 75) {
        legendaContainer.style.position = 'fixed';
        legendaContainer.style.top = '67px';
        legendaContainer.style.left = '16px';
        legendaContainer.style.right = '334px';
        legendaContainer.style.width = btnMusculoExercicio.getBoundingClientRect().width + 'px';//'100%';
        legendaContainer.style.padding = '5px';
    }*/

    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

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

/* Evento botão voltar ao topo*/
btnTopo.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

/* Evento botão voltar ao topo do Guia de Treino*/
btnVoltarAoTopo.addEventListener("click", function() {
    window.scrollTo(0, secaoCalculadora.clientHeight);
});

/* Função para criar o evento clique de cada botão pelo id */
function atribuirEvento(id, btnClicado, divMusculo){      
    document.getElementById(id).addEventListener("click", () => {
        if (!cliqueBtnMusculo) {

            for (i = 0; i < btnTreino.length; i++){
                if (btnTreino[i].id != btnClicado.id) {
                    btnTreino[i].style.display = 'none';
                }
            }
    
            menuTreino.style.display = 'block';
    
            /*btnClicado.classList.toggle('expandir');*/

            btnClicado.style.width = '100%';
            btnClicado.style.fontSize = '1.2rem';
            btnClicado.style.fontWeight = 'bold';
            
            
            divMusculo.style.display = 'flex';
    
            cliqueBtnMusculo = true;

            btnVoltarAoTopo.style.display = 'block';
            btnTopo.style.display = 'none';

            legendaTreino.style.display = 'flex';
            legendaTitulo.style.display = 'block';

            /*Corrigir bug de tamanho */
            secaoTreino.style.height = '100%';
            
        } else {
            
            for (i = 0; i < btnTreino.length; i++){
                if (btnTreino[i].id != btnClicado.id) {
                    btnTreino[i].style.display = 'block';
                }
            }

            menuTreino.style.display = 'grid';
    
            btnClicado.style.width = 'auto';
            btnClicado.style.fontSize = '1rem';
            btnClicado.style.fontWeight = '400';
    
            divMusculo.style.display = 'none';
    
            cliqueBtnMusculo = false;

            btnVoltarAoTopo.style.display = 'none'
            btnTopo.style.display = 'block';

            legendaTreino.style.display = 'none';
            legendaTitulo.style.display = 'none';

            secaoTreino.style.height = 'calc(100vh - 66px)';
        }
    });
}

/* Laço que percorre os buttons e cria os eventos pelo método atribuirEvento */
for (i = 0; i < btnTreino.length; i++){
    var ev = btnTreino[i].id;
    /* Atenção, as div de musculos devem estar na mesma ordem que os botões para funcionar */
    atribuirEvento(ev, btnTreino[i], divsMusculos[i]);
}

/*
function cliqueBotaoTreino(btnClicado) {
    if (!cliqueBtnMusculo) {

        console.log('entrou')

        /*
        for (i = 0; i < btnTreino.length; i++){
            var ev = btnTreino[i].id;
            if (btnTreino[i].id != btnClicado.id) {
                btnTreino[i].style.display = 'none';
            }
        }

        menuTreino.style.display = 'block';

        btnClicado.style.width = '100%';
        btnClicado.style.fontSize = '1.2rem';
        btnClicado.style.fontWeight = 'bold';
        
        sectionPeito.style.display = 'flex';

        cliqueBtnMusculo = true;
        */

        /*
        btnBiceps.style.display = 'none';
        btnCostas.style.display = 'none';
        btnTriceps.style.display = 'none';
        btnOmbro.style.display = 'none';
        btnTrapezio.style.display = 'none';
        btnPerna.style.display = 'none';
        btnAbdomen.style.display = 'none';

        menuTreino.style.display = 'block';

        
        btnPeito.style.width = '100%';
        btnPeito.style.fontSize = '1.2rem';
        btnPeito.style.fontWeight = 'bold';

        sectionPeito.style.display = 'flex';

        cliqueBtnMusculo = true;
    } else {
        btnBiceps.style.display = 'block';
        btnCostas.style.display = 'block';
        btnTriceps.style.display = 'block';
        btnOmbro.style.display = 'block';
        btnTrapezio.style.display = 'block';
        btnPerna.style.display = 'block';
        btnAbdomen.style.display = 'block';

        menuTreino.style.display = 'grid';

        btnPeito.style.width = 'auto';
        btnPeito.style.fontSize = '1rem';
        btnPeito.style.fontWeight = '400';

        sectionPeito.style.display = 'none';

        cliqueBtnMusculo = false;
    }
}
/*
btnPeito.addEventListener('click', () => {
    if (!cliqueBtnMusculo) {
        /* Esconde os outros botões 
        btnBiceps.style.display = 'none';
        btnCostas.style.display = 'none';
        btnTriceps.style.display = 'none';
        btnOmbro.style.display = 'none';
        btnTrapezio.style.display = 'none';
        btnPerna.style.display = 'none';
        btnAbdomen.style.display = 'none';

        menuTreino.style.display = 'block';

        btnPeito.style.width = '100%';
        btnPeito.style.fontSize = '1.2rem';
        btnPeito.style.fontWeight = 'bold';

        sectionPeito.style.display = 'flex';

        cliqueBtnMusculo = true;
    } else {
        btnBiceps.style.display = 'block';
        btnCostas.style.display = 'block';
        btnTriceps.style.display = 'block';
        btnOmbro.style.display = 'block';
        btnTrapezio.style.display = 'block';
        btnPerna.style.display = 'block';
        btnAbdomen.style.display = 'block';

        menuTreino.style.display = 'grid';

        btnPeito.style.width = 'auto';
        btnPeito.style.fontSize = '1rem';
        btnPeito.style.fontWeight = '400';

        sectionPeito.style.display = 'none';

        cliqueBtnMusculo = false;
    }
});*/

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
