const lanches = [
    { id: "lanche1", nome: "Ricardinho Picante", preco: 32.50 },
    { id: "lanche2", nome: "Vegan Ricardinho", preco: 35.00 },
    { id: "lanche3", nome: "Ricardinho Classic", preco: 20.00 },
    { id: "lanche4", nome: "Ricardinho Kids", preco: 28.90 },
    { id: "lanche5", nome: "Ricardinho Duplo", preco: 40.00 },
    { id: "lanche6", nome: "Ricardinho Wraps", preco: 32.00 },
    { id: "lanche7", nome: "Cerqueira em chamas", preco: 42.00 }
];

const relatorio = [
    { id: "relatorio1", entregador: "Jose", local: "Jorge Schimmelpfeng" },
    { id: "relatorio2", entregador: "Alex", local: "Morumbi" },
    { id: "relatorio3", entregador: "Hytalo", local: "Ayrton Senna" },
    { id: "relatorio4", entregador: "Felipe", local: "Felipe Wandscheer" },
    { id: "relatorio5", entregador: "Alexandre", local: "Av. Paraná" },
    { id: "relatorio6", entregador: "Jair", local: "Av. Brasil" },
    { id: "relatorio7", entregador: "Luiz", local: "Rua Urupês" },
    { id: "relatorio8", entregador: "Dilma", local: "Conj. Libra" }
];

const acompanhamentos = [
    { id: "acomp1", nome: "Batata Pequena snack", preco: 5.00 },
    { id: "acomp2", nome: "Batata do Chefe", preco: 7.00 },
    { id: "acomp3", nome: "Batata com Cheddar", preco: 10.00 },
    { id: "acomp4", nome: "Batata Grande", preco: 9.00 },
    { id: "acomp5", nome: "Batata Média", preco: 7.50 },
    { id: "acomp6", nome: "Torta de Maçã", preco: 10.00 },
    { id: "acomp7", nome: "Batata com Atum", preco: 8.00 },
    { id: "acomp8", nome: "Batata com Bacon", preco: 12.00 },
    { id: "acomp9", nome: "JP Batatas Rústicas", preco: 14.00 }
];

const bebidas = [
    { id: "beb1", nome: "Coca Cola", preco: 6.00 },
    { id: "beb2", nome: "Fanta Laranja", preco: 6.00 },
    { id: "beb3", nome: "Fanta Uva", preco: 6.00 },
    { id: "beb4", nome: "Sprite", preco: 6.00 },
    { id: "beb5", nome: "Chá Gelado", preco: 7.00 },
    { id: "beb6", nome: "Suco de Laranja", preco: 5.00 },
    { id: "beb7", nome: "Suco de Beterraba", preco: 5.00 },
    { id: "beb8", nome: "Água com Gás", preco: 4.50 }
];

const locais = [
    { id: "rua0", nome: "Jorge Schimmelpfeng" },
    { id: "rua1", nome: "Morumbi" },
    { id: "rua2", nome: "Ayrton Senna" },
    { id: "rua3", nome: "Felipe Wandscheer" },
    { id: "rua4", nome: "Av Paraná" },
    { id: "rua5", nome: "Av Brasil" },
    { id: "rua6", nome: "Rua Urupês" },
    { id: "rua7", nome: "Conj Libra" }
];

const montagem = [
    { id: "", nome: ""},
    { id: "", nome: ""},
    { id: "", nome: ""},
    { id: "", nome: ""},
    { id: "", nome: ""},
    { id: "", nome: ""},
    { id: "", nome: ""},
    { id: "", nome: ""},
    
]

function criaOption() {
    ["lanches1", "lanches2", "lanches3"].forEach(id => {
        const select = document.getElementById(id);
        lanches.forEach(item => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            select.appendChild(option);
        });
    });

    const acomp = document.getElementById("acompanhamentos");
    acompanhamentos.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        acomp.appendChild(option);
    });

    const bebida = document.getElementById("bebidas");
    bebidas.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        bebida.appendChild(option);
    });

    const rua = document.getElementById("rua");
    locais.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        rua.appendChild(option);
    });
}

function mandaOpcoes() {
    const pedido = {
        nome: document.getElementById("nome").value,
        lanche1: document.getElementById("lanches1").value,
        lanche2: document.getElementById("lanches2").value,
        lanche3: document.getElementById("lanches3").value,
        acompanhamento: document.getElementById("acompanhamentos").value,
        bebida: document.getElementById("bebidas").value,
        rua: document.getElementById("rua").value

    };

    const nomecliente = document.getElementById("nome").value;
    sessionStorage.setItem("nomecliente", nomecliente);

    localStorage.setItem("pedido", JSON.stringify(pedido));
}

function procurarPorId(lista, idProcurado) {
    return lista.find(item => item.id === idProcurado) || null;
}

function gerarRelatorio() {
    const pedido = JSON.parse(localStorage.getItem("pedido"));
    if (!pedido) return;

    const nome = sessionStorage.getItem("nomecliente");

    if(nome){
        document.getElementById("nomeclienterel").textContent = nome;


    }

    const lanche1 = procurarPorId(lanches, pedido.lanche1);
    const lanche2 = procurarPorId(lanches, pedido.lanche2);
    const lanche3 = procurarPorId(lanches, pedido.lanche3);
    const acomp = procurarPorId(acompanhamentos, pedido.acompanhamento);
    const bebida = procurarPorId(bebidas, pedido.bebida);
    const local = procurarPorId(locais, pedido.rua);

    const entregador = relatorio[Math.floor(Math.random() * relatorio.length)];

    const total = (lanche1 ? lanche1.preco : 0) + (lanche2 ? lanche2.preco : 0) + (lanche3 ? lanche3.preco : 0) + (acomp ? acomp.preco : 0) + (bebida ? bebida.preco : 0);

    document.getElementById("local1").textContent = local ? local.nome : "";
    document.getElementById("entregador1").textContent = entregador.entregador;
    
    let lanchesescolhidos = [];
    if (lanche1) lanchesescolhidos.push(lanche1.nome);
    if (lanche2) lanchesescolhidos.push(lanche2.nome);  
    if (lanche3) lanchesescolhidos.push(lanche3.nome);

    document.getElementById("lanche1").textContent = lanchesescolhidos.join(" | ");

    document.getElementById("preco1").textContent = `R$ ${total.toFixed(2)}`;

    let acompescolhidos = [];
    if (acomp) acompescolhidos.push(acomp.nome);

    document.getElementById("acomp").textContent = acompescolhidos.join("")

    let bebidass = [];
    if (bebida) bebidass.push(bebida.nome);

    document.getElementById("bebida").textContent = bebidass.join("")
}
function ativarElemento() {
    const elemento = document.getElementById('elemento-teste');
    elemento.classList.add('ativo');
}
function alternarElemento() {
    const elemento = document.getElementById('elemento-teste');
    elemento.classList.toggle('ativo');
}