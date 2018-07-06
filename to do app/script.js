var text = document.getElementById('text');
var Ul = document.getElementById('myUl');
var button = document.getElementById('button');
var li = document.getElementsByTagName('li');
var close = document.getElementsByClassName('close');

//for (var i = 0; i < li.length; i++) {
//   li[i].addEventListener('click', function() {
//      this.classList.add('chacked');
//   });
//}
//
//for (var j = 0; j < close.length; j++) {
//   close[j].addEventListener('click', function() {
//      this.previousSibling.remove();
////      this.parent.removeChild(this.previousSibling);
//   })
//}

button.addEventListener('click', function() {
   var val = text.value;
   if (val !== '') {
   var newli = document.createElement('li');
   var newclose = document.createElement('span');
   newclose.classList.add('close');
   newclose.innerHTML = '&times;';
   newclose.addEventListener('click', function() {
      this.previousSibling.remove();
      this.remove();
   });
   newli.addEventListener('click', function() {
      this.classList.add('chacked');
   });
   newli.innerHTML = val;
   Ul.appendChild(newli);
   Ul.appendChild(newclose);
   text.value = '';
   } else {
      alert('Поле пустое');
   }
})
