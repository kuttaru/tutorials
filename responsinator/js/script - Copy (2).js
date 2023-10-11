(function ($) {
  $(document).ready(function(){



	var theForm = document.getElementById('theForm');
	var theInput = document.getElementById('urltext');
	var resiz_width = 600;
	var resiz_height = 400;
	theForm.onsubmit = function(e) {
		var url_text = $(theInput).val();
		location = "#u=" + [url_text, resiz_width,resiz_height].join("|");
		return false;
	}



 function getUrlVars(){
	if (window.location.href.indexOf("#u=") != -1){
		var full_url = document.URL; // Get current url
		var url_array = full_url.split('#u=') // Split the string into an array with / as separator
		var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)	
		var last_segment = last_segment.split('|');
		var url = last_segment[0]
		var url_width = last_segment[1]
		var url_height = last_segment[2]
		
			
		$("#urltext").attr('value',url);
		$("#miniBrowser").attr('src',url);
	}
 }
getUrlVars();

$( "#resizer" ).resizable();

// Reload Iframe when click abutton 
$("#reload").click(function () {
    jQuery.each($("iframe"), function () {
        $(this).attr({
            src: $(this).attr("src")
        });
    });
    return false;
});
	
	
	
	
	
	
	
	
//$( ".ui-resizable-e" ).append( "<p>Test</p>" );

	$("#resizer").resize(function(){
		 $("#dimensions .width").html($("#resizer").width());
		 $("#dimensions .height").html($("#resizer").height());
		 $("#dimensions .dimen-container").css("width", $("#resizer").width() + 'px'); 
	});
		
	
// Resize Navigation ==============



	
	
	
	
  }); //$(document).ready
  





 $(window).resize(function() {	
	//resizDevices();
 });
 
})(jQuery); 










