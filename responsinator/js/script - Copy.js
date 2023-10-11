(function ($) {
  $(document).ready(function(){



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
	
//$( ".ui-resizable-e" ).append( "<p>Test</p>" );

	function resizDevices() {
	  $('a.resize-devices').click(function () {
		var width_len = $(this).data('width');
		var height_len = $(this).data('height');
		

		
		$('#resizer').animate({
		  width: '' + width_len + 'px',
		  height: '' + height_len + 'px'
		}, 300);
		
		$('#dimensions .dimen-container').animate({
		  width: '' + width_len + 'px',
		}, 300);
		
		$("#dimensions .width").html(width_len);
		$("#dimensions .height").html(height_len);
		
		 return false;
	  }); // click function
	  
	 var rezis_width = $("#resizer").width();
	 var rezis_width = $("#resizer").height();
	  
	  
	  $("#dimensions .width").html($("#resizer").width());
	  $("#dimensions .height").html($("#resizer").height());
	  $("#dimensions .dimen-container").css("width", $("#resizer").width() + 'px');
	  
	 
	}
	
	resizDevices();
	

	  
// Reload Iframe when click abutton 
 $("#reload").click(function() {
        jQuery.each($("iframe"), function() {
            $(this).attr({
                src: $(this).attr("src")
            });
        });
        return false;
    });
	
	
	
	$("#resizer").resize(function(){
		 $("#dimensions .width").html($("#resizer").width());
		 $("#dimensions .height").html($("#resizer").height());
		 $("#dimensions .dimen-container").css("width", $("#resizer").width() + 'px');
	});
		
	
	

	
	
	
	
  }); //$(document).ready
  
//add local css into Iframe
/*var $head = $("iframe").contents().find("head");                
$head.append($("<link/>", 
    { rel: "stylesheet", href: "http://localhost/css/css/inline.css", type: "text/css" }));  */
	

	var theForm = document.getElementById('theForm');
	var theInput = document.getElementById('urltext');
	var resiz_width = $("#resizer").width();
	var resiz_height = $("#resizer").height();
	theForm.onsubmit = function(e) {
		var url_text = $(theInput).val();
		location = "#u=" + [url_text, resiz_width,resiz_height].join("|");
		return false;
	}

/*
if(window.location.hash && '#u=' == window.location.hash.substr(0, 2)) {
  var query = window.location.hash.substring(2);
  if(query.indexOf('|') == -1) {
    $scope.url = query;
  } else {
    var array = query.split('|');
    $scope.url = array[0];
    $scope.w = array[1];
    $scope.h = array[2];
   // $scope.pxd = array.length > 3 ? array[3] : 1;
  }
  
  alert("yes");
  
  
} else {
alert ("no set");
  //$scope.url = response.randomUrls[Math.floor(Math.random() * response.randomUrls.length)];
}

*/





 $(window).resize(function() {	
	//resizDevices();
 });
 
})(jQuery); 










