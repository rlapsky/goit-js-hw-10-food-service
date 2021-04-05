import './styles.css';
import menu from './menu.json'
import menuTemplate from './templates/template.hbs'
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const ref = {
    input: document.querySelector('.theme-switch__toggle'),
    classBody: document.querySelector('body'),
    menu: document.querySelector('.js-menu'),
}
const markup = menuTemplate(menu);
ref.menu.insertAdjacentHTML('afterbegin', markup)
console.log(ref.menu);
const changeTheme = function (e){
    if (e.target.checked){
        
        ref.classBody.classList.add(Theme.DARK)
        ref.classBody.classList.remove(Theme.LIGHT)
        localStorage.setItem('theme' , Theme.DARK)
    }
        else {
            ref.classBody.classList.add(Theme.LIGHT)
            ref.classBody.classList.remove(Theme.DARK)
            localStorage.setItem('theme' , Theme.LIGHT)
        }
        console.log(e.target.checked);
    }
ref.input.addEventListener('change',changeTheme)
if (localStorage.getItem('theme') === Theme.DARK){
    ref.input.checked = true;
    ref.classBody.classList.add(Theme.DARK)
}

