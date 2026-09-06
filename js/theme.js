const appearanceItem = document.querySelector('.profile-item-appearance');
const appearanceLabel = appearanceItem.querySelector('span');
const panelBackButton = document.querySelector('.profile-panel-back');
const themeOptions = document.querySelectorAll('.theme-option');
const deviceIsDark = window.matchMedia('(prefers-color-scheme: dark)');

const THEME_NAMES = {
  device: 'Device theme',
  dark: 'Dark theme',
  light: 'Light theme',
};

function readStoredTheme() {
  try {
    return localStorage.getItem('theme') || 'device';
  } catch (error) {
    return 'device';
  }
}

function storeTheme(choice) {
  try {
    localStorage.setItem('theme', choice);
  } catch (error) {
    // storage can be unavailable, the theme just will not persist
  }
}

function applyTheme(choice) {
  const dark = choice === 'dark' || (choice === 'device' && deviceIsDark.matches);
  document.body.classList.toggle('theme-dark', dark);
  appearanceLabel.textContent = ' Appearance: ' + THEME_NAMES[choice] + ' ';
  themeOptions.forEach((option) => {
    option.classList.toggle(
      'theme-option-selected',
      option.getAttribute('data-theme') === choice
    );
  });
}

appearanceItem.addEventListener('click', () => {
  document.body.classList.add('appearance-open');
});

panelBackButton.addEventListener('click', () => {
  document.body.classList.remove('appearance-open');
});

themeOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const choice = option.getAttribute('data-theme');
    storeTheme(choice);
    applyTheme(choice);
  });
});

deviceIsDark.addEventListener('change', () => {
  if (readStoredTheme() === 'device') {
    applyTheme('device');
  }
});

applyTheme(readStoredTheme());
