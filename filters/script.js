function myFunction() {
   var ul = document.getElementById('myUl');
   var li = ul.getElementsByTagName('li');
   var input = document.getElementById('myInp');
   var result = input.value.toUpperCase();
   
   for (var i = 0; i < li.length; i++) {
      var a = li[i].getElementsByTagName('a')[0];
      if (a.innerHTML.toUpperCase().indexOf(result) > -1) {
         li[i].style.display = 'block';
      } else {
         li[i].style.display = 'none';
      }
   }
}