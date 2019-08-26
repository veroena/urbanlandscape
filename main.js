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


var images = [];
function preload() {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
  "images/maxime-caron-iVhmp3iQJPA-unsplash.jpg",
  "images/max-zhiltsov-RB9VeeP8bsg-unsplash.jpg",
  "images/erickson-javier-RW7TrDwdqpk-unsplash.jpg",
  "images/guowen-sui-8GJ33-5AO-Y-unsplash.jpg",
  "images/ryan-loughlin-_2z0xIF4Lx4-unsplash.jpg",
  "images/darren-chan-0nHOfjH0emE-unsplash.jpg",
  "images/hector-j-rivas-fvl7oftGJ_8-unsplash.jpg",
  "images/randhi-mahardhika-Q0aDpCw1ULk-unsplash.jpg"
)