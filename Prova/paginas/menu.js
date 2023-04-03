const menu = document.querySelector('.sidebar')
const cobreMenu = document.querySelector('.cobreMenu')
const back = document.querySelector('.sidebar i')
const menu_clicks = document.querySelectorAll('#ul_menu li')
const nameUser = document.querySelector('#user h2')
const imgUser = document.querySelector('#user #img')

const h2Sidebar = document.querySelector('.sidebar h2')
const home = document.getElementById('Home')
const traba = document.getElementById('Trabalhos e Provas')
const bolet = document.getElementById('Boletim')
const config = document.getElementById('Configuração')
const sair = document.getElementById('sair')


function abrir_fechar_Menu(v) {
    if(v) {
        menu.classList.add('open')
        cobreMenu.classList.add('open')
        setTimeout(function(){
            h2Sidebar.style.display = "block"
            home.innerHTML = "<i class='bx bx-home-alt'></i> Home"
            traba.innerHTML = "<i class='bx bxs-spreadsheet'></i> Trabalhos"
            bolet.innerHTML = "<i class='bx bx-book-bookmark'></i> Boletim"
            config.innerHTML = "<i class='bx bxs-cog'></i> Configuração"
            sair.innerHTML = "<i class='bx bxs-door-open'></i> Sair"
        },200)
     }else{
         h2Sidebar.style.display = "none"
         home.innerHTML = "<i class='bx bx-home-alt'></i>"
         traba.innerHTML = "<i class='bx bxs-spreadsheet'></i>"
         bolet.innerHTML = "<i class='bx bx-book-bookmark'></i>"
         config.innerHTML = "<i class='bx bxs-cog'></i>"
         sair.innerHTML = "<i class='bx bxs-door-open'></i>"
         menu.classList.remove('open')
         cobreMenu.classList.remove('open')
     }        
}
if(menu) {
    var num = true
    back.addEventListener('click', () => {
        if(num) {
            abrir_fechar_Menu(true)
            num= false
        }else{
            abrir_fechar_Menu(false)
            num= true
        }
    })
    menu_clicks.forEach(menu_click => { 
        menu_click.addEventListener('click', () => {
            abrir_fechar_Menu(false)
            setTimeout(function(){
            if(menu_click.id === "Home" && menu_click.id != document.title) {
                window.location.href = './../home/index.html'
            }
            else if(menu_click.id === "Trabalhos e Provas" && menu_click.id != document.title) {
                window.location.href = './../trabalhos/index.html'
            }
            else if(menu_click.id === "Boletim" && menu_click.id != document.title) {
                window.location.href = './../boletim/index.html'
            }
            else if(menu_click.id === "Configuração" && menu_click.id != document.title) {
                window.location.href = './../config/index.html'
            }
            else if(menu_click.id === "sair") {
                const sair = confirm("Tem certeza que deseja sair desta conta?")
                if(sair) {
                    localStorage.clear()
                    window.location.href = './../../index.html'
                }
            }
            },200)
        }); 
    });
    var tema = localStorage.getItem('tema')
    if(tema === "1") {
        document.body.classList.add('dark-mode'); 
        
    }
    const login = JSON.parse(localStorage.getItem('login'))

    nameUser.innerHTML = login.name
    imgUser.style.backgroundImage= login.img
    
    if(document.getElementById('var0')) {
        document.getElementById('var0').innerText= login.name
    }
    
    
}
