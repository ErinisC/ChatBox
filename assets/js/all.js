"use strict";

console.log('hello');
"use strict";

var blackOverlay = document.getElementById('blackOverlay');
var logoutConfirm = document.getElementById('logoutConfirm');
var closeBtn = document.getElementById('close');
var logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', function () {
  blackOverlay.style.display = 'block';
  logoutConfirm.style.display = 'block';
});
closeBtn.addEventListener('click', function () {
  blackOverlay.style.display = 'none';
  logoutConfirm.style.display = 'none';
});
//# sourceMappingURL=all.js.map
