	$(document).ready(function () {
		$(".outline").on("click", function () {
			var val = $(this).attr("sound-val");
			$("." + val)[0].play();
		})
	})