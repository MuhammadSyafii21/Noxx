const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');
const num = document.querySelector('.num');
const num2 = document.querySelector('.num2');
const num1 = document.querySelector('.num1');
const audio = document.querySelector('#audio');

const arrayNum = [0,0,0];
btnRight.addEventListener('click',
  function(){
    arrayNum[0]+=1;
    num.innerHTML = arrayNum[0];
    if(!audio.paused){
    audio.pause()
    audio.currentTime = 0;
      
    }    
    audio.play();
    
  });
btnLeft.addEventListener('click',
function(){
  arrayNum[0] = 0;
  num.innerHTML = arrayNum[0];
  audio.pause();
  
})

  
  
