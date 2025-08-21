const lanches =[

    { id: "lanche1", nome: "daffara picante", preco: "32,50"},
    { id: "lanche2", nome: "vegan daffara", preco: "35,00"},
    { id: "lanche3", nome: "daffara clasic", preco: "20,00"},   
    { id: "lanche4", nome: "daffarinha kids", preco: "28,90"},
    { id: "lanche5", nome: "daffara duplo", preco: "40,00"},
    { id: "lanche6", nome: "daffara wraps", preco: "32,00"},
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

    { id: "acompanhamento1", nomea: "batata pequena snack"},
    { id: "acompanhamento2", nomea: "batatas do chefe"},
    { id: "acompanhamento3", nomea: "batatas com chedar"},
    { id: "acompanhamento4", nomea: "batata grande"},
    { id: "acompanhamento5", nomea: "batata média"},
    { id: "acompanhamento6", nomea: "torta de maçã"},
    { id: "acompanhamento7", nomea: "batata rústica"},
    { id: "acompanhamento8", nomea:  "batata com bacon" },

]
const bebidas=[

    { id: "acompanhamentob1", nomeb: "coca cola"},
    { id: "acompanhamentob2", nomeb: "fanta laranja"},
    { id: "acompanhamentob3", nomeb: "fanta uva"},
    { id: "acompanhamentob4", nomeb: "sprite"},
    { id: "acompanhamentob5", nomeb: "chá gelado"},
    { id: "acompanhamentob6", nomeb: "suco de laranja"},
    { id: "acompanhamentob7", nomeb: "suco de beterraba"},
    { id: "acompanhamentob8", nomeb: "água com gás" },

]

const locais=[

    { id:"rua0",value: "jorge_shimelpfeng" , nome: "Jorge Schimmelpfeng"},
    { id:"rua1",value: "morunbi" , nome: "Morumbi"},
    { id:"rua2",value: "ayrton_senna", nome: "Ayrton Senna"},
    { id:"rua3",value: "felipe_wandscheer" , nome: "Felipe Wandscheer"},
    { id:"rua4",value: "paraná" , nome: "Av_Paraná"},
    { id:"rua5",value: "brasil" , nome: "Av Brasil"},
    { id:"rua6",value: "urupes" , nome: "Rua Urupês"},
    { id:"rua7",value: "conj_libra" , nome: "Conj Libra"},

] 

function criaOption(){
    const locall = document.getElementById("rua");
    for (let i = 0; i < locais.length; i++){
        const item = locais[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        locall.appendChild(option);
    }
}

function A(){
    alert(locais[i])
};