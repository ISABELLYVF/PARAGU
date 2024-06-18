const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma menina e ela ta dando em cima de vc, oque vc faz?",
        alternativas: [
            {
                texto:"sair correndo e fingir ser um deb mental";
                afirmacao: "afirmacao";
            }
            {
                texto:"conversar com ela";
                afirmacao: "afirmacao";
            }
]
    },
    {
        enunciado: "depois a isabelly te convida pra sair, que atitude você toma?",
        alternativas: [
            {
                texto:" aceitar o convite" ;
                    afirmacao: "afirmacao";
    }
    {
              texto: " dizer que esta ocupado e sair com a menina estranha";
              afirmacao: "afirmacao";
    }
        ]
    },
    {
        enunciado: " você esta em um campeonato de vôlei, e no final da partida as meninas pedem um autografo no peito delas, oque você faria",
        alternativas: [
            {
            texto: "assinar no peito de todas";
            afirmacao:"afirmacao";
        }
        {
         texto: "esfregar a alianca na cara delas";
           afirmacao: "afirmacao";
        ]
        },
    {
        enunciado: "você ve o cara dando em cima da isa e dando flores, oque você faria?",
        alternativas: [
            {
            texto: "deixaria a Isa com o cara por que ele é melhor que você";
            afirmacao: "afirmacao";
    }
    {
            texto: "puxaria a Isa pra longe dele";
            afirmacao:" afirmacao";
        ]
    },
    {
        enunciado: "oque você faria no dia do casamento da isa de não fosse com você",
        alternativas: [
            {
                texto:" roubar a arma do seu pai e atirar em todo mundo";
                afirmacao:"afirmacao";
    }
    {
               texto:"deixa ela se casar e sofrer pelo resto da vida";
                   afirmacao:"afirmacao";
        ]
    },
]; 

let atual = 0;
let perguntaAtual;
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraalternativa()
}
function mostraalternativa() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button"); 
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

