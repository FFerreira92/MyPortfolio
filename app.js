
$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots:true,
    appendDots: '.slider-dot',
    dotsClass:'dots'
  });

  
  let hamburger= document.querySelector('.hamburger-button');
  let times=document.querySelector('.times');
  let mobileNav =document.querySelector('.mobile-nav');
  let click = document.querySelector('.click');
  let click1 = document.querySelector('.click-1');
  let click2 = document.querySelector('.click-2');
  let click3 = document.querySelector('.click-3');

  hamburger.addEventListener('click',function(){
    mobileNav.classList.add('open');
  })

  times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
  })

  click.addEventListener('click',function(){
    mobileNav.classList.remove('open');
  })
  click1.addEventListener('click',function(){
    mobileNav.classList.remove('open');
  })
  click2.addEventListener('click',function(){
    mobileNav.classList.remove('open');
  })
  click3.addEventListener('click',function(){
    mobileNav.classList.remove('open');
  })


})


const skillsSection = document.getElementById('skills-section');

const progressBars = document.querySelectorAll('.progress-bar');

function showProgress(){
  progressBars.forEach(progressBar=>{
    const value= progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = value+'%';  
  });
}

function hideProgress(){
  progressBars.forEach(p=>{
    p.style.opacity =1;
    p.style.width = 0;
  })
}


window.addEventListener('scroll',() =>{
  const sectionPos = skillsSection.getBoundingClientRect();
  const screenPos = window.innerHeight/2;

  if(sectionPos.top < screenPos){          
    showProgress();
  }else{
    hideProgress();   
  }

});
