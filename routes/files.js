//
// First version of checking the files inside a folder
// But seems that it fails when we have a lot of files
// Definitely more work is needed either in logic or finding a better solution.
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
	/*
	// list all files in a folder
	// ref: https://gist.github.com/kethinov/6658166
	//
	const folderPath = path.join('./public/zz_z/');
	var aFileDetails = [];

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
	});
	//
	*/
	//response.send("TODO");
	//const folderPath = path.join('./public/zz_z/');
	const folderPath = ('./public/zz_z');
	//const folderPath = ('.'); // Fails: Most probably the number of files are more
	var allFiles = getFiles(folderPath);
	console.log('=============================');
	console.log('Total Files',allFiles.length);
	console.log('=============================');
	//response.send(allFiles);
	var aSortedFiles = sortFilesAsPerDateOpened(allFiles);
	//response.send(aSortedFiles);

	response.render('fileListOne', { title: 'Files\' Details.', numFiles:aSortedFiles.length, allFileDetails: aSortedFiles });
})

// private functions
// ref: https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
//
function getFiles (dir, files_,aFileDetails){
	//
	var oFile = {};
	var sFile = '';
	//var aFileDetails = [];
	aFileDetails = aFileDetails || [];
	//
	files_ = files_ || [];
	var files = fs.readdirSync(dir);
  for (var i in files){
    var name = dir + '/' + files[i];
    //
    var stats = fs.statSync(name);
		
    //
    //if (fs.statSync(name).isDirectory()){
    if (stats.isDirectory()){
    	//console.log("================ Folder");
      getFiles(name, files_, aFileDetails);
    } else {
      files_.push(name);
      //
			oFile = {
				'no':i,
				'name':files[i],
				'aTime':stats.atime,
				'mTime':stats.mtime
			}
			sFile = JSON.stringify(oFile);
			aFileDetails.push(oFile);
    }
  }
  //return files_;
  return aFileDetails;
}
//
function sortFilesAsPerDateOpened(aFiles){
	//sort the file details
	var aSortedDetails = aFiles.sort(function(file1,file2){
		var d1 = new Date(file1.aTime).getTime();
		var d2 = new Date(file2.aTime).getTime();
		if(d1>d2){
			return true;
		}
	});
	return aSortedDetails;
}

//Export module
module.exports = router;
