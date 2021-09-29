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

      $("#img" + j).attr("src",images[j +  index * displayLength].src);
    }
    index++;
    }
  })


let NUM_PIC_PER_ROW = 4;

 // Events

  $(".itemWrap img").on("mouseenter", function(){

    var imgSrc = $(this).attr("id").substr(3);

    var finalSrc = parseInt(imgSrc) + index * NUM_PIC_PER_ROW;
    console.log('index:' + index);
    console.log('imgSrc:' + imgSrc);
    console.log('FinalSrc:' + finalSrc);

    $(".previewAvatar").attr("src", "./assets/images/avatar" + finalSrc  +'.png');
})

$("#imgs img").on("mouseenter", function(){
    var imgSrc = $(this).attr("id").substr(3);
    $(".previewAvatar").attr("src", "./assets/images/avatar" + imgSrc +'.png');
})


})


//                      index
// [1]  [2] [3] [4]     
// 1    2   3   4       0
// 5   6   7   8       1 * 4
// 9   10   11   12       2 * 4

