var mainImg = document.getElementById('MyImg');
var modalImg = document.getElementById('modal_content');
var close = document.getElementsByClassName('close')[0];
var screenM = document.getElementById('modal');

mainImg.addEventListener('click', function() {
   screenM.style.display = 'block';
});

close.addEventListener('click', function() {
   screenM.style.display = 'none';
})