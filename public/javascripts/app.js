//
// version : 0.1.0

(function(){
	console.log('app.js');
	var onButtonClick = function(eventObj){
		console.log('onButtonClick');
	}
})()


// ==============   Globals =========================
var onButtonClick = function(eventObj){
	console.log('onButtonClick',eventObj);

	console.log(eventObj.length);
	//removing white space
	var s1 = eventObj.replace(" ","");
	// setting info
	var videoInfo = document.getElementById("idVideoInfo");
	videoInfo.innerHTML='Playing :'+s1;
	// setting video
	var videoPath = '../zz_z/'+s1;
	var vElm = document.getElementById("idVideo");
	vElm.src = videoPath;
}
// ============== / Globals =========================

