$(function() {

 var images = [];
 var imgs = $("#imgs img");
 var index = 0;

 //展示的圖片，長度為4
 var displayLength = $(".avatarCarousel img").length; 

 for(var i = 0; i < imgs.length; i++) {
    images.push(imgs[i]);
 }
  //左邊按鈕
  $("#leftArrow").click(function() {  
    if(index == 0) {
    alert("請往右點選瀏覽");
    //return;
  } else {
    for(var j = 0; j < displayLength; j++) {
    $("#img" + j).attr("src",images[index - 1 + j].src);   
    }
    index--;
    }
 })
//右邊按鈕
$("#rightArrow").click(function() {   
  if(index == (imgs.length - displayLength)) {  
    alert("請往左點選瀏覽");
    return 0;
  } else {  
    for(var j = 0; j < displayLength; j++) {  

      $("#img" + j).attr("src",images[j + 1 + index].src);
    }
    index++;
    }
  })
})


$(function(){
    $(".itemWrap a").on('mouseenter', function(){
        var imgSrc = $(this).find('img').attr('src');
        $(this).siblings('a').find('avatar').attr('src', imgSrc);
    })
});


// $(document).ready(function(){
//     $("#img1").click(function(){
//           $("#avatar1").attr("src","./assets/images/avatar.png");
//     });
//     $("#img2").click(function(){
//           $("#avatar2").attr("src","./assets/images/avatar (2)");
//     });
//     $("#img3").click(function(){
//           $("#avatar3").attr("src","./assets/images/avatar (3)");
//     });
//     $("#img4").click(function(){
//           $("#avatar4").attr("src","./assets/images/avatar (4)");
//     });
  
// });

