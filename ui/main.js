console.log('Loaded!');

window.onload = clickchecker;

function clickcount(){
    
    var request = XMLHttpRequest();
    
    request.onreadystatechange = function(){
      
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200){
              counter = request.responseText;
              timespan = document.getElementById('times');
              timespan.innerHTML = counter;
          }
      }
        
    };
    
    request.open('GET','http://pjananth22123.imad.hasura-app.io/ui/checkcount',true);
    request.send(null);
}

function clickchecker() {
button = document.getElementById('click');
clickcounter = 0;
button.onclick = clickcount;
}

