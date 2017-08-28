var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var template = {
  
  articleone : {
  title:'Article One',
  head:'Article One',
  date:"10-SEP-2016",
  content:`<p>
            This is article One
            This is article One
            This is article One
            This is article One
            This is article One
            This is article One
            This is article OneThis is article One
            This is article One
        </p>
        <p>
            This is article One
            This is article One
            This is article One
            This is article One
            This is article One
            This is article One
            This is article OneThis is article One
            This is article One
        </p>
        <p>
            This is article One
            This is article One
            This is article One
            This is article One
            This is article One
            This is article One
            This is article OneThis is article One
            This is article One
        </p>`
  },
  articletwo : {
  title:'Article Two',
  head:'Article-Two',
  date:"15-SEP-2016",
  content:`<p>
           This is article Two          
        </p>`
  },
  articlethree : {
  title:'Article Three',
  head:'Article-Three',
  date:"20-SEP-2016",
  content:`<p>
           This is article Two          
        </p>`
  }
};

function createTemplate(name) {
    
    var head = template(name).head;
    var content = template(name).content;
    var date = template(name).date;
    var title = template(name).title;
 
 return `<html>
    <head>
        <title>${title}</title>
        <meta content='width=device-width, initial-scale=1.0' name='viewport' />
        <link href="ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
        <h1 class="center underline">
            ${head}
        </h1>
        <a href='/'>home</a>
        <div>
            <p>${date}</p>
        </div>
        <hr/>
        ${content}
        </div>
    </body>
</html>`;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articlename',function(req,res){
   var name = req.params.articlename;
   res.send(createTemplate(name)); 
});

app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname,'ui','article-two.html')); 
});

app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname,'ui','article-three.html')); 
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
