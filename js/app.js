document.addEventListener("DOMContentLoaded", function() {
  
  var questionMark = document.querySelector(".questionMark");
  var creative = document.querySelector(".creative");
   var motivated = document.querySelector(".motivated");
  var consistant = document.querySelector(".consistant");
  var selfReliant = document.querySelector(".self-reliant");
   var responsible = document.querySelector(".responsible");
  var disciplined = document.querySelector(".disciplined");
  var myPhoto = document.querySelector(".myFace");
  var myPhotoMb = document.querySelector(".myFaceMobile");
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
  
  /*----Mobile version----*/
  function changeImgMb1 () {
   myPhotoMb.setAttribute("src", "img/meRes2.jpg"); 
  }
  questionOne.addEventListener("click", changeImgMb1);
  
  function changeImgMb2 () {
   myPhotoMb.setAttribute("src", "img/meRes3.jpg"); 
  }
  questionTwo.addEventListener("click", changeImgMb2);
  
  function changeImgMb3 () {
   myPhotoMb.setAttribute("src", "img/meRes4.jpg"); 
  }
  questionThree.addEventListener("click", changeImgMb3);
  
  function changeImgMb4 () {
   myPhotoMb.setAttribute("src", "img/meRes5.jpg"); 
  }
  questionFour.addEventListener("click", changeImgMb4);
  
  function changeImgMb5 () {
   myPhotoMb.setAttribute("src", "img/meRes6.jpg"); 
  }
  questionFive.addEventListener("click", changeImgMb5);
  
  function changeImgMb6 () {
   myPhotoMb.setAttribute("src", "img/meRes7.jpg"); 
  }
  questionSix.addEventListener("click", changeImgMb6);
  
  
  
  /*------------SKILLS----------*/

  var skills = $('.section-header');
  var skillsPositionTop = skills.position().top;
   $(window).on("resize", function(){
        var windowPositionLeft = $("body").scrollLeft();
    });
  
  
    $(window).on("resize scroll", function (){
      /*var scrollBottom = $(window).scrollTop() + $(window).height();
      var windowPositionBottom = $(window).scrollTop() + $(window).height();
      var windowPositionTop = $("body").scrollTop();*/
      if (pageYOffset<skillsPositionTop-20 && pageYOffset>skillsPositionTop-80){
        
$('.bar-percentage[data-percentage]').each(function () {
  var progress = $(this);
  var percentage = Math.ceil($(this).attr('data-percentage'));
  $({countNum: 0}).animate({countNum: percentage}, {
    duration: 2000,
    easing:'linear',
    step: function() {
      // What todo on every count
      var pct = Math.floor(this.countNum) + '%';
      progress.text(pct) && progress.siblings().children().css('width',pct);
    }

  });  
});
   $(window).off("resize scroll");
}
      });
 
    
  
  //show phone number 
  
  $(".phone").mouseenter(function() {
     $($(this)).next(".phone-number").css("display", "inline-block");
   });
  $(".phone").mouseleave(function() {
     $($(this)).next(".phone-number").css("display", "none");
   });
  
});

    
   /*-----------STICKY MENU----------*/
  
  var menu = $(".menu-window");
  var menuPositionTop = menu.position().top;
   $(window).on("resize", function(){
        var windowPositionLeft = $("body").scrollLeft();
    });
    
    $(window).on("resize scroll", function(){
      var windowPositionTop = $("body").scrollTop();
      if (menuPositionTop<windowPositionTop){
          menu.addClass("sticky");
      }else{
          menu.removeClass("sticky");
      }      
    }); 
  
  
  /*-----------SLIDING MENU-------------*/
  //if (window.matchMedia('(max-width: 480px)').matches){

    $(".menu-window").on("swipeleft",function(){
  $(".navigation").css("left", "-670px");
  });
    
    $(".menu-window").on("swiperight",function(){
  $(".navigation").css("left", "0px");
});
//}