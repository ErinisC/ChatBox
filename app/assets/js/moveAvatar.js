// 點擊按鈕
var moveLeft = document.getElementById("moveLeft");
var moveRight = document.getElementById("moveRight");
var moveUp = document.getElementById("moveUp");
var moveDown = document.getElementById("moveDown");
// 使用者移動角色
var moveAvatarUser = document.getElementById("moveAvatarUser");

var a = 0;

moveLeft.onclick = function(){
    a = a-120;
    moveAvatarUser.style.marginLeft = a + 'px';
}
moveRight.onclick = function(){
    a = a+120;
    moveAvatarUser.style.marginLeft = a + 'px';
}
