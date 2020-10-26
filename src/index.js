import { Theme } from './js/theme';
import './styles.css';

console.log(Theme.LIGHT);

const bodyRef = document.querySelector('body');
const checkboxSwitchThemeRef = document.querySelector('#theme-switch-toggle');

console.log(checkboxSwitchThemeRef);

const toggleTheme = () => { bodyRef.classList.toggle(Theme.DARK) };

checkboxSwitchThemeRef.addEventListener('change', toggleTheme);