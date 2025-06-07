const deskSwitch = document.getElementById('themeSwitcher');
const mobSwitch  = document.getElementById('themeSwitcherMobile');

// общая функция переключения
function toggleTheme(e) {
    const dark = e.target.checked;
    document.body.classList.toggle('dark-mode', dark);
    document.body.classList.toggle('light-mode', !dark);
    // синхронизируем оба свитчера
    deskSwitch.checked = dark;
    mobSwitch.checked  = dark;
}

deskSwitch.addEventListener('change', toggleTheme);
mobSwitch.addEventListener('change',  toggleTheme);

const logo = document.getElementById('logo');

function toggleTheme(e) {
    const dark = e.target.checked;
    document.body.classList.toggle('dark-mode', dark);
    document.body.classList.toggle('light-mode', !dark);
    deskSwitch.checked = mobSwitch.checked = dark;
    logo.src = dark 
        ? 'resources/logo-dark.svg'  
        : 'resources/logo-light.svg'; 
}