var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require("path");

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
  const fPath = '/Users/saumya/Downloads/2_books/info.txt';

  fs.stat(fPath,function(err, stats){
  	console.log('stats',stats);

  	//res.writeHead(200, {'Content-Type': 'application/json'});
  	res.writeHead(200, {'Content-Type': 'text/html'});
  	//res.write('Birth time = '+stats['birthtime']);
  	res.write( 'Details of the file at <br/> ' + fPath + ' <br/> '+ JSON.stringify(stats) );
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

//ref : https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
router.get('/folder', function(req, res, next) {
	//res.send('Folder information');
	// 
	const folderPath = '/Users/saumya/Downloads/2_books/zz_z';
	/*
	// Async
	fs.readdir(folderPath, (err, files) => {
	  files.forEach(file => {
	    console.log(file);
	    //res.send(file);
	  });
	});
	*/
	/*
	//Sync
	fs.readdirSync(folderPath).forEach(file => {
	  console.log(file);
	  //res.send(file);
	});
	*/

	var allFiles = [];
	fs.readdir(folderPath, 'utf8', (err, files) => {

		if (err) {
			throw err;
		}

		/*
		var allFileNames = '';
		var aFileNames = [];

		var aFileName = '';

		var sUL = '<ul>';
		var s1 = '';

	  files.forEach(file => {
	    
	    //res.send(file);
	    //allFiles.push(file);
	    //res.send(allFiles);

	    //console.log( file );
	    //console.log( path.basename(file) + ':' + path.extname(file) );

	    aFileName = path.basename(file);
	    if(aFileName.indexOf(".")===0){
	    	// Do Nothing
	    }else{
	    	allFileNames += path.basename(file);
	    	aFileNames.push( aFileName );
	    	s1 = '<li>'+path.basename(file)+'</li>';
	    	sUL += s1;
	    }

	    //allFileNames += path.basename(file);
	    //aFileNames.push( aFileName );

	    //s1 = '<li>'+path.basename(file)+'</li>';
	    //sUL += s1;

	  });
	  sUL += '</ul>';
	  //console.log('allFileNames : ',allFileNames);
	  //res.send(allFileNames);
	  //res.send(aFileNames);
	  res.send(sUL);
	  */

	  //files = files.sort();
	  //console.log(files.length );
	  //console.log(files);
	  //console.log('==========');
	  /*
	  files.sort(function(a,b){
	  	if(a.length>b.length){
	  		return 1;
	  	}else{
	  		return -1;
	  	}
	  });
	  */

	  //send to template
		res.render('fileList', { title: 'All Files.', folder:folderPath, numFiles:files.length, allFiles: files });
	});

	

});

module.exports = router;
