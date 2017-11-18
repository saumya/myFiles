//
// version : 0.1.0

(function(){
	console.log('fileListOne.js');
	var onButtonClick = function(eventObj){
		console.log('onButtonClick');
	}
	//
	//console.log('aFileDetails[0].aTime',aFileDetails[0].aTime,aFileDetails[0].name);
	//var sorted = [];
	var sorted = aFileDetails.sort(function(a,b){
	  var t1 = new Date(a.aTime).getTime();
	  var t2 = new Date(b.aTime).getTime();

	  //console.log('t1',t1,':: t2',t2);

	  if(t1>t2){
	  	//console.log('t1>t2');
	    return true;
	  }

	});
	//console.log('aFileDetails[0].aTime',sorted[0].aTime,sorted[0].name);
	//console.log('aFileDetails[0].aTime',aFileDetails[0].aTime,aFileDetails[0].name);
	//
	/*
	for (var i = 0; i < sorted.length; i++) {
		var fDetails = sorted[i];
		console.log('fDetails.name',fDetails.name);
	}
	*/

	var container = document.getElementById("idFileListContainer");
	container.innerHTML = "";

	var newString = '<ul>';
	for (var i = sorted.length - 1; i >= 0; i--) {
		//var fDetails = sorted[i];
		//console.log('sorted[i]',sorted[i].name);
		newString += '<li><span class="fName">'+sorted[i].name+'</span><span class="fDate">'+sorted[i].aTime+'</span></li>';
	}
	newString += '</ul>';

	container.innerHTML = newString;



	//
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

