import * as questions from "./../../../data/question.js"

var tema = localStorage.getItem('tema')
if(tema === "1") {
    document.body.classList.add('dark-mode'); 
}
//Card Inicial
const prova = localStorage.getItem('provaEscolhida')
const nomeProva = document.querySelector('.conteudo h3')
const questoes = document.querySelector('.questao')
const tempo = document.querySelector('.tempo')

const tempLimite = "5"
let aProva
var qntQuestoes

if(prova === "Língua Portuguesa") {
    aProva = questions.portugueseQuestions
    qntQuestoes = questions.portugueseQuestions.length
}else if(prova === "Matemática"){
    aProva = questions.mathematicsQuestions
    qntQuestoes = questions.mathematicsQuestions.length
}else if(prova === "História"){
    aProva = questions.historyQuestions
    qntQuestoes = questions.historyQuestions.length
}else if(prova === "Inglês"){
    aProva = questions.englishQuestions
    qntQuestoes = questions.englishQuestions.length
};

nomeProva.innerText = "Prova de "+prova
questoes.innerText = qntQuestoes+" questões"
tempo.innerText = "Tempo limite: "+tempLimite+":00"


//Clicks de botões


//1
const cartaoBut = document.querySelector('.quest button')
const cartaoI = document.querySelector('.quest')
const numeQuestao = document.querySelector('.numQ')
const cardQuestao = document.querySelector('.quests')

cartaoBut.addEventListener('click', () => {
    cartaoI.style.display="none"
    numeQuestao.style.display="block"
    setTimeout(function() {cardQuestao.style.display="block",passaPerguntas()},500)
});


//2
const proximaQ = document.querySelector('#proxima')

proximaQ.addEventListener('click', () => {
    validacaoQ()
});


//3
const enviarQ = document.querySelector('#enviar button')
const enviarQt = document.querySelector('#enviar')

enviarQ.addEventListener('click', () => {
   validacaoQ()
   if(passou) {
       gabarito()
   }
})


//RESPOSTAS-Correção

function gabarito() {
    document.querySelector('.numQ').style.display="none"
    document.querySelector('.quests').style.display="none"
    document.querySelector('.respostas').style.display="block"
    document.querySelector('.conteudo').style.padding="0"
    var acertos = 0
    var numeroQuestao = 0
    
    const caixa = document.querySelector('.respostasCaixa')
    const divElemento=[],h3Elemento=[],ulElemento=[],liElementos1=[],liElementos2=[],liElementos3=[],liElementos4=[],liElementos5=[]
    const brElemento =[document.querySelector('#br1'),document.querySelector('#br2'),document.querySelector('#br3'),document.querySelector('#br4'),document.querySelector('#br5'),document.querySelector('#br6'),document.querySelector('#br7'),document.querySelector('#br8'),document.querySelector('#br9'),document.querySelector('#br10')]
    
    for(var i=0; i<=qntQuestoes-1;i++){
        //Criação
        divElemento[i] = document.createElement('div');
        divElemento[i].className = 'resp';
        ulElemento[i] = document.createElement('ul');
        h3Elemento[i] = document.createElement('h3');
        
        //Inserção
        caixa.appendChild(divElemento[i])
        caixa.insertBefore(brElemento[i],divElemento[i])
        divElemento[i].appendChild(ulElemento[i]) 
        divElemento[i].insertBefore(h3Elemento[i],ulElemento[i])
    }
    for(var i=0; i<=divElemento.length-1;i++){
        //Criação
        liElementos5[i] = document.createElement('li');
        liElementos4[i] = document.createElement('li');
        liElementos3[i] = document.createElement('li');
        liElementos2[i] = document.createElement('li');
        liElementos1[i] = document.createElement('li');
        
        if(correct[i] === chosen[i]) {
            //Alternativas Corretas
            acertos = acertos +1
            if(chosen[i] === "01") {
                liElementos1[i].classList.add('correta')
                liElementos1[i].classList.add('escolhida')
            }
            else if(chosen[i] === "02") {
                liElementos2[i].classList.add('correta')
                liElementos2[i].classList.add('escolhida')
                
            }
            else if(chosen[i] === "03") {
                liElementos3[i].classList.add('correta')
                liElementos3[i].classList.add('escolhida')
            }
            else if(chosen[i] === "04") {
                liElementos4[i].classList.add('correta')
                liElementos4[i].classList.add('escolhida')
            }
            else if(chosen[i] === "05") {
                liElementos5[i].classList.add('correta')
                liElementos5[i].classList.add('escolhida')
            }
            
        }else{
            //Alternativa Errada
            if(chosen[i] === "01") {
                liElementos1[i].classList.add('errada')
            }
            else if(chosen[i] === "02") {
                liElementos2[i].classList.add('errada')
            }
            else if(chosen[i] === "03") {
                liElementos3[i].classList.add('errada')
            }
            else if(chosen[i] === "04") {
                liElementos4[i].classList.add('errada')
            }
            else if(chosen[i] === "05") {
                liElementos5[i].classList.add('errada')
            }
            
            //Alternativa Correta
            if(correct[i] === "01") {
                liElementos1[i].classList.add('correta')
            }
            else if(correct[i] === "02") {
                liElementos2[i].classList.add('correta')
            }
            else if(correct[i] === "03") {
                liElementos3[i].classList.add('correta')
            }
            else if(correct[i] === "04") {
                liElementos4[i].classList.add('correta')
            }
            else if(correct[i] === "05") {
                liElementos5[i].classList.add('correta')
            }
        }
        
        //Inserção
        
        ulElemento[i].appendChild(liElementos5[i])        
        ulElemento[i].insertBefore(liElementos4[i],liElementos5[i])
               ulElemento[i].insertBefore(liElementos3[i],liElementos4[i])
                 ulElemento[i].insertBefore(liElementos2[i],liElementos3[i])       
        ulElemento[i].insertBefore(liElementos1[i],liElementos2[i])
    }
    //Inserção de Dados
    const dataLogin = JSON.parse(localStorage.getItem('login'))
    document.querySelector('.respostas #nomeR').innerText= dataLogin.name
    document.querySelector('.respostas #qntA').innerText = "Você acertou " + acertos + " questões"
    
    if(prova === "Língua Portuguesa") {
        localStorage.setItem("acertosPor",acertos)
        localStorage.setItem("questoesPor",qntQuestoes)
    }else if(prova === "Matemática"){
        localStorage.setItem("acertosMat",acertos)
        localStorage.setItem("questoesMat",qntQuestoes)
    }else if(prova === "História"){
        localStorage.setItem("acertosHis",acertos)
        localStorage.setItem("questoesHis",qntQuestoes)
    }else if(prova === "Inglês"){
        localStorage.setItem("acertosIng",acertos)
        localStorage.setItem("questoesIng",qntQuestoes)
    };
    
    for(var i=0; i<=divElemento.length-1;i++){
        h3Elemento[i].innerHTML = aProva[i].question
        liElementos1[i].innerHTML = aProva[i].alt1
        liElementos2[i].innerHTML = aProva[i].alt2
        liElementos3[i].innerHTML = aProva[i].alt3
        liElementos4[i].innerHTML = aProva[i].alt4
        liElementos5[i].innerHTML = aProva[i].alt5
    }
    
}

