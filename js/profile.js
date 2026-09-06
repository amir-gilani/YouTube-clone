const profilePicture = document.querySelector('.current-user-picture');

profilePicture.addEventListener('click', (event) => {
  event.stopPropagation();
  document.body.classList.remove('create-open');
  document.body.classList.toggle('profile-open');
});

document.querySelector('.profile-menu').addEventListener('click', (event) => {
  event.stopPropagation();
});

document.addEventListener('click', () => {
  document.body.classList.remove('profile-open');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.body.classList.remove('profile-open');
  }
});
