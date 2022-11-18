
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


$(document).ready(function(){
  $("#playButton").mouseenter(function(){
    $(this).children("h1").addClass("moveButton")
  })
})
$(document).ready(function(){
  $("#playButton").mouseleave(function(){
    $(this).children("h1").removeClass("moveButton")
  })
})

$(document).ready(function(){
  $(".backLogin").mouseenter(function (){
    $(this).addClass("mover");
  })
  $(".backLogin").mouseleave(function(){
    $(this).removeClass("mover");
  })
})

$(document).ready(function(){
  $(".backSign").mouseenter(function (){
    $(this).addClass("mover");
  })
  $(".backSign").mouseleave(function(){
    $(this).removeClass("mover");
  })
})

$(document).ready(function() {
  $(".preNotice").mouseenter(function(){
    $(".preNotice a").text("공지사항")
    $(".preNotice a").addClass("bold");
  })
  $(".preNotice").mouseleave(function(){
    $(".preNotice a").text("")
    $(".preNotice a").removeClass("bold");
  })
})
$(document).ready(function() {
  $(".preNews").mouseenter(function(){
    $(".preNews a").text("뉴스")
    $(".preNews a").addClass("bold")
  })
  $(".preNews").mouseleave(function(){
    $(".preNews a").text("")
    $(".preNews a").removeClass("bold");
  })
})
$(document).ready(function() {
  $(".preCom").mouseenter(function(){
    $(".preCom a").text("커뮤니티")
    $(".preCom a").addClass("bold")
  })
  $(".preCom").mouseleave(function(){
    $(".preCom a").text("")
    $(".preCom a").removeClass("bold");
  })
})
$(document).ready(function() {
  $(".preEvent").mouseenter(function(){
    $(".preEvent a").text("이벤트")
    $(".preEvent a").addClass("bold")
  })
  $(".preEvent").mouseleave(function(){
    $(".preEvent a").text("")
    $(".preEvent a").removeClass("bold");
  })
})

