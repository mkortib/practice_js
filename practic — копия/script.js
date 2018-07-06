var close = document.getElementsByClassName('close');

for (var i = 0; i < close.length; i++) {
   close[i].addEventListener('click', function() {
      var div = this.parentElement;
      div.style.opacity = '0';
      setInterval(function() {
         div.style.display = 'none';
      }, 600);
   })
}