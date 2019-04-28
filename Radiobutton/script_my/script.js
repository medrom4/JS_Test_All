document.getElementById('r1').oninput = cssGenerator;

function cssGenerator() {
    let div = document.getElementById('test');
    div.style.borderRadius = this.value + 'px';


    let out = document.getElementById('out');
    out.innerHTML = '-webkit-border-radius: ' + this.value + 'px;\n';
    out.innerHTML += 'border-radius: ' + this.value + 'px';
}
