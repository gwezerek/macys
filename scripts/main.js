var isMSIE = /*@cc_on!@*/0;

$('.balloon-list').hide();
$('.macys-footer').hide();

if (!$("html").hasClass("csstransforms3d")) {
	$("html").addClass("no3d");
}

if (isMSIE) {
    $("html").addClass("no3d");
}


$.ajax({
	url: "scripts/data.json", 
	async: false, 
	dataType: "json", 
	success: function(argument) {
		
		var output=[],
		list = "";

		$.each(argument.balloons , function(key, val) {

			var template = $('#macys-template').html();
			var parsedTemplate = _.template(template, {
				name : val.name,
				year : val.year,
				fact : val.fact,
				debut: val.media_debut,
				debutYear: val.debut_year,
				difficulty: val.difficulty,
				url : val.url
			});

			output.push(parsedTemplate);
		});

		list = output.join("");
		$(".balloon-list").append(list);
	}
});

$(".balloon-mod").on("click", function(){
	$(this).toggleClass("flip");
});

$( window ).load(function() {
	$('.fc-logo-loader').fadeOut(500);
	$('.balloon-list').delay(300).fadeIn(500);
	$('.macys-footer').delay(300).fadeIn(500);
});

$(".graphic-game-start").on("click", function(){
	endGame();
});

$(".graphic-game-end").on("click", function(){
	startGame();
});

function startGame() {
	$("body").removeClass('is-playing').addClass('not-playing');
};

function endGame() {
	$("body").removeClass('not-playing').addClass('is-playing');
};

startGame();

// FOR NON TRANSFORM USERS







