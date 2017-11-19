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
  res.send({'route path':'response/ folder2'});
});

router.get('/inFolder', function(request, response, next){
	
	const folderPath = path.join('./public/zz_z/');
	var aFileDetails = [];

	//var allFiles = [];
	fs.readdir(folderPath, 'utf8', (err, files) => {
		if (err) {
			throw err;
		}

		var sHtml = '';
		var oFile = {};
		var sFile = '';
		var sJSON = '{"result":[';
		
		for (var i = 0; i < files.length; i++) {
			var pathname = (folderPath+'/'+files[i]);
			var stats = fs.statSync(pathname);
			oFile = {
				'no':i,
				'name':files[i],
				'aTime':stats.atime,
				'mTime':stats.mtime
			}
			sFile = JSON.stringify(oFile);
			sJSON += sFile+',';
			aFileDetails.push(oFile);
		}
		sJSON += '{"no":'+(files.length+1)+',"name":"","aTime":"","mTime":""}]}';
		sJSON.replace(/ /g,'');
		//sort the file details
		aFileDetails.sort(function(file1,file2){
			var d1 = new Date(file1.aTime).getTime();
			var d2 = new Date(file2.aTime).getTime();
			if(d1>d2){
				return true;
			}
		});
		response.render('fileListOne', { title: 'Files\' Details.', numFiles:files.length, allFileDetails: aFileDetails });
		//
	});
})

//Export module
module.exports = router;
