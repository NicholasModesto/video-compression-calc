var calc = {};
calc.bitrate = function() {
	this.audioRate = 96;
	this.fileSize = document.getElementById('dfs').value;
	this.runtime = document.getElementById('cbr-trt').value;
	this.totalBitRate = (this.fileSize * 8000) / this.runtime;
	this.videoRate = parseInt(this.totalBitRate - this.audioRate, 10);

	var answer = "<table class='table table-striped'><tbody><tr><td>Audio Bit Rate</td><td><strong>" + this.audioRate + " kbps</strong></td></tr><tr><td>Video Bit Rate</td><td><strong>" + this.videoRate + " kbps</strong></td></tr></tbody></table>";
	this.returnAnswer('Find Bit Rate', answer);
};
calc.filesize = function() {
	this.audioRate = parseInt (document.getElementById('abr').value, 10);
	this.videoRate = parseInt (document.getElementById('vbr').value, 10);
	this.runtime = parseInt (document.getElementById('cfs-trt').value, 10);
	this.fileSize = ((this.audioRate + this.videoRate) * this.runtime)/8000;

	var answer = "<table class='table table-striped'><tbody><tr><td>Audio Bit Rate</td><td>" + this.audioRate + " kbps</td></tr><tr><td>Video Bit Rate</td><td>" + this.videoRate + " kbps</td></tr><tr><td>Total Run Time:</td><td>" + this.runtime + " seconds</td></tr><tr><td><strong>File Size</strong></td><td><strong>" + this.fileSize + " MB</strong></td></tr></tbody></table>";
	this.returnAnswer('Find File Size', answer);
};
calc.returnAnswer = function(title,answer) {
	this.title = title;
	this.answer = answer;
	$('#modal .modal-header h3').html( this.title );
	$('#modal .modal-body').html( this.answer );
};

$(document).ready(function () {
	$('#showCBR').click( function() {
		$('#showCBR').toggleClass("selected");
		$("#showCFS").toggleClass("selected");
		$('#calc').fadeIn();
		$('#ffs').fadeOut();
		$('#fbr').delay(400).fadeIn('fast');
	});
	$('#showCFS').click( function() {
		$('#showCFS').toggleClass("selected");
		$("#showCBR").toggleClass("selected");
		$('#calc').fadeIn();
		$('#fbr').fadeOut();
		$('#ffs').delay(400).fadeIn('fast');
	});
	$('#cbr').click(function(){
		calc.bitrate();
	});
	$('#cfs').click(function(){
		calc.filesize();
	});
});

