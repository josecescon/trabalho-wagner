const lanches =[

    { id: "lanche1", nome: "ricardinho picante", preco: 32.50},
    { id: "lanche2", nome: "vegan ricardinho", preco: 35.00},
    { id: "lanche3", nome: "ricardinho classic", preco: 20.00},   
    { id: "lanche4", nome: "ricardinho kids", preco: 28.90},
    { id: "lanche5", nome: "ricardinho duplo", preco: 40.00},
    { id: "lanche6", nome: "ricardinho wraps", preco: 32.00},
]

const relatorio =[

    { id: "relatorio1", entregador: "jose", local :"jorge schimmelpfeng"},
    { id: "relatorio2", entregador: "alex", local :"morumbi"},
    { id: "relatorio3", entregador: "hytalo", local :"ayrton senna"},
    { id: "relatorio4", entregador: "felipe", local :"felipe wandscheer"},
    { id: "relatorio5", entregador: "alexandre", local :"av. parana"},
    { id: "relatorio6", entregador: "jair", local :"av. brasil"},
    { id: "relatorio7", entregador: "luiz", local :"rua urupes"},
    { id: "relatorio8", entregador:  "dilma" , local :"conj. Libra"},
]

const acompanhamntos=[
    { id: "acompanhamento1", nomea: "batata pequena snack", precco:5.00},
    { id: "acompanhamento2", nomea: "batatas do chefe", precco:7.00},
    { id: "acompanhamento3", nomea: "batatas com chedar", precco:10.00},
    { id: "acompanhamento4", nomea: "batata grande", precco:9.00},
    { id: "acompanhamento5", nomea: "batata média", precco:7.50},
    { id: "acompanhamento6", nomea: "torta de maçã", precco:10.00},
    { id: "acompanhamento7", nomea: "batata rústica", precco:8.00},
    { id: "acompanhamento8", nomea: "batata com bacon", precco:12.00},

    ]
 const bebidas=[
    { id: "acompanhamentob1", nome: "coca cola", predo: 6.00},
    { id: "acompanhamentob2", nome: "fanta laranja", predo: 6.00},
    { id: "acompanhamentob3", nome: "fanta uva", predo: 6.00},
    { id: "acompanhamentob4", nome: "sprite", predo: 6.00},
    { id: "acompanhamentob5", nome: "chá gelado", predo: 7.00},
    { id: "acompanhamentob6", nome: "suco de laranja", predo: 5.00},
    { id: "acompanhamentob7", nome: "suco de beterraba", predo: 5.00},
    { id: "acompanhamentob8", nome: "água com gás", predo: 4.50 },
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

    const bebidas2 = document.getElementById("bebida");
    for (let i = 0; i < bebidas.length; i++){
        const item = bebidas[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        bebidas2.appendChild(option);
    }
}

function mandaOpcoes(){
    const localEntrega = document.getElementById("rua")

};