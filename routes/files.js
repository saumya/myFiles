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
	//response.send('Files in Folder');
	// : /Users/saumya/Documents/1_photography
	
	const folderPath = path.join('./public/zz_z/');
	var aFileDetails = [];

	//var allFiles = [];
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
		//console.log('files',files);
		//response.send(files);
		//response.send({'files':files});
		
		//response.setHeader('Content-Type', 'application/json');
		//response.send(JSON.stringify({'files':files}));
		
		/*
		var myJsonString = JSON.stringify(files);
		response.send(myJsonString);
		*/
		/*
		var i,a,s = 0;
		var sJson = '{';
		for (i = files.length - 1; i >= 0; i--) {
			a = files[i]
			s = "{\"file\":\""+a+"\"}";
			sJson = sJson+s+',';
		}
		sJson = sJson+'}';
		response.send(sJson);
		*/
		var sHtml = '';
		var oFile = {};
		var sFile = '';
		var sJSON = '{"result":[';
		
		for (var i = 0; i < files.length; i++) {
			//console.log(i+':'+files[i]);
			//response.send(i+':'+files[i]);
			
			//sHtml += (i+':'+files[i]+'<br>');
			/*
			fs.stat((folderPath+'/'+files[i]),function(error,stats){
				console.log(stats);
			});
			*/
			var pathname = (folderPath+'/'+files[i]);
			var stats = fs.statSync(pathname);
			//console.log(stats);
			//sHtml += (i+':'+files[i]+': AccessTime=<b>'+stats.atime+'</b>: ModifictionTime=<b>'+stats.mtime+'</b><br><br>');
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
		//response.send(sHtml);
		sJSON += '{"no":'+(files.length+1)+',"name":"","aTime":"","mTime":""}]}';
		sJSON.replace(/ /g,'');
		
		/*
		// send the JSON out put
		response.setHeader('Content-Type', 'application/json');
		response.send(sJSON);
		*/

		response.render('fileListOne', { title: 'Files\' Details.', numFiles:files.length, allFileDetails: aFileDetails });



	});
})

//Export module
module.exports = router;
