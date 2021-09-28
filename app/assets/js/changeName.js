let groupName = document.getElementById('groupName');
let changeName = document.getElementById('changeName');
let cancelBtn = document.getElementById('cancelBtn');

groupName.addEventListener('click', function(){
    changeName.style.display = 'block';
})

cancelBtn.addEventListener('click', function(){
    changeName.style.display = 'none';
})