//Inserção das Perguntas

var numQuestao = 1
const questaoNum = document.querySelector('.numQ h3')
const questao = document.querySelector('.quests h4')
const alter1 = document.querySelector('#alternativa1')
const alter2 = document.querySelector('#alternativa2')
const alter3 = document.querySelector('#alternativa3')
const alter4 = document.querySelector('#alternativa4')
const alter5 = document.querySelector('#alternativa5')
const chosen = []
const correct = []

function passaPerguntas() {    
    if(numQuestao === qntQuestoes) {   
        proximaQ.style.display="none"
        enviarQt.style.display="block"
    }else{
        proximaQ.style.display="block"
    }
        questaoNum.innerHTML = "Questão " + numQuestao + ":"
        questao.innerHTML = aProva[numQuestao-1].question;
        alter1.innerHTML = "<input type='radio' id='01'>" + aProva[numQuestao-1].alt1
        alter2.innerHTML = "<input type='radio' id='02'>" + aProva[numQuestao-1].alt2
        alter3.innerHTML = "<input type='radio' id='03'>" + aProva[numQuestao-1].alt3
        alter4.innerHTML = "<input type='radio' id='04'>" + aProva[numQuestao-1].alt4
        alter5.innerHTML = "<input type='radio' id='05'>" + aProva[numQuestao-1].alt5
        correct[numQuestao-1]= aProva[numQuestao-1].correct
};


//Validar se tem alguma alternativa checked por pergunta

var passou

function validacaoQ() {
    const alterns = document.querySelectorAll('.inputs input')
    passou = false
    alterns.forEach(alterns => {
        if(alterns.checked) {
            chosen[numQuestao-1] = alterns.id
            passou= true
        };
    });
    if(passou) {
         if(numQuestao != qntQuestoes) {
             numQuestao = numQuestao + 1
         }
         passaPerguntas()
    }else{
         alert("Assinale alguma alternativa:")
    }
};


//Único click por conjunto de alternativas

//1
const alterna = document.querySelectorAll('.inputs li')

alterna.forEach(alterna => {
    alterna.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.inputs input')
        if(alterna.id === "alternativa1") {
            inputs.forEach(inputs => {
                inputs.checked = false
                if(inputs.id === "01") {
                    inputs.checked = true
                };
            });
        }else if(alterna.id === "alternativa2") {
            inputs.forEach(inputs => {
                inputs.checked = false
                if(inputs.id === "02") {
                    inputs.checked = true
                };
            });
        }else if(alterna.id === "alternativa3") {
            inputs.forEach(inputs => {
                inputs.checked = false
                if(inputs.id === "03") {
                    inputs.checked = true
                };
            });
        }else if(alterna.id === "alternativa4") {
            inputs.forEach(inputs => {
                inputs.checked = false
                if(inputs.id === "04") {
                    inputs.checked = true
                };
            });
        }else if(alterna.id === "alternativa5") {
            inputs.forEach(inputs => {
                inputs.checked = false
                if(inputs.id === "05") {
                    inputs.checked = true
                };
            });
        };
    });
});
