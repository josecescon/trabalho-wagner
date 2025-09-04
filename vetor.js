const lanches =[

    { id: "lanche1", nome: "Ricardinho Picante", preco: 32.50},
    { id: "lanche2", nome: "Vegan Ricardinho", preco: 35.00},
    { id: "lanche3", nome: "Ricardinho Classic", preco: 20.00},   
    { id: "lanche4", nome: "Ricardinho Kids", preco: 28.90},
    { id: "lanche5", nome: "Ricardinho Duplo", preco: 40.00},
    { id: "lanche6", nome: "Ricardinho Wraps", preco: 32.00},
    { id: "lanche7", nome: "Cerqueira em chamas", preco: 42.00},
]

const relatorio =[

    { id: "relatorio1", entregador: "Jose", local :"Jorge schimmelpfeng"},
    { id: "relatorio2", entregador: "Alex", local :"Morumbi"},
    { id: "relatorio3", entregador: "Hytalo", local :"Ayrton senna"},
    { id: "relatorio4", entregador: "Felipe", local :"Felipe wandscheer"},
    { id: "relatorio5", entregador: "Alexandre", local :"Av. Paraná"},
    { id: "relatorio6", entregador: "Jair", local :"Av. Brasil"},
    { id: "relatorio7", entregador: "Luiz", local :"Rua Urupes"},
    { id: "relatorio8", entregador: "Dilma" , local :"Conj. Libra"},
]

const acompanhamentos=[
    { id: "acompanhamento1", nomea: "Batata Pequena snack", precco:5.00},
    { id: "acompanhamento2", nomea: "Batata do Chefe", precco:7.00},
    { id: "acompanhamento3", nomea: "Batata com Chedar", precco:10.00},
    { id: "acompanhamento4", nomea: "Batata Grande", precco:9.00},
    { id: "acompanhamento5", nomea: "Batata Média", precco:7.50},
    { id: "acompanhamento6", nomea: "Torta de Maçã", precco:10.00},
    { id: "acompanhamento7", nomea: "Batata com Atum", precco:8.00},
    { id: "acompanhamento8", nomea: "Batata com Bacon", precco:12.00},
    { id: "acompanhamento8", nomea: "Jp batatas Rústicas", precco:14.00},

    ]
 const bebidas=[
    { id: "acompanhamentob1", nome: "Coca Cola", predo: 6.00},
    { id: "acompanhamentob2", nome: "Fanta Laranja", predo: 6.00},
    { id: "acompanhamentob3", nome: "Fanta Uva", predo: 6.00},
    { id: "acompanhamentob4", nome: "Sprite", predo: 6.00},
    { id: "acompanhamentob5", nome: "Chá Gelado", predo: 7.00},
    { id: "acompanhamentob6", nome: "Suco de Laranja", predo: 5.00},
    { id: "acompanhamentob7", nome: "Suco de Beterraba", predo: 5.00},
    { id: "acompanhamentob8", nome: "Água com Gás", predo: 4.50 },
]

const locais=[

    { id:"rua0",value: "jorge_shimelpfeng" , nome: "Jorge Schimmelpfeng"},
    { id:"rua1",value: "morunbi" , nome: "Morumbi"},
    { id:"rua2",value: "ayrton_senna", nome: "Ayrton Senna"},
    { id:"rua3",value: "felipe_wandscheer" , nome: "Felipe Wandscheer"},
    { id:"rua4",value: "paraná" , nome: "Av Paraná"},
    { id:"rua5",value: "brasil" , nome: "Av Brasil"},
    { id:"rua6",value: "urupes" , nome: "Rua Urupês"},
    { id:"rua7",value: "conj_libra" , nome: "Conj Libra"},

]

function criaOption(){

    const locall1 = document.getElementById("lanches1");
    for (let i = 0; i < lanches.length; i++){
        const item = lanches[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        locall1.appendChild(option);
    }

    const locall2 = document.getElementById("lanches2");
    for (let i = 0; i < lanches.length; i++){
        const item = lanches[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        locall2.appendChild(option);
    }
    
    const locall3 = document.getElementById("lanches3");
    for (let i = 0; i < lanches.length; i++){
        const item = lanches[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        locall3.appendChild(option);
    }

    const locall4 = document.getElementById("acompanhamento");
    for (let i = 0; i < acompanhamntos.length; i++){
        const item = acompanhamntos[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nomea;
        locall4.appendChild(option);
    }

    const locall5 = document.getElementById("rua");
    for (let i = 0; i < locais.length; i++){
        const item = locais[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        locall5.appendChild(option);
    }

    const bebidas2 = document.getElementById("bebidas");
    for (let i = 0; i < bebidas.length; i++){
        const item = bebidas[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        bebidas2.appendChild(option);
    }
}

function mandaOpcoes(){
    const localEntrega = document.getElementById("relatorio")

};

function procurarPorId(lista, idProcurado){
    for (let i = 0; i < lista.length; i++){
        if (lista[i].id === idProcurado){
            return lista[i];
        }
    }
    return null;
}
preencherOpcoes();

function gerarRelatorio(){
    const nome = document.getElementById("nome").value;
    const quantidade = parseInt(document.getElementById("quantidade ").value);
    const lancheId = document.getElementById("lanches").value;
    const acompanhamentoId = document.getElementById("acompanhamentos").value;
    const bebidaId = document.getElementById("bebidas").value;
    const localId = document.getElementById("locais").value;

    var lanche = procurarPorId(lanches, lancheId);
    var acompanhamentos = procurarPorId(acompanhamentos, acompanhamentoId);
    var bebida = procurarPorId(bebidas, bebidaId);
    var local = procurarPorId(locais, localId);

    let total = (lanche.preco * quantidade) + acompanhamntos.preco + bebida.preco;
}
function gerarRelatorio() {
    const relatorioHTML = `

    <h2> Relatório do pedido</h2>
    <p><strong>Nome do cliente: </strong> ${nome} </p>
    <p><strong>Nome do Entregador: </strong> ${relatorio}</p>
    <p><strong>Local de Entrega: </strong> ${locais}</p>
    <p><strong>Lanche: </strong> ${lanches.nome} x ${quantidade}</p>
    <p><strong>Lanche: </strong> ${lanches.nome} x ${quantidade}</p>
    <p><strong>Lanche: </strong> ${lanches.nome} x ${quantidade}</p>
    <p><strong>Acompanhamento: </strong> ${acompanhamentos}</p>
    <p><strong>Bebida: </strong> ${bebidas}</p>
    
    `; 

    documento.getElementById("relatorio").innerHTML = relatorioHTML;
}   