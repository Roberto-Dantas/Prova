const provas = document.querySelectorAll('#provas li')

const iProva = "Prova de "

provas.forEach(provas => { 
    provas.addEventListener('click', () => { 
        const prova = confirm("Deseja realizar a "+iProva+provas.id+"?")
        if(prova) {
            localStorage.setItem("provaEscolhida",provas.id)
            window.open('./provas/index.html', '_blank') 
        }else{
            
        }
    })
})
