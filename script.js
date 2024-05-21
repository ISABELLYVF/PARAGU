const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma menina e ela ta dando em cima de vc, oque vc faz?",
        alternativas: [
            "sair correndo e fingir ser um deb mental!",
            "conversar com ela!"
        ]
    },
    {
        enunciado: "depois a isabelly te convida pra sair, que atitude você toma?",
        alternativas: [
            "aceitar o convite!",
            "dizer que esta ocupado e sair com a menina estranha",
        ]
    },
    {
        enunciado: " você esta em um campeonato de vôlei, e no final da partida as meninas pedem um autografo no peito delas, oque você faria?",
        alternativas: [
            "assina no peito de todas :(",
            "ou esfrega a aliança na cara delas"
        ]
    },
    {
        enunciado: "você ve o cara dando em cima da isa e dando flores, oque você faria?",
        alternativas: [
            "deixaria a isa com o cara por que ele é melhor que você.",
            "ou a puxaria pela cintura e daria um beijão "
        ]
    },
    {
        enunciado: "oque você faria no dia do casamento da isa de não fosse com você",
        alternativas: [
           "rouba a arma do seu pai e atira emtodo mundo",
            "deixar se casar e sofra pelo restoda sua vida "
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
