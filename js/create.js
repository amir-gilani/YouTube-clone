const createButton = document.querySelector('.crative-button');

createButton.addEventListener('click', (event) => {
  event.stopPropagation();
  document.body.classList.remove('profile-open');
  document.body.classList.toggle('create-open');
});

document.addEventListener('click', () => {
  document.body.classList.remove('create-open');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.body.classList.remove('create-open');
  }
});
