const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "no ambito social, você prefere",
        alternativas: [
            {
                texto: "você tem muita sorte durante toda a vida,mas 25% do racismo almenta",
                afirmação: "25% do racismo almenta,",
            },
            {
                texto: "você deve tirar a vida de 25 inocentes,mas o crime no mundo diminui em 25%",
                afirmação: "o crime no mundo diminui em 25%,"
            }
        ]

    },
    {
        enunciado: "no ambito ambiental,você prefere",
        alternativas: [
            {
                texto: "você sabe todos as especies de animas que existem,mas metade das especies exitentes morrem",
                afirmação: "metade das especies exitentes morrem,",
            },
            {
                texto: "você acaba com o desmatamento,mas todas as plantas são toxicas para você",
                afirmação: "todas as plantas são toxicas para você,",
            }
        ]
    },
    {
        enunciado: "no ambito tecnologico,você prefere",
        alternativas: [
            {
                texto: "os robos nunca vão destruir a humanidade,mas você nunca mais poderá utilizar redes sociais",
                afirmação: "você nunca mais poderá utilizar redes sociais",
            },
            {
                texto: " você sabe tudo sobre tecnologia,mas você deve ir para um hospício",
                afirmação: "você deve ir para um hospício"
            }

        ]
    }
]


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const pergunta of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = pergunta.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(pergunta));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(pergunta) {
    const afirmacoes = pergunta.afirmação;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPerguntas();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em resumo, você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPerguntas();

