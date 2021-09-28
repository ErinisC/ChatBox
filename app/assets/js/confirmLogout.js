let blackOverlay = document.getElementById('blackOverlay');
let logoutConfirm = document.getElementById('logoutConfirm');
let closeBtn = document.getElementById('close');
let logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', function(){
    blackOverlay.style.display = 'block';
    logoutConfirm.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    blackOverlay.style.display = 'none';
    logoutConfirm.style.display = 'none';
})




