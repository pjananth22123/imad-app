console.log('Loaded!');

var button = document.getElementById('click');
var timespan = document.getElementById('times');
var clickcounter = 0;
button.onclick = clickcount();

function clickcount(){
    clickcounter = clickcounter + 1;
    timespan.innerHTML = clickcounter.toString();
}