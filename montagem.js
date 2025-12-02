const quantidades = {
    brioche: 0,
    baguete: 0,
    frances: 0,
    austra: 0,
    alface: 0,
    tomate: 0,
    picles: 0,
    couve: 0,
    cebola_car: 0,
    onion: 0,
    fried: 0,
    bacon: 0,
    alho: 0,
    maionese: 0,
    mostarda: 0,
    ketchup: 0,
    artesanal: 0,
    frango_empanado: 0,
    carne_vegana: 0,
    carne_costela: 0,
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

   {id: "artesanal", nome: "carne artesanal", preco: 7.00},
   {id: "frango_empanado", nome:"frango artesanal", preco: 4.00},
   {id: "carne_vegana", nome: "carne vegana", preco: 7.00},
   {id: "carne_costela", nome: "carne de costela", preco: 7.00},


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

function salvarMontagem() {
    let pedidoMontado = [];
    let precoTotal = 0;

    v_montagem_data.forEach(itemData => {
        const id = itemData.id;
        const quantidade = quantidades[id];

        if (quantidade > 0) {
            const itemDetalhe = {
                nome: itemData.nome,
                quantidade: quantidade,
                precoUnitario: itemData.preco,
                subtotal: quantidade * itemData.preco
            };
            pedidoMontado.push(itemDetalhe);
            precoTotal += itemDetalhe.subtotal;
        }
    });

    localStorage.setItem("pedidoMontagem", JSON.stringify(pedidoMontado));
    localStorage.setItem("totalMontagem", precoTotal.toFixed(2));
}

function n_brioche() { 
    if (quantidades.brioche < 1){ 
        atualizarContador('brioche', 1); 
    };
};
function nm_brioche() { atualizarContador('brioche', -1); }

function n_baguete() { 
    if (quantidades.baguete < 1){
        atualizarContador('baguete', 1); 
    };
};
function nm_baguete() { atualizarContador('baguete', -1); }

function n_frances() {
    if(quantidades.frances < 1){ 
        atualizarContador('frances', 1); 
    };
};
function nm_frances() { atualizarContador('frances', -1); }

function n_austra() {
    if(quantidades.austra < 1){ 
        atualizarContador('austra', 1); 
    };
};
function nm_austra() { atualizarContador('austra', -1); }


function n_artesanal(){
    if(quantidades.artesanal < 5){
        atualizarContador('artesanal', 1);
    };
};
function nm_artesanal(){ atualizarContador('artesanal', -1);}

function n_costela(){
    if(quantidades.carne_costela < 5){ 
        atualizarContador('carne_costela', 1);
    };
;}
function nm_costela(){ atualizarContador('carne_costela', -1);}

function n_frango(){ 
    if(quantidades.frango_empanado < 5){ 
        atualizarContador('frango_empanado', 1);
    };
};
function nm_frango(){ atualizarContador('frango_empanado', -1);}

function n_vegano(){ 
    if(quantidades.carne_vegana < 5){ 
        atualizarContador('carne_vegana', 1);
    };
};
function nm_vegano(){ atualizarContador('carne_vegana', -1);}


function n_alface() { 
    if(quantidades.alface < 3){ 
        atualizarContador('alface', 1); 
    };
};
function nm_alface() { atualizarContador('alface', -1); }

function n_tomate() { 
    if(quantidades.tomate < 7){     
        atualizarContador('tomate', 1); 
    };
};
function nm_tomate() { atualizarContador('tomate', -1); }

function n_picles() { 
    if(quantidades.picles < 5){     
        atualizarContador('picles', 1); 
    };
};
function nm_picles() { atualizarContador('picles', -1); }

function n_couve() { 
    if(quantidades.couve < 3){     
        atualizarContador('couve', 1); 
    };
};
function nm_couve() { atualizarContador('couve', -1); }


function n_cebola_car() { 
    if(quantidades.cebola_car < 6){ 
        atualizarContador('cebola_car', 1); 
    };
};
function nm_cebola_car() { atualizarContador('cebola_car', -1); }

function n_onion() { 
    if(quantidades.onion < 5){     
        atualizarContador('onion', 1); 
    };
};
function nm_onion() { atualizarContador('onion', -1); }

function n_fried() { 
    if(quantidades.fried < 8){         
        atualizarContador('fried', 1); 
    };
};
function nm_fried() { atualizarContador('fried', -1); }

function n_bacon() { 
    if(quantidades.bacon < 10){     
        atualizarContador('bacon', 1); 
    }
}
function nm_bacon() { atualizarContador('bacon', -1); }


function n_alho() { 
    if(quantidades.alho < 3){     
        atualizarContador('alho', 1);
    }
}
function nm_alho() { atualizarContador('alho', -1); }

function n_maionese() { 
    if(quantidades.maionese < 3){ 
        atualizarContador('maionese', 1); 
    }
}
function nm_maionese() { atualizarContador('maionese', -1); }

function n_mostarda() { 
    if(quantidades.mostarda < 3){    
        atualizarContador('mostarda', 1); 
    }
}
function nm_mostarda() { atualizarContador('mostarda', -1); }

function n_ketchup() { 
    if(quantidades.ketchup < 3){ 
        atualizarContador('ketchup', 1); 
    }   
}
function nm_ketchup() { atualizarContador('ketchup', -1); }


document.addEventListener('DOMContentLoaded', inicializarContadores);

function reset(){   

 quantidades.alface = 0;
 quantidades.bacon = 0;
 quantidades.austra = 0;
 quantidades.baguete = 0;
 quantidades.alho = 0;
 quantidades.brioche = 0; 
 quantidades.carne_costela = 0;
 quantidades.carne_vegana = 0;
 quantidades.cebola_car = 0;
 quantidades.couve= 0;
 quantidades.picles= 0;
 quantidades.ketchup= 0;
 quantidades.onion = 0;
 quantidades.artesanal = 0;
 quantidades.brioche = 0;
 quantidades.maionese = 0;
 quantidades.mostarda = 0;
}