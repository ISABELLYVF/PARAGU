const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma menina e ela ta dando em cima de vc, o que vc faz?",
        alternativas: [
            {
                texto: "sair correndo e fingir ser um deb mental",
                afirmacao: "afirmacao",
            },
            {
                texto: "conversar com ela",
                afirmacao: "afirmacao",
            }
        ]
    },
    {
        enunciado: "Depois a Isabelly te convida pra sair, que atitude você toma?",
        alternativas: [
            {
                texto: "aceitar o convite",
                afirmacao: "afirmacao",
            },
            {
                texto: "dizer que está ocupado e sair com a menina estranha",
                afirmacao: "afirmacao",
            }
        ]
    },
    {
        enunciado: "Você está em um campeonato de vôlei, e no final da partida as meninas pedem um autógrafo no peito delas, o que você faria?",
        alternativas: [
            {
                texto: "assinar no peito de todas",
                afirmacao: "afirmacao",
            },
            {
                texto: "esfregar a aliança na cara delas",
                afirmacao: "afirmacao",
            }
        ]
    },
    {
        enunciado: "Você vê o cara dando em cima da Isa e dando flores, o que você faria?",
        alternativas: [
            {
                texto: "deixaria a Isa com o cara porque ele é melhor que você",
                afirmacao: "afirmacao",
            },
            {
                texto: "puxaria a Isa pra longe dele",
                afirmacao: "afirmacao",
            }
        ]
    },
    {
        enunciado: "O que você faria no dia do casamento da Isa se não fosse com você?",
        alternativas: [
            {
                texto: "roubar a arma do seu pai e atirar em todo mundo",
                afirmacao: "afirmacao",
            },
            {
                texto: "deixar ela se casar e sofrer pelo resto da vida",
                afirmacao: "afirmacao",
            }
        ]
    }
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    if (atual < perguntas.length) {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();
    } else {
        caixaPerguntas.textContent = "Fim do questionário!";
        caixaAlternativas.innerHTML = "";
        caixaResultado.style.display = "block";
        textoResultado.textContent = "Você completou o questionário.";
    }
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = ""; // Limpar alternativas anteriores
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => {
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
