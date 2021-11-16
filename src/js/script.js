const imageRow = document.querySelector('.image-row');
const fotoBox = document.querySelectorAll('.foto-box');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

let counter = 1;
const size = fotoBox[0].clientWidth;

//imageRow.style.transform = `translateX(${-size * counter}px)`;

btnRight.addEventListener('click', (e) => {
  if (counter < 4) {
    imageRow.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    imageRow.style.transform = `translateX(${-size * counter}px)`;
    console.log(counter);
  } else {
    imageRow.style.transition = 'transform 0.4s ease-in-out';
    imageRow.style.transform = `translateX(0)`;
    counter = 1;
  }
});

btnLeft.addEventListener('click', (e) => {
  if (counter <= 0) {
    return;
  }
  imageRow.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  imageRow.style.transform = `translateX(${-size * counter}px`;
  console.log(counter);
});
