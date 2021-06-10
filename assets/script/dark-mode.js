const themeButton = document.getElementById('theme-button')

const darkTheme = 'dark-theme'

const iconTheme = 'fa-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

if(selectedTheme){
    document.body.classList[selectedTheme=== 'dark' ? 'add' : 'remove' ](darkTheme)
    themeButton.classList[selectedIcon=== 'fa-moon' ? 'add' : 'remove' ](iconTheme)
}


themeButton.addEventListener('click', ()=>{ //arrow callback
   
    document.body.classList.toggle(darkTheme) //Toggle, é um efeito jQuery que serve para exibir e ocultar o conteúdo.
  
    themeButton.classList.toggle(iconTheme) 

    localStorage.setItem('selected-theme', getCurrentTheme())

    localStorage.setItem('selected-icon', getCurrentIcon())

})