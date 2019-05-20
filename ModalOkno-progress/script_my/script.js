function userProgress(time) {
  let start = 0;
  var time = Math.round(time * 1000 / 100);
  let progressElement = document.getElementById('user-bar');

  let intervalID = setInterval(function () {
    if (start > 100) {
      clearInterval(intervalID);

      userProgressCallBack();

    } else {
      progressElement.value = start;
    }
    start++;
  }, time);
}

function userProgressCallBack() {
  document.getElementById('blokirovka').style.display = 'none';
}

userProgress(3);