console.log('Loaded!');

window.onload = clickchecker;

function clickcount(){
    
    //Make a new request variable
    var request = new XMLHttpRequest();
    
    
    //Getting the return status of the request
    request.onreadystatechange = function(){
      
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200){
              counter = request.responseText;
              timespan = document.getElementById('times');
              timespan.innerHTML = counter;
          }
      }
        
    };
    
    //Making the request to the desired url
    request.open('GET','http://pjananth22123.imad.hasura-app.io/ui/checkcount',true);
    request.send(null);
}

function submit_fun(){
    namelist = document.getElementById('namelist');
    nameentered = document.getElementById('Name').value;
    var finalnamelist;
    var names=['name1','name2','name3','name4'];
    
    names.pust(nameentered);
    
    for(j=0;j<names.length;j++){
        finalnamelist = '<li>'+names[j]+'</li>';
    }
    
    namelist.innerHTML = finalnamelist;
}

function clickchecker() {
button = document.getElementById('click');
clickcounter = 0;
button.onclick = clickcount;
submitcheck = document.getElementById('Submit');
submitcheck.onclick = submit_fun;
}

