$(document).ready(function() {
			
	$('#showCBR').click( function() {
	$('#showCBR').addClass("selected");
		$("#showCFS").removeClass("selected");
		$('#calc').fadeIn();
		$('#ffs').fadeOut();
		$('#fbr').delay(400).fadeIn('fast');
	});
	
	$('#showCFS').click( function() {
		$('#showCFS').addClass("selected");
		$("#showCBR").removeClass("selected");
		$('#calc').fadeIn();
		$('#fbr').fadeOut();
		$('#ffs').delay(400).fadeIn('fast');
	});
	
	$("#fbr").validate({
			onsubmit: false,
			rules: {
				dfs: {
					required: true,
					number: true
				},
				cbrTRT: {
					required: true,
					number: true
				}
			}
		});
		
	$("#ffs").validate({
			onsubmit: false,
			rules: {
				abr: {
					required: true,
					number: true
				},
				vbr: {
					required: true,
					number: true
				},
				cfsTRT: {
					required: true,
					number: true
				}
			}
		});
	
	$('#cbr').click(function(){
		var fsize, trt, tbr, vbr = 0;
		var abr = 96;
		
		fsize = document.getElementById('dfs').value;
		trt = document.getElementById('cbr-trt').value;
		
		tbr = (fsize * 8000) / trt; //converts fsize MB -> kb & divides by time to create a kbps unit
		vbr = parseInt(tbr - abr, 10);

		$('#modal .modal-header h3').html('Find Bit Rates');
		
		$('#modal .modal-body').html(function() {
			return '<table class="table table-striped"><tbody><tr><td>Audio Bit Rate</td><td><strong>' + abr + ' kbps</strong></td></tr><tr><td>Video Bit Rate</td><td><strong>' + vbr + ' kbps</strong></td></tr></tbody></table>';
		});
	});
	
	$('#cfs').click(function(){
		var fsize, trt, abr, vbr = 0;
		
		abr = parseInt (document.getElementById('abr').value, 10);
		vbr = parseInt (document.getElementById('vbr').value, 10);
		trt = parseInt (document.getElementById('cfs-trt').value, 10);
			
		fsize = (abr + vbr) * trt; // finds total file size in kb
		fsize = fsize / 8000; // converts fsize from kb -> MB
		
		$('#modal .modal-header h3').html('Find File Size');
		
		$('#modal .modal-body').html(function() {
			return '<table class="table table-striped"><tbody><tr><td>Audio Bit Rate</td><td>' + abr + ' kbps</td></tr><tr><td>Video Bit Rate</td><td>' + vbr + ' kbps</td></tr><tr><td>Total Run Time:</td><td>' + trt + ' seconds</td></tr><tr><td><strong>File Size</strong></td><td><strong>' + fsize + ' MB</strong></td></tr></tbody></table>';
		});
	});
	
});
