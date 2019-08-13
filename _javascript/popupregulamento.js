	$(function(){

		//Abre popup regulamento
		$('#abrir-popup-regulamento').click(function(event) {
			
			$('#modal').css('display', 'block').hide();

			$('#modal').fadeIn();

			$('#popup-regulamento').css('display', 'block').hide();

			$('#popup-regulamento').fadeIn();
		});

		function fecharPopUpRegulamento(){
			$('#popup-regulamento').fadeOut('normal', function() {
				$(this).css('display', 'none');
			});

			$('#modal').fadeOut('normal', function() {
				$(this).css('display', 'none');
			});
		}

		$('#modal').click(function(event) {
			fecharPopUpRegulamento();
		});

		$('#fechar-popup-regulamento').click(function(event) {
			fecharPopUpRegulamento();
		});

		
});
