const imageRow = document.querySelector('.image-row');
const fotoBox = document.querySelectorAll(
  '.image-container .image-row .foto-box'
);
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');
const oneFotoBox = document.querySelector(
  '.image-container .image-row .foto-box'
);
const style = getComputedStyle(oneFotoBox);
const margin = parseInt(style.marginLeft) + parseInt(style.marginRight);
const size = fotoBox[0].offsetWidth + margin;

const initCounter = () => {
  let counter = 0;
  return () => {
    btnRight.addEventListener('click', (e) => {
      if (counter < fotoBox.length - 1) {
        imageRow.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        imageRow.style.transform = `translateX(${-size * counter}px)`;
      } else {
        imageRow.style.transition = 'transform 0.4s ease-in-out';
        imageRow.style.transform = `translateX(0)`;
        counter = 0;
      }
    });

    btnLeft.addEventListener('click', (e) => {
      if (counter <= 0) {
        return;
      }
      imageRow.style.transition = 'transform 0.4s ease-in-out';
      counter--;
      imageRow.style.transform = `translateX(${-size * counter}px`;
    });
  };
};
const counterGallery = initCounter();
counterGallery();
