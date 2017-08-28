console.log('Loaded!');

window.onload = clickchecker();

function clickchecker() {
var button = document.getElementById('click');
clickcounter = 0;
button.onclick = clickcount;
}

function clickcount(){
    clickcounter = clickcounter + 1;
    timespan = document.getElementById('times');
    timespan.innerHTML = clickcounter.toString();
}
