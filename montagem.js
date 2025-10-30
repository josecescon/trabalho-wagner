const quantidades = {
    brioche: 1,
    baguete: 0,
    frances: 0,
    austra: 0,
    alface: 1,
    tomate: 1,
    picles: 1,
    couve: 1,
    cebola_car: 1,
    onion: 1,
    fried: 1,
    bacon: 1,
    alho: 0,
    maionese: 1,
    mostarda: 1,
    ketchup: 1
};

const v_montagem_data = [
   {id: "brioche", nome: "pao brioche", preco: 3.00},
   {id: "baguete", nome: " pao baguete", preco: 8.00},
   {id: "frances", nome: "pao frances", preco: 2.00},
   {id: "austra", nome: "pao autraliano", preco: 4.00},
   {id: "alface", nome: "alface", preco: 0.30},
   {id: "tomate", nome: "tomate", preco: 0.30},
   {id: "picles", nome: "picles", preco: 0.40},
   {id: "couve", nome: "couve", preco: 0.30},
   {id: "cebola_car", nome: "cebola caramelizada", preco: 1.00},
   {id: "onion", nome: "onion ring", preco: 1.00},
   {id: "fried", nome: "batata frita", preco: 2.00},
   {id: "bacon", nome: "bacon", preco: 3.00},
   {id: "alho", nome: "alho", preco: 2.00},
   {id: "maionese", nome: "maionese", preco: 1.50},
   {id: "mostarda", nome: "mostarda", preco: 1.50},
   {id: "ketchup", nome: "ketchup", preco: 1.50},
];

function atualizarContador(nomeItem, valor) {
    if (quantidades[nomeItem] !== undefined) {
        quantidades[nomeItem] += valor;
        if (quantidades[nomeItem] < 0) {
            quantidades[nomeItem] = 0;
        }

        const idContador = `n_${nomeItem}`;
        const elementoP = document.getElementById(idContador);
        if (elementoP) {
            elementoP.textContent = quantidades[nomeItem];
        }
    }
}

function inicializarContadores() {
    for (const item in quantidades) {
        const idContador = `n_${item}`;
        const elementoP = document.getElementById(idContador);
        if (elementoP) {
            elementoP.textContent = quantidades[item];
        }
    }
}

function n_brioche() { atualizarContador('brioche', 1); }
function nm_brioche() { atualizarContador('brioche', -1); }
function n_baguete() { atualizarContador('baguete', 1); }
function nm_baguete() { atualizarContador('baguete', -1); }
function n_frances() { atualizarContador('frances', 1); }
function nm_frances() { atualizarContador('frances', -1); }
function n_austra() { atualizarContador('austra', 1); }
function nm_austra() { atualizarContador('austra', -1); }

function n_alface() { atualizarContador('alface', 1); }
function nm_alface() { atualizarContador('alface', -1); }
function n_tomate() { atualizarContador('tomate', 1); }
function nm_tomate() { atualizarContador('tomate', -1); }
function n_picles() { atualizarContador('picles', 1); }
function nm_picles() { atualizarContador('picles', -1); }
function n_couve() { atualizarContador('couve', 1); }
function nm_couve() { atualizarContador('couve', -1); }

function n_cebola_car() { atualizarContador('cebola_car', 1); }
function nm_cebola_car() { atualizarContador('cebola_car', -1); }
function n_onion() { atualizarContador('onion', 1); }
function nm_onion() { atualizarContador('onion', -1); }
function n_fried() { atualizarContador('fried', 1); }
function nm_fried() { atualizarContador('fried', -1); }
function n_bacon() { atualizarContador('bacon', 1); }
function nm_bacon() { atualizarContador('bacon', -1); }

function n_alho() { atualizarContador('alho', 1); }
function nm_alho() { atualizarContador('alho', -1); }
function n_maionese() { atualizarContador('maionese', 1); }
function nm_maionese() { atualizarContador('maionese', -1); }
function n_mostarda() { atualizarContador('mostarda', 1); }
function nm_mostarda() { atualizarContador('mostarda', -1); }
function n_ketchup() { atualizarContador('ketchup', 1); }
function nm_ketchup() { atualizarContador('ketchup', -1); }

document.addEventListener('DOMContentLoaded', inicializarContadores);

function ativarElemento() {
    const elemento = document.getElementById('elemento-teste');
    elemento.classList.add('ativo');
}
function alternarElemento() {
    const elemento = document.getElementById('elemento-teste');
    elemento.classList.toggle('ativo');
}