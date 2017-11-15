//
var express = require('express');
var router = express.Router();
//
var fs = require('fs');
var path = require("path");
//
const folderPath = path.join('./public/zz_z/');

/* Get the Files */
router.get('/', function(req, res, next) {
  //res.send('response');
  res.render('files', { title: 'My File details in a folder.' });
});

router.get('/folder1', function(req, res, next) {
  res.send('response/ folder1');
});

router.get('/folder2', function(req, res, next) {
  res.send('response/ folder2');
});

router.get('/inFolder', function(request, response, next){
	//response.send('Files in Folder');
	// : /Users/saumya/Documents/1_photography
	
	const folderPath = path.join('./public/zz_z/');

	var allFiles = [];
	fs.readdir(folderPath, 'utf8', (err, files) => {
		//
		if (err) {
			throw err;
		}
		//
		//res.render('fileList', { title: 'All Files.', folder:folderPath, numFiles:files.length, allFiles: files, dfPath:demoFilePath });
		//
		//numFiles:files.length;
		//allFiles: files;
		console.log('files',files);
		response.send(files);
	});
})

//Export module
module.exports = router;
