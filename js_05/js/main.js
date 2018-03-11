$(document).ready(function(){

  $('#hide').on("click",function(){
  $("#ex").hide(2000);
})

// var countupvalue = 0;
//   $('#show').on("click",function () {
//   $("#ex").show(2000);
//   countupvalue ++;
//   $('#ex').text(countupvalue);
// })
// showのアクションは別枠で作成しても可能！
$(function(){
$('#ex').hide().fadeIn(4000);
$('#ex').css('background','black');
})

$(function () {
$("#ex").css("color",'white');
$('#ex').html("かきくけこ");
$("#ex").append('さしすせそ');
$("#ex").prepend('あいうえお');
// $("p2").css("color",'white');
$(function () {
$("#ex.td.even").css("backgroudcolor",'red');  
})

})

// $(function () {
//   $("p2").before(("p1"));
// });

// $('.Box').on("click",function(){
//
//   alert('押されたよ');
//   console.log('押されたよ!');
// })
//
//
//
// //
// //  var a = 123;
// //  var box = '変数のテスト';
// //  alert('読み込めているかの実験');
// //  // console.log('111111');
// //
// //  console.log(a);
// // // $('.class').text();
//
// });
//
// $(document).ready(function(){
//
// $('.Box').on("click",function(){
//
//   alert('押されたよ');
//   console.log('押されたよ!');
// })
//
//
// $('#js').on('click',function(){
//
// var elem = '<a href="#js">次ページ</a>';
//
// $('#js').html(elem);
// $('#js').text(elem);
// $('#js').css("color","#ff0");
// $('#js').show(4000);
// $('#js').prepend(elem);
// $('#js').append(elem);
// $('#js').empty();
// $('#js').remove();
//
// })

//"
//  var a = 123;;

//  var box = '変数のテスト';
//  alert('読み込めているかの実験');
//  // console.log('111111');
//
//  console.log(a);
// // $('.class').text();

});
