//
var express = require('express');
var router = express.Router();
//
var chokidar = require('chokidar');
//var path = require("path");


//
// Initialize watcher.
/*
//var watcher = chokidar.watch('file, dir, glob, or array', {
var watcher = chokidar.watch(['.'], {
//var watcher = chokidar.watch('./', {
  ignored: /(^|[\/\\])\../,
  persistent: true,
  usePolling: true,
  interval: 2000,
  binaryInterval: 2500
}); 
*/
// it wawtches from the 'root' folder
//var watcher = chokidar.watch(['./routes/','./public/zz_z/3_songs/'], {
var watcher = chokidar.watch(['./public/zz_z/'], {
	persistent: true, 
});
// Something to use when events are received.
//var log = console.log.bind(console);
//
//watcher.on('change', function(path){ console.log(`File ${path} has been changed`) })
//watcher.on('error',function(error){ console.log(`Watcher error: ${error}`) });
//

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("=== Route / ===");
  //res.render('index', { title: 'My Files.' });
  //res.send("Let's Watch Folder.");
  watcher.on('ready', function(){
  	console.log('==========================');
  	console.log('Chokidar : Ready');
  	console.log('==========================');
  	//res.send('Chokidar is Ready.');
  }) 
  watcher.on('change', function(path,stats){ 
  	console.log('==========================');
  	console.log('Chokidar : Change');
  	console.log('path',path);
  	if (stats){
  		console.log('stats',stats);
  		console.log('changed to',`to ${stats.size}`);
  	}
  	//var watchedPaths = watcher.getWatched();
  	//console.log('watchedPaths',watchedPaths);
  	//
  	console.log('==========================');
  	//res.send('change');
  })
	watcher.on('error',function(error){
  	console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
  	console.log('Chokidar : ERROR');
    console.log(error);
  	console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx'); 
		//res.send('Error');
	});
  // should be inside 'ready' listener
	res.send('Watching folder now.');
});// END route

module.exports = router;
