
var mySwiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

$("nav > ul > li ").mouseenter(function(){
  $(this).children(".submenu").stop().slideDown(400);
});

/*메인메뉴에서 마우스 커서가 떠나면, 서브메뉴 드롭업으로 사라짐*/
$("nav > ul > li").mouseleave(function(){
  $(this).children(".submenu").stop().slideUp(200);
});