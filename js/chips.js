const chipsList = document.querySelector('.chips-list');
const leftArrow = document.querySelector('.chips-arrow-left');
const rightArrow = document.querySelector('.chips-arrow-right');

function updateArrows() {
  const maxScroll = chipsList.scrollWidth - chipsList.clientWidth;
  const atStart = chipsList.scrollLeft <= 1;
  const atEnd = chipsList.scrollLeft >= maxScroll - 1;

  leftArrow.classList.toggle('chips-arrow-hidden', atStart);
  rightArrow.classList.toggle('chips-arrow-hidden', atEnd);
  chipsList.classList.toggle('chips-list-fade-left', !atStart);
  chipsList.classList.toggle('chips-list-fade-right', !atEnd);
}

leftArrow.addEventListener('click', () => {
  chipsList.scrollLeft -= chipsList.clientWidth * 0.8;
});

rightArrow.addEventListener('click', () => {
  chipsList.scrollLeft += chipsList.clientWidth * 0.8;
});

chipsList.addEventListener('scroll', updateArrows);
window.addEventListener('resize', updateArrows);

document.querySelectorAll('.chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelector('.chip-active').classList.remove('chip-active');
    chip.classList.add('chip-active');
  });
});

updateArrows();
