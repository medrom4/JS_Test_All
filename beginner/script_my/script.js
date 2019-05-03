(function () {

    var todoList = [];

    if (localStorage.getItem('todo')) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        out();
    }

    document.getElementById('add').onclick = function () {
        var temp = {};
        var item = document.getElementById('in').value;
        temp.todo = item;
        temp.check = false;
        todoList.push(temp);
        out();
        localStorage.setItem('todo', JSON.stringify(todoList));
    }

    document.getElementById('out').onchange = function (event) {
        currentKey = event.target.parentNode.childNodes[1].data.slice(1);
        for (i = 0; i < todoList.length; i++) {
            if (todoList[i].todo == currentKey) {
                todoList[i].check = !todoList[i].check;
                out();
                localStorage.setItem('todo', JSON.stringify(todoList));
                break;
            }
        }
    }

    function out() {
        var out = '';
        for (var i = 0; i < todoList.length; i++) {
            if (todoList[i].check)
                out += '<span class="underlined"><input type="checkbox" checked> ' + todoList[i].todo + '</span><br>';
            else {
                out += '<span><input type="checkbox"> ' + todoList[i].todo + '</span><br>';
            }
        }
        document.getElementById('out').innerHTML = out;
    }

})();
