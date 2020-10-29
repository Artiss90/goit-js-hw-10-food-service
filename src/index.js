import { Theme } from './js/theme';
import menuTemplate from './templates/template-menu.hbs';
import menuData from './menu.json';
import './styles.css';

const bodyRef = document.querySelector('body');
const checkboxSwitchThemeRef = document.querySelector('#theme-switch-toggle');
const listMenuRef = document.querySelector('.js-menu');

listMenuRef.insertAdjacentHTML('beforeend', menuTemplate(menuData))

const saveThemeLocal = (e) => {
    if (e.target.checked) { toggleInThemeDark(), localStorage.setItem('theme', Theme.DARK) }
    else { toggleInThemeLight(), localStorage.setItem('theme', Theme.LIGHT) }
};

/* Вешаем событие переключения темы */
checkboxSwitchThemeRef.addEventListener('change', saveThemeLocal);

const loadThemeLocal = () => {
    if (localStorage.getItem('theme') === Theme.LIGHT || localStorage.getItem('theme') === null) {
        addLightTheme(),
       checkboxSwitchThemeRef.checked = false;
    } else if(localStorage.getItem('theme') === Theme.DARK) {addDarkTheme(), checkboxSwitchThemeRef.checked = true;
}
};

/* Вешаем событие поиска сохраненной на локалке темы */
document.addEventListener('DOMContentLoaded', loadThemeLocal);

/* добавление-удаление класса*/
const toggleInThemeDark = () => { addDarkTheme(),removeLightTheme() };
const toggleInThemeLight = () => { addLightTheme(),removeDarkTheme() };
const addLightTheme = () => { bodyRef.classList.add(Theme.LIGHT) };
const addDarkTheme = () => { bodyRef.classList.add(Theme.DARK) };
const removeLightTheme = () => { bodyRef.classList.remove(Theme.LIGHT) };
const removeDarkTheme = () => { bodyRef.classList.remove(Theme.DARK) };

