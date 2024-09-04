// Seleciona os elementos do DOM
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

// Lista de perguntas e alternativas com tema cultural
const perguntas = [
    {
        enunciado: "Você está visitando um festival de música tradicional em uma cidade histórica. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é incrível! Adoro aprender sobre novas culturas através da música.",
                afirmacao: "Você se sentiu inspirado a explorar mais sobre a música tradicional e a história da cidade."
            },
            {
                texto: "Não estou muito interessado. Prefiro ouvir música moderna.",
                afirmacao: "Você decidiu aproveitar o tempo para explorar outras atrações turísticas da cidade."
            }
        ]
    },
    {
        enunciado: "Durante uma viagem ao Japão, você tem a oportunidade de participar de uma cerimônia do chá. O que você faz?",
        alternativas: [
            {
                texto: "Participa da cerimônia com entusiasmo e tenta aprender sobre a arte do chá.",
                afirmacao: "Você ficou fascinado pela tradição e planeja estudar mais sobre as cerimônias e a cultura japonesa."
            },
            {
                texto: "Agradece o convite, mas opta por explorar os pontos turísticos da cidade.",
                afirmacao: "Você ainda apreciou a experiência cultural, mas focou em outras atividades que mais lhe interessavam."
            }
        ]
    },
    {
        enunciado: "Você está em uma feira de artesanato na África. Que tipo de artesanato você se sente mais atraído?",
        alternativas: [
            {
                texto: "Máscaras tradicionais e esculturas de madeira.",
                afirmacao: "Você ficou interessado na história e significados culturais por trás das obras de arte e quer aprender mais sobre a arte africana."
            },
            {
                texto: "Tecidos e roupas coloridas feitas à mão.",
                afirmacao: "Você aprecia a beleza e a habilidade envolvidas na confecção dos tecidos e decide adquirir algumas peças como lembrança."
            }
        ]
    },
    {
        enunciado: "Você está visitando um museu de arte renascentista na Europa. Qual é o seu foco principal durante a visita?",
        alternativas: [
            {
                texto: "Estudar as obras de arte e a técnica dos artistas renascentistas.",
                afirmacao: "Você ficou impressionado com a técnica e a profundidade das obras e decide pesquisar mais sobre o período renascentista."
            },
            {
                texto: "Explorar a história dos artistas e a evolução da arte durante o Renascimento.",
                afirmacao: "Você se interessou mais pela história e contextos dos artistas, aprofundando seu conhecimento sobre o impacto do Renascimento na arte."
            }
        ]
    },
    {
        enunciado: "Você participa de um workshop de culinária tradicional italiana. O que você faz?",
        alternativas: [
            {
                texto: "Se concentra em aprender as receitas autênticas e técnicas de preparo.",
                afirmacao: "Você adquiriu novas habilidades culinárias e está animado para preparar pratos italianos em casa."
            },
            {
                texto: "Aprecia a comida e aproveita a oportunidade para socializar com outros participantes.",
                afirmacao: "Você gostou da experiência e fez novas amizades enquanto aprendia sobre a cultura culinária italiana."
            }
        ]
    },
    {
        enunciado: "Você está em uma celebração cultural na América Latina, como o Carnaval. Qual é a sua abordagem para a festa?",
        alternativas: [
            {
                texto: "Participa das danças e festejos, imergindo totalmente na cultura local.",
                afirmacao: "Você se divertiu muito e se sentiu parte da celebração, aprendendo mais sobre as tradições locais."
            },
            {
                texto: "Observa a festa de uma maneira mais reservada, apreciando a cultura de uma perspectiva mais tranquila.",
                afirmacao: "Você ainda aproveitou a atmosfera vibrante, mas preferiu uma abordagem mais relaxada para a celebração."
            }
        ]
    },
];

let atual = 0; // Índice da pergunta atual
let perguntaAtual;
let historiaFinal = ""; // História acumulada com as respostas

// Função para mostrar a pergunta atual
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // Limpa alternativas antigas
    mostraAlternativas();
}

// Função para mostrar as alternativas da pergunta atual
function mostraAlternativas() {
    perguntaAtual.alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

// Função para processar a resposta selecionada
function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

// Função para mostrar o resultado final
function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada cultural revelou...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = ""; // Limpa alternativas
}

// Inicia o questionário
mostraPergunta();
