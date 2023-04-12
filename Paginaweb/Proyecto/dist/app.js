const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.sliderSection');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector('#btnLeft');
const btnRight = document.querySelector('#btnRight');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
  let sliderSectionFirst = document.querySelectorAll('.sliderSection')[0];
  slider.style.marginleft = '-200%';
  slider.style.transition = 'all 0.5s';
  setTimeout(function(){
slider.style.transition = 'none';
slider.insertAdjacentElement('beforeend', sliderSectionFirst);
slider.style.marginleft = '-100%';
  },500);
}
btnRight.addEventListener('click', function(){
  Next();
})

function Previous(){
  let sliderSection = document.querySelectorAll('.sliderSection');
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginleft = '0';
  slider.style.transition = 'all 0.5s';
  setTimeout(function(){
slider.style.transition = 'none';
slider.insertAdjacentElement('afterbegin', sliderSectionLast);
slider.style.marginleft = '-100%';
  },500);
}
btnLeft.addEventListener('click', function(){
  Previous();
});

setInterval(function(){
  Next();
}, 4000);


const slider2 = document.querySelector('#slider2');
let sliderSection2 = document.querySelectorAll('.sliderSection2');
let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];

const btnLeft2 = document.querySelector('#btnLeft2');
const btnRight2 = document.querySelector('#btnRight2');

slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);

function Next2(){
  let sliderSectionFirst2 = document.querySelectorAll('.sliderSection2')[0];
  slider2.style.marginleft = '-200%';
  slider2.style.transition = 'all 0.5s';
  setTimeout(function(){
slider2.style.transition = 'none';
slider2.insertAdjacentElement('beforeend', sliderSectionFirst2);
slider2.style.marginleft = '-100%';
  },500);
}
btnRight.addEventListener('click', function(){
  Next2();
})

function Previous2(){
  let sliderSection = document.querySelectorAll('.sliderSection2');
  let sliderSectionLast = sliderSection[sliderSection2.length -1];
  slider2.style.marginleft = '0';
  slider2.style.transition = 'all 0.5s';
  setTimeout(function(){
slider2.style.transition = 'none';
slider2.insertAdjacentElement('afterbegin', sliderSectionLast);
slider2.style.marginleft = '-100%';
  },500);
}
btnLeft.addEventListener('click', function(){
  Previous2();
});

setInterval(function(){
  Next2();
}, 4000);






