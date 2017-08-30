var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;

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
    
    var head = name.head;
    var content = name.content;
    var date = name.date;
    var title = name.title;
 
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

var countervar = 0;

function counterfun(){
    countervar = countervar + 1;
    return countervar.toString();
}

var config = {
    user: 'pjananth22123',
  host: 'db.imad.hasura-app.io',
  database: 'pjananth22123',
  password: process.env.DB_PASSWORD,
  port: 5432
};

var pool = new Pool(config);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/test-db',function(req,res){
   
   pool.query('select id,name from testdata',function(err,results){
       
      if(err) {
          res.status(505).send(err.toString());
      } else{
          res.send(results.rows);
      }
   });
    
});

var namelist = [];

app.get('/namelist',function(req,res){
   var name = req.query.name;
   namelist.push(name);
   res.send(JSON.stringify(namelist));
});

app.get('/articles/:articlename',function(req,res){
   var name = req.params.articlename;
   
   pool.query('select * from article where title = $1',[name],function(err,results){
      
      if(err){
          res.status(505).send(err.toString());
      } else{
          if(results.rows.length === 0){
              res.status(404).send('No rows selected');
          } else{
              var template = results.rows[0];
              res.send(createTemplate(template)); 
          }
      }
       
   });
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

app.get('/ui/checkcount',function(req,res){
    res.send(counterfun());
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
