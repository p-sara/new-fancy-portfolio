document.addEventListener("DOMContentLoaded", function() {
  
  var questionMark = document.querySelector(".questionMark");
  var creative = document.querySelector(".creative");
   var motivated = document.querySelector(".motivated");
  var consistant = document.querySelector(".consistant");
  var selfReliant = document.querySelector(".self-reliant");
   var responsible = document.querySelector(".responsible");
  var disciplined = document.querySelector(".disciplined");
  var myPhoto = document.querySelector(".myFace");
  var questionOne = document.querySelector(".one");
  var questionTwo = document.querySelector(".two");
  var questionThree = document.querySelector(".three");
   var questionFour = document.querySelector(".four");
  var questionFive = document.querySelector(".five");
  var questionSix = document.querySelector(".six");
  
  
  
  function showCreative() {
    creative.classList.remove("hidden");
  }
  questionOne.addEventListener('click', showCreative);
  
  function showMotivated() {
    motivated.classList.remove("hidden");
  }
  questionTwo.addEventListener('click', showMotivated);
  
  function showConsistant() {
    consistant.classList.remove("hidden");
  }
  questionThree.addEventListener('click', showConsistant);
  function showSelfReliant() {
    selfReliant.classList.remove("hidden");
  }
  questionFour.addEventListener('click', showSelfReliant);
  
  function showResponsible() {
    responsible.classList.remove("hidden");
  }
  questionFive.addEventListener('click', showResponsible);
  
  function showDisciplined() {
    disciplined.classList.remove("hidden");
  }
  questionSix.addEventListener('click', showDisciplined);
  
  
  function hide() {
    this.classList.add("hidden");
  }
  questionOne.addEventListener("click", hide);
  questionTwo.addEventListener("click", hide);
  questionThree.addEventListener("click", hide);
  questionFour.addEventListener("click", hide);
  questionFive.addEventListener("click", hide);
  questionSix.addEventListener("click", hide);
  
  function changeImg1 () {
   myPhoto.setAttribute("src", "img/me2.jpg"); 
  }
  questionOne.addEventListener("click", changeImg1);
  
  function changeImg2 () {
   myPhoto.setAttribute("src", "img/me3.jpg"); 
  }
  questionTwo.addEventListener("click", changeImg2);
  
  function changeImg3 () {
   myPhoto.setAttribute("src", "img/me4.jpg"); 
  }
  questionThree.addEventListener("click", changeImg3);
  
  function changeImg4 () {
   myPhoto.setAttribute("src", "img/me5.jpg"); 
  }
  questionFour.addEventListener("click", changeImg4);
  
  function changeImg5 () {
   myPhoto.setAttribute("src", "img/me6.jpg"); 
  }
  questionFive.addEventListener("click", changeImg5);
  
  function changeImg6 () {
   myPhoto.setAttribute("src", "img/me7.jpg"); 
  }
  questionSix.addEventListener("click", changeImg6);
  
  
  
});

    
   