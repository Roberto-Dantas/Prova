var tema = localStorage.getItem('tema')

const botao = document.querySelector('#chk')

botao.addEventListener('change', ()=> {
    var tema = localStorage.getItem('tema')
    if(tema === "1") {
        document.body.classList.remove('dark-mode');
        localStorage.setItem("tema",0)
    }
    else{
        document.body.classList.add('dark-mode'); 
        localStorage.setItem("tema",1)
    }
})
