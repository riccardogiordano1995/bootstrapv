$(document).ready(function () {

	var root = 'json';

	$('.bottonemagico').on('click', function(){
		$.get('html/template.html', function ( userTemplate ) {
			$.ajax({
				url: root + '/file.json',
				method: 'GET', //GET, POST, PUT, DELETE
				contentType: 'application/json', //ask server to return json
				dataType: 'json', //says to server we are sending json
				//Call if request return successfully
				success: function (response) {
					var template = Handlebars.compile($(userTemplate)[0].outerHTML); //convert from jquery to string
					for(var i = 0; i < 6 ; i ++) {
						var html = template(response[i]);
						$('#nomevini').append(html)
					}
				},
				//Call in case of request error
				error: function (request, errorType, errorMessage){
					alert('Error: ' + errorType + ', message: ' + errorMessage)
					console.log(request);
				}
			});
		});
	});
});


    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });


$(document).ready(function () {

	var root = 'json';

	$('.bottonemagico2').on('click', function(){
		$.get('html/template2.html', function ( userTemplate ) {
			$.ajax({
				url: root + '/file.json',
				method: 'GET', //GET, POST, PUT, DELETE
				contentType: 'application/json', //ask server to return json
				dataType: 'json', //says to server we are sending json
				//Call if request return successfully
				success: function (response) {
					var template = Handlebars.compile($(userTemplate)[0].outerHTML); //convert from jquery to string
					for(var i = 0; i < 6 ; i ++) {
						var html = template(response[i]);
						$('#altrivini').append(html)
						$('.bottonemagico2').hide()
					}
				},
				//Call in case of request error
				error: function (request, errorType, errorMessage){
					alert('Error: ' + errorType + ', message: ' + errorMessage)
					console.log(request);
				}
			});
		});
	});
});


$(document).ready(function () {

	var root = 'json';

	$('.bottonemagico3').on('click', function(){
		$.get('html/template3.html', function ( userTemplate ) {
			$.ajax({
				url: root + '/file2.json',
				method: 'GET', //GET, POST, PUT, DELETE
				contentType: 'application/json', //ask server to return json
				dataType: 'json', //says to server we are sending json
				//Call if request return successfully
				success: function (response) {
					var template = Handlebars.compile($(userTemplate)[0].outerHTML); //convert from jquery to string
					for(var i = 0; i < 6 ; i ++) {
						var html = template(response[i]);
						$('#altrisommelier').append(html)
						$('.bottonemagico3').hide()
					}
				},
				//Call in case of request error
				error: function (request, errorType, errorMessage){
					alert('Error: ' + errorType + ', message: ' + errorMessage)
					console.log(request);
				}
			});
		});
	});
});



// Apre il menu mobile    
$("#menu-toggle").click(function(e) {
    $("#wrapper").addClass("toggled");
    console.log('boh');
});

// Chiude il menu mobile
$("#close").click(function(e) {
    $("#wrapper").removeClass("toggled");
});

// Closes the Responsive Menu on Menu Item Click
$("#wrapper").click(function(e) {
    $("#wrapper").removeClass("toggled");
});

