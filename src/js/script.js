//Variables
const links = document.querySelectorAll('.nav ul a');
const hamburger = document.querySelector('.hamburger');
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

//Hamburger menu
hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  const list = document.querySelector('.nav ul');
  nav.classList.toggle('active');
  list.classList.toggle('active');
});
//Smooth scroll
const clickHandler = (e) => {
  e.preventDefault();
  const clickedElement = e.currentTarget;
  const linkHref = clickedElement.getAttribute('href');
  document.querySelector(linkHref).scrollIntoView({
    behavior: 'smooth',
  });
};
links.forEach((link) => link.addEventListener('click', clickHandler));

//Counter gallery
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

//Google Map
function initMap() {
  const options = {
    center: {
      lat: 52.77179806501172,
      lng: 18.097317556249045,
    },
    zoom: 15,
  };
  const map = new google.maps.Map(document.getElementById('map'), options);
  const marker = new google.maps.Marker({
    position: {
      lat: 52.77161640223765,
      lng: 18.097115668124744,
    },
    map,
  });
}

//Gallery
const pictures = document.querySelectorAll('.picture-wrapper .zoom-picture');
const arrowLeft = document.querySelector('.arrows .arrow-left');
const arrowRight = document.querySelector('.arrows .arrow-right');
arrowRight.addEventListener('click', () => {
  const current = document.querySelector('.picture-wrapper .active');
  current.classList.remove('active');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('active');
  } else {
    pictures[0].classList.add('active');
  }
});
arrowLeft.addEventListener('click', () => {
  const current = document.querySelector('.picture-wrapper .active');
  current.classList.remove('active');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('active');
  } else {
    pictures[pictures.length - 1].classList.add('active');
  }
});

//Close modal
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('keyup', (e) => {
  if (e.code === 'Escape') {
    modal.style.display = 'none';
  }
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
