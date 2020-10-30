import { Theme } from './js/theme';
import menuTemplate from './templates/template-menu.hbs';
import menuData from './menu.json';
import './styles.css';

const bodyRef = document.querySelector('body');
const checkboxSwitchThemeRef = document.querySelector('#theme-switch-toggle');
const listMenuRef = document.querySelector('.js-menu');

listMenuRef.insertAdjacentHTML('beforeend', menuTemplate(menuData))

const saveThemeLocal = (e) => {
    if (e.target.checked) { toggleInTheme(Theme.DARK, Theme.LIGHT), localStorage.setItem('theme', Theme.DARK) }
    else { toggleInTheme(Theme.LIGHT, Theme.DARK), localStorage.setItem('theme', Theme.LIGHT) }
};

/* Вешаем событие переключения темы */
checkboxSwitchThemeRef.addEventListener('change', saveThemeLocal);

const loadThemeLocal = () => {
    if (localStorage.getItem('theme') === Theme.LIGHT || localStorage.getItem('theme') === null) {
        addTheme(Theme.LIGHT),
       checkboxSwitchThemeRef.checked = false;
    } else if(localStorage.getItem('theme') === Theme.DARK) {addTheme(Theme.DARK), checkboxSwitchThemeRef.checked = true;
}
};

/* Вешаем событие поиска сохраненной на локалке темы */
document.addEventListener('DOMContentLoaded', loadThemeLocal);

/* добавление-удаление класса*/
const toggleInTheme = (add, remove) => { addTheme(add),removeTheme(remove) };
// const toggleInThemeLight = () => { addLightTheme(),removeDarkTheme() };
const addTheme = (theme) => { bodyRef.classList.add(theme) };
// const addDarkTheme = (theme) => { bodyRef.classList.add(Theme.DARK) };
const removeTheme = (theme) => { bodyRef.classList.remove(theme) };
// const removeDarkTheme = (theme) => { bodyRef.classList.remove(theme) };

