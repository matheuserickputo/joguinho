const caixaPrincipal = document.querySelector('.caixaPrincipal')
const caixaPerguntas = document.querySelector('.caixaPerguntas')
const caixaAlternativas = document.querySelector('.caixaAlternativa')
const caixaresultado = document.querySelector('.caixaResultado')
const textoResultado = document.querySelector('.textoResultado')

const perguntas =[
{
    enunciado:"no ambito social, você prefere",
    alternativas:[
        {
            texto:"você tem muita sorte durante toda a vida",
            afirmação:"mas 25% do racismo almenta",
        },
        {
            texto:"você deve tirar a vida de 25 inocentes",
            afirmação:"mas o crime no mundo diminui em 25%"
        }
    ],
    enunciado:"no ambito ambiental,você prefere",
    alternativas:[
        {
            texto:"você sabe todos as especies de animas que existem",
            afirmação:"mas metade dessas especies morrem",
        },
        {
            texto:"você acaba com o desmatamento",
            afirmação:"mas todas as plantas são toxicas para você",
        }
    ],
    enunciado:"no ambito tecnologico,você prefere",
    alternativas:[
        {
            texto:"os robos nunca vão destruir a humanidade",
            afirmação:"mas voê nunca mais poderá utilizar redes sociais"
        }

    ]
}
]

let atual = 0
let perguntaAtual;

function mostraPerguntas (){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativa){
        const botaoAlternativa = document.createElement("button")
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function(){
            atual++;
            mostraPerguntas();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPerguntas();






