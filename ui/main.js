console.log('Loaded!');

window.onload = clickchecker();

function clickchecker() {
var button = document.getElementById('click');
timespan = document.getElementById('times');
clickcounter = 0;
button.onclick = clickcount;
}

function clickcount(){
    clickcounter = clickcounter + 1;
    timespan.innerHTML = clickcounter.toString();
}
