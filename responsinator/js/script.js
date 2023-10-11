function browserResize() {
        var theForm = document.getElementById('theForm');
        var theInput = document.getElementById('urltext');
        var resiz_width = 600;
        var resiz_height = 400;
        theForm.onsubmit = function (e) {
            var url_text = $(theInput).val();
            window.location.hash = "#u=" + [url_text, resiz_width, resiz_height].join("|");
			location.reload(true);
            return false;
        }

        function getUrlVars() {
            if (window.location.href.indexOf("#u=") != -1) {
                var full_url = document.URL; // Get current url
                var url_array = full_url.split('#u=') // Split the string into an array with / as separator
                var last_segment = url_array[url_array.length - 1]; // Get the last part of the array (-1)
                var last_segment = last_segment.split('|');
                var url = last_segment[0]
                var url_width = last_segment[1]
                var url_height = last_segment[2]
                $("#urltext").attr('value', url);
                $("#miniBrowser").attr('src', url);
            }
        }
        getUrlVars();
        if (window.location.hash) {
            var full_url = document.URL; // Get current url
            var url_array = full_url.split('#u=') // Split the string into an array with / as separator
            var last_segment = url_array[url_array.length - 1]; // Get the last part of the array (-1)
            var last_segment = last_segment.split('|');
            var n = last_segment[0]
            var r = last_segment[1]
            var i = last_segment[2]
            value = $("#urltext").val();
            $("#urltext").attr("value", value);
            $("iframe").attr("src", value);
            window.location.hash = "#u=" + value + "|" + r + "|" + i;
            $("#welcome").hide();
            $("body").removeClass("popup");
            $("#resizer").width(r);
            $("#resizer").height(i);
            $("#currentwidth").val(r);
            $("#currentheight").val(i);
        } else {
            value = $("#urltext").val();
            $("#urltext").attr("value", value);
            $("iframe").attr("src", value);
            window.location.hash = "#u=" + value + "|320|480";
            $("#welcome").show();
            $("body").addClass("popup");
            $("#resizer").width(320).height(480);
        }
        $("#resizer").resizable({
            handles: "e, s",
            start: function (e, t) {
                $("iframe").css("pointer-events", "none");
                // $("iframe").removeClass("animate");
                //$("#resizer").removeClass("animate")
            },
            stop: function (e, t) {
                $("iframe").css("pointer-events", "auto");
                //$("iframe").addClass("animate");
                //$("#resizer").addClass("animate");
                var full_url = document.URL; // Get current url
                var url_array = full_url.split('#u=') // Split the string into an array with / as separator
                var last_segment = url_array[url_array.length - 1]; // Get the last part of the array (-1)
                var last_segment = last_segment.split('|');
                var n = last_segment[0]
                var r = last_segment[1]
                var i = last_segment[2]
                u = $("#resizer").width(),
                a = $("#resizer").height();
                window.location.hash = "#u=" + value + "|" + u + "|" + a
            },
            resize: function (e, t) {
                if (n === "1") var r = 18;
                else var r = 0;
                $("#currentwidth").empty().val($("#resizer").width());
                $("#currentheight").empty().val($("#resizer").height());
                $("#resizer").width($("#resizer").width() + r);
                $("#resizer").height($("#resizer").height())
                $("#dimensions .width").text($("#resizer").width());
                $("#dimensions .height").text($("#resizer").height());
            }
        });
        $("#dimensions .width").text($("#resizer").width());
        $("#dimensions .height").text($("#resizer").height());

    } // browserResize
	
	
	
	
(function ($) {
    $(document).ready(function () {
        $("#resizer").resizable();
        browserResize();
        $(document).keypress(function (e) {
            var t = e.keyCode ? e.keyCode : e.which;
            t == "13" && browserResize()
        });
        // Reload Iframe when click abutton
        $("#reload").click(function () {
            jQuery.each($("iframe"), function () {
                $(this).attr({
                    src: $(this).attr("src")
                });
            });
            return false;
        });
		
	$('a.resize-devices').click(function () {
		var width_len = $(this).data('width');
		var height_len = $(this).data('height');
		$('#resizer').animate({
			width: '' + width_len + 'px',
			height: '' + height_len + 'px'
		}, 300);
		$("#currentwidth").empty().val(width_len);
		$("#currentheight").empty().val(height_len);
		window.location.hash = "#u=" + value + "|" + width_len + "|" + height_len
		return false;
	}); // click function
		
		
		
$("#currentwidth").keyup(function(){
    var width_len = this.value;
	  if(($(this).val().length) > 2){
			$('#resizer').animate({
				width: '' + width_len + 'px',
			}, 300);
	  }
	  
});
$("#currentheight").keyup(function(){
    var height_len = this.value;
	  if(($(this).val().length) > 2){
			$('#resizer').animate({
				height: '' + height_len + 'px',
			}, 300);
	  }
});	
		
		

		

		
		
		
		
		
		
		
		
    });
})(jQuery);
	
