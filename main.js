'use strict';

console.log("Listo!")

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


function preload(images) {
  if (document.images) {
      var i = 0;
      var imageArray = new Array();
      imageArray = images.split(',');
      var imageObj = new Image();
      for(i=0; i<=imageArray.length-1; i++) {
          //document.write('<img src="' + imageArray[i] + '" />');// Write to page (uncomment to check images)
          imageObj.src=imageArray[i];
      }
  }
  console.log(images)
}

preload('/images/maxime-caron-iVhmp3iQJPA-unsplash.jpg, /images/max-zhiltsov-RB9VeeP8bsg-unsplash.jpg');

window.addEventListener('scroll', changePic);