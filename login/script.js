import * as data from './../data/user.js'; 

const botao = document.querySelector('.tela .botao_logar')

if(botao) {
botao.addEventListener('click',() => {
    const usuario = document.querySelector('.usuario input')
    const senha = document.querySelector('.senha input')
    var verification = false, problem = 0
    
    for(var i = 0; i <= data.client.length -1; i++){
        if(usuario.value === data.client[i].user){
            if(senha.value === data.client[i].password){
               const dataObj = {name:data.client[i].name, img:data.client[i].img}; localStorage.setItem("login",JSON.stringify(dataObj));
                verification=true
            }else{
                problem=1
            }
        }else if(usuario.value === "" || senha.value === ""){
            if(usuario.value === "" && senha.value === "") {
                problem=2
            }
            else if(usuario.value === "" && senha.value != "") {
                problem=2.1
            }
            else if(usuario.value != "" && senha.value === "") {
                problem=2.2
            }
        }
    }
    if(verification){
        usuario.value=""
        senha.value=""
        window.location.href = './paginas/home/index.html'
        alert("Usuário encontrado")
    }else if(problem > 0){
        if(problem===1){
            alert("Senha incorreta")
            senha.value=""
            senha.focus()
        }if(problem===2){
            alert("Preencha os campos corretamente")
            senha.value=""
            usuario.value=""
        }if(problem===2.1){
            alert("Preencha o campo de Usuário")
            usuario.focus()
        }if(problem===2.2){
            alert("Preencha o campo da Senha")
            senha.focus()
        }
    }
    else{
        alert("Usuário não cadastrado")
        usuario.value=""
        senha.value=""
        usuario.focus()
    }
})
}
