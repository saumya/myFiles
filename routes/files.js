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
	response.send('Files in Folder');
})


module.exports = router;
