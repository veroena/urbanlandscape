'use strict';

// ----------------------- CHANGE IMAGE ON SCROLL POSITION -------------------------------------

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

window.addEventListener('scroll', changePic);


// ----------------------- IMAGE PRELOAD -------------------------------------



