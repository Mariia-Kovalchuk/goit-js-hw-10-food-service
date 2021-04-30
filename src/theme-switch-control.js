const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const THEME_KEY = 'theme';
const themeSwitcher = document.querySelector('#theme-switch-toggle');

setTheme(Theme);
themeSwitcher.addEventListener('change', switchTheme);

function setTheme({LIGHT, DARK}) {
    if (localStorage.getItem(THEME_KEY)===null) {
        document.body.classList.add(LIGHT);
        localStorage.setItem(THEME_KEY, LIGHT)
    } else {
        document.body.className = ' ';
        document.body.classList.add(`${localStorage.getItem(THEME_KEY)}`);
            if (localStorage.getItem(THEME_KEY) === DARK) {
                themeSwitcher.setAttribute('checked', 'true')
        };

    };
    
};

function switchTheme() {
    if (localStorage.getItem(THEME_KEY) === Theme.LIGHT) {
        localStorage.setItem(THEME_KEY, Theme.DARK);
        setTheme(Theme);
    } else if (localStorage.getItem(THEME_KEY) === Theme.DARK) {
        localStorage.setItem(THEME_KEY, Theme.LIGHT);
        setTheme(Theme);
    };

};