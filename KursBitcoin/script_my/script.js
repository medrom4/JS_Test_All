(function () {
  /*   getRate(); */
  getHistory();
})();

function getRate() {
  $.get(
    'https://api.coindesk.com/v1/bpi/currentprice.json',
    function (data) {
      data = JSON.parse(data);
      console.log(data);
    }
  );
}

function getHistory() {
  $.get(
    "https://api.coindesk.com/v1/bpi/historical/close.json", {
      "start": '2019 - 01 - 01',
      "end": '2019 - 02 - 01'
    },
    function (data) {
      data = JSON.parse(data);
      console.log(data);
    }
  );
}