document.getElementById('test').onmousemove = function(event) {
  
  document.getElementById('offx').innerHTML = event.offsetX;
  document.getElementById('offy').innerHTML = event.offsetY;;

  
}