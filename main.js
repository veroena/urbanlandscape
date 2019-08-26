'use strict';

const background = document.querySelector('.background');
let test = document.getElementById("body").scrollHeight;
let mitadScroll = test/2;
  
    
const changePic = () => {
  if ( window.scrollY >= mitadScroll) {
    background.classList.remove('bg1');
    background.classList.add('bg2');
  } else {
    background.classList.remove('bg2');
    background.classList.add('bg1');
  }
}

const progress = () => {
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var heightScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (windowScroll / heightScroll) * 100;
  document.getElementById("progress__bar").style.height = scrolled + "%";
}

const scrolling = () => {
  changePic();
  progress();
}


window.addEventListener('scroll', scrolling);