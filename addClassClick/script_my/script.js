document.onclick = function (event) {
  console.log(event.target.tagName);

  if (event.target.tagName == 'IMG') {
    if (event.target.classList.contains('bordered')) {
      event.target.classList.remove('bordered');
    } else event.target.classList.add('bordered');
  }
}