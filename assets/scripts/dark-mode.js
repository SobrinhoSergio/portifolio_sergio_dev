/*const themeButton = document.getElementById('theme-button')

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

})*/

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#000",
    bgPanel: "#191919",
    colorHeadings: "#3664FF",
    colorText: "#fff"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value))

const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))

checkbox.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(darkMode) 
    createOrEditLocalStorage('modo','darkMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo','initialColors')
  }
})

if(!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValeuLocalStorage('modo') === "initialColors") {
  checkbox.removeAttribute('checked')
  changeColors(initialColors);
} else {
  checkbox.setAttribute('checked', "")
  changeColors(darkMode);
}