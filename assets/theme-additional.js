// Custom stuff
$(document).ready(function(){
	// properties[Date]
	if ( $('input[name="properties[Date]"]') ) {
		let n =  new Date();
		let y = n.getFullYear();
		let m = n.getMonth() + 1;
		let d = n.getDate() + 1;
		let date = y + "-" + m + "-" + d;
		console.log(date);
		$('input[name="properties[Date]"]').attr('min', date);
	}


});