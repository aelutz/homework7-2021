var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

// play button
document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
 	video.play();

	document.querySelector('#volume').innerHTML = video.volume*100+'%';

});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down video
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	var playbackRate = video.playbackRate;
	video.playbackRate = video.playbackRate * 0.95;
	console.log(playbackRate)

});

// speed up video
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	var playbackRate = video.playbackRate;
	video.playbackRate = video.playbackRate * 1.05;
	console.log(playbackRate)
	
});

// skip ahead 
document.querySelector("#skip").addEventListener("click", function() {
	var currentTime = video.currentTime;
	video.currentTime = (currentTime + 15);
	console.log("Skip Ahead Video");
	console.log(currentTime);
	
});

// mute/unmute video
document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").innerHTML == "Mute") {
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
		console.log("Mute Video");
	}

	else {
	 	document.querySelector("#mute").innerHTML = "Mute";
	 	video.muted = false;
	 	console.log("Unmute Video");
	}
	
});

// update volume slider COME BACK HERE
document.querySelector("#slider").addEventListener("click", function() {
	var sliderValue = document.querySelector("#slider").value;
	video.volume = sliderValue/100;
	document.querySelector('#volume').innerHTML = video.volume*100+'%';
	console.log(sliderValue);

	
});

// styled 
document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("#player1").setAttribute("class", "oldSchool");
	console.log("Styled");
	var idValue = document.querySelector("#player1").getAttribute("class");
	console.log(idValue)
	
});

// original
document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("#player1").setAttribute("class", "video");
	console.log("Original");
	
});




