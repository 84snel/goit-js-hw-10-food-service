const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let savedTheme = localStorage.getItem('theme');
const toggleRef = document.querySelector('#theme-switch-toggle');

checkSavedTheme();

function checkSavedTheme() {
  if (!savedTheme) {
    document.body.classList.add(Theme.LIGHT);
    return;
  }
  if (savedTheme === 'dark') {
    document.body.classList.add(Theme.DARK);
    toggleRef.checked = true;
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
}

toggleRef.addEventListener('change', handleToggle);

function handleToggle() {
  if (toggleRef.checked) {
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark');
    document.body.classList.remove(Theme.LIGHT);
    return;
  }
  document.body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', 'light');
  document.body.classList.remove(Theme.DARK);
}
