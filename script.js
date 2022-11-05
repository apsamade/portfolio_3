let mDivJs = document.getElementById('caseJS')
let mDivCss = document.getElementById('caseCSS')
let mDivHTML = document.getElementById('caseHTML')
let mDivPhp = document.getElementById('casePhp')
let mDivReact = document.getElementById('caseReact')

window.addEventListener("scroll", reveal);
document.getElementById('js').addEventListener('click', function(){
  console.log('click')

  if(mDivJs.style.display == 'none'){
    mDivJs.style.display = 'block';
  }else{
    mDivJs.style.display = 'none';
  }
})

document.getElementById('css').addEventListener('click', function(){
  console.log('click')

  let mDivJs = document.getElementById('caseCSS')
  if(mDivJs.style.display == 'none'){
    mDivJs.style.display = 'block';
  }else{
    mDivJs.style.display = 'none';
  }
})

document.querySelector('.mCr').addEventListener('click', function(){
  console.log('click')

  if(mDivJs.style.display == 'block'){
    mDivJs.style.display = 'none'
  }
})



function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  
