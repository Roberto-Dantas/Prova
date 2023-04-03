const notas = document.querySelectorAll('#notas li')

const iProva = "- Prova de "
const naoFeita = " Não Finalizada"

const acertosPor = localStorage.getItem('acertosPor')
const questoesPor = localStorage.getItem('questoesPor')
const acertosMat = localStorage.getItem('acertosMat')
const questoesMat = localStorage.getItem('questoesMat')
const acertosHis = localStorage.getItem('acertosHis')
const questoesHis = localStorage.getItem('questoesHis')
const acertosIng = localStorage.getItem('acertosIng')
const questoesIng = localStorage.getItem('questoesIng')


notas.forEach(notas => {
    if(notas.id === "pPor") {
        if(acertosPor) {
            notas.innerText= iProva+"Língua Portuguesa - " + acertosPor+"/"+questoesPor
        }
        else{
            notas.innerText=iProva+"Língua Portuguesa -" + naoFeita
        }
    }
    else if(notas.id === "pMat"){
        if(acertosMat) {
            notas.innerText=iProva+"Matemática - " + acertosMat+"/"+questoesMat
        }
        else{
            notas.innerText=iProva+"Matemática -" + naoFeita
        }
    }
    else if(notas.id === "pHis"){
        if(acertosHis) {
            notas.innerText=iProva+"História - " + acertosHis+"/"+questoesHis
        }
        else{
            notas.innerText=iProva+"História -" + naoFeita
        }
    }
    else if(notas.id === "pIng"){
        if(acertosIng) {
            notas.innerText=iProva+"Inglês - " + acertosIng+"/"+questoesIng
        }
        else{
            notas.innerText=iProva+"Inglês -" + naoFeita
        }
    }
})
