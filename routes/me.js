var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('TODO: Display system information.');
  
  /*
  fs.readFile('/Users/saumya/Downloads/2_books/info.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  */
  const path = '/Users/saumya/Downloads/2_books/info.txt';
  fs.stat(path,function(err, stats){
  	console.log('stats',stats);

  	//res.writeHead(200, {'Content-Type': 'application/json'});
  	res.writeHead(200, {'Content-Type': 'text/html'});
  	//res.write('Birth time = '+stats['birthtime']);
  	res.write( 'Details of the file at <br/> ' + path + ' <br/> '+ JSON.stringify(stats) );
  	res.end();

  });

});

/*
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
*/

module.exports = router;
