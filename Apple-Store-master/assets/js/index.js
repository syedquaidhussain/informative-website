dark = document.getElementById('dark-mode')
header = document.getElementById('header')
nav_links = Array.from(document.getElementsByClassName('nav__link'))
nav_menu = document.getElementById('nav-menu')
nav_logo = document.getElementById('nav-logo')
home_title = Array.from(document.getElementsByClassName('home__title'))[0]
darken_elements = [...nav_links,header,document.body,nav_menu,nav_logo]
dark.addEventListener('click',()=>{
    if(dark.checked){
        for(let i of darken_elements){
            i.style.background = '#121212'
            i.style.color = 'white'
        }
        home_title.style.backgroundImage = 'linear-gradient(white,white)'

    }
    else{
        for(let i of darken_elements){
            i.style.background = 'white'
            i.style.color = 'black'
        }
        home_title.style.backgroundImage = 'linear-gradient(black,black)'

    }
})

let login_btn = document.getElementsByClassName('nav__btn')[0]
let showlogin = false
let login_modal = document.getElementById('login-modal')
login_btn.addEventListener('click',()=>{
    showlogin = !showlogin
    if(showlogin){
        login_modal.style.top = '13vh'
    }
    else{
        login_modal.style.top = '-80vh'
    }
})
main = document.getElementsByTagName('main')[0]
main.addEventListener('click',()=>{
    if(showlogin){
        login_modal.style.top = '-80vh'
    }
})