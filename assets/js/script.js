const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');
  
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  
  if(pipePosition <= 127 && pipePosition > 0 && marioPosition < 104){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`
    
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`
    
    mario.src = './assets/img/gameover.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '55px';
    
    clearInterval(loop);
  }
}, 10);



document.addEventListener('click', jump)
