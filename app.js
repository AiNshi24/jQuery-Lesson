// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// 省略形----------------------------------------
// $(function(){
  // jQueryプログラムの内容
// });
// ----------------------------------------------

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });  


// $(function(){
//   $('.box1').slideUp();
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// $(function(){
//   $('.box1').hide();
// });

// $(function(){
//   $('.box1').slideDown(function (){
//     $('.box1').css({
//     'background-color': '#0000FF',
//     'width': '200px',
//     'height': '100px'
//     }).slideUp();
//   });
// });  

// マウスオーバー、マウスアウト--------------------
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// マウスクリック--------------
// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// this----------------------------------------
// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

// children-------------------------------------
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});