
$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots:true,
    appendDots: '.slider-dot',
    dotsClass:'dots'
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
