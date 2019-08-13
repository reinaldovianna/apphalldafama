$(function(){
		var paginaRegulamento = 'primeira-pagina';
		numeroPagina = 1;

			$('#paginas').fadeOut('fast', function(){
                $(this).text(' página 1 de 12 ').fadeIn('fast');
            });


		$('#segunda-pagina').css('display', 'none');
		$('#terceira-pagina').css('display', 'none');
		$('#quarta-pagina').css('display', 'none');
		$('#quinta-pagina').css('display', 'none');
		$('#sexta-pagina').css('display', 'none');
		$('#setima-pagina').css('display', 'none');
		$('#oitava-pagina').css('display', 'none');
		$('#nona-pagina').css('display', 'none');
		$('#decima-pagina').css('display', 'none');
		$('#decima-primeira-pagina').css('display', 'none');
		$('#decima-segunda-pagina').css('display', 'none');

		function setNumeroPaginas(){
			if(paginaRegulamento == 'primeira-pagina'){
				numeroPagina = 1;
			} else if(paginaRegulamento == 'segunda-pagina'){
				numeroPagina = 2;
			} else if(paginaRegulamento == 'terceira-pagina'){
				numeroPagina = 3;
			} else if(paginaRegulamento == 'quarta-pagina'){
				numeroPagina = 4;
			} else if(paginaRegulamento == 'quinta-pagina'){
				numeroPagina = 5;
			} else if(paginaRegulamento == 'sexta-pagina'){
				numeroPagina = 6;
			} else if(paginaRegulamento == 'setima-pagina'){
				numeroPagina = 7;
			} else if(paginaRegulamento == 'oitava-pagina'){
				numeroPagina = 8;
			} else if(paginaRegulamento == 'nona-pagina'){
				numeroPagina = 9;
			} else if(paginaRegulamento == 'decima-pagina'){
				numeroPagina = 10;
			} else if(paginaRegulamento == 'decima-primeira-pagina'){
				numeroPagina = 11;
			} else if(paginaRegulamento == 'decima-segunda-pagina'){
				numeroPagina = 12;
			}

			$('#paginas').fadeOut('fast', function(){
                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
            });
		}
			/////////--//////////--/////////--/////////--////////
		
		$("#popup-regulamento #pagina-anterior").click(function(event) {

			if(paginaRegulamento == 'segunda-pagina'){
				$('#segunda-pagina').fadeOut('normal', function() {
					$('#primeira-pagina').css('display', 'block').hide();
					$('#primeira-pagina').fadeIn('normal');
					paginaRegulamento = 'primeira-pagina';
					numeroPagina = 1;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'terceira-pagina'){
				$('#terceira-pagina').fadeOut('normal', function() {
					$('#segunda-pagina').css('display', 'block').hide();
					$('#segunda-pagina').fadeIn('normal');
					paginaRegulamento = 'segunda-pagina';
					numeroPagina = 2;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
		        });
			} else if(paginaRegulamento == 'quarta-pagina'){
				$('#quarta-pagina').fadeOut('normal', function() {
					$('#terceira-pagina').css('display', 'block').hide();
					$('#terceira-pagina').fadeIn('normal');
					paginaRegulamento = 'terceira-pagina';
					numeroPagina = 3;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'quinta-pagina'){
				$('#quinta-pagina').fadeOut('normal', function() {
					$('#quarta-pagina').css('display', 'block').hide();
					$('#quarta-pagina').fadeIn('normal');
					paginaRegulamento = 'quarta-pagina';
					numeroPagina = 4;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'sexta-pagina'){
				$('#sexta-pagina').fadeOut('normal', function() {
					$('#quinta-pagina').css('display', 'block').hide();
					$('#quinta-pagina').fadeIn('normal');
					paginaRegulamento = 'quinta-pagina';
					numeroPagina = 5;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'setima-pagina'){
				$('#setima-pagina').fadeOut('normal', function() {
					$('#sexta-pagina').css('display', 'block').hide();
					$('#sexta-pagina').fadeIn('normal');
					paginaRegulamento = 'sexta-pagina';
					numeroPagina = 6;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'oitava-pagina'){
				$('#oitava-pagina').fadeOut('normal', function() {
					$('#setima-pagina').css('display', 'block').hide();
					$('#setima-pagina').fadeIn('normal');
					paginaRegulamento = 'setima-pagina';
					numeroPagina = 7;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'nona-pagina'){
				$('#nona-pagina').fadeOut('normal', function() {
					$('#oitava-pagina').css('display', 'block').hide();
					$('#oitava-pagina').fadeIn('normal');
					paginaRegulamento = 'oitava-pagina';
					numeroPagina = 8;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'decima-pagina'){
				$('#decima-pagina').fadeOut('normal', function() {
					$('#nona-pagina').css('display', 'block').hide();
					$('#nona-pagina').fadeIn('normal');
					paginaRegulamento = 'nona-pagina';
					numeroPagina = 9;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'decima-primeira-pagina'){
				$('#decima-primeira-pagina').fadeOut('normal', function() {
					$('#decima-pagina').css('display', 'block').hide();
					$('#decima-pagina').fadeIn('normal');
					paginaRegulamento = 'decima-pagina';
					numeroPagina = 10;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'decima-segunda-pagina'){
				$('#decima-segunda-pagina').fadeOut('normal', function() {
					$('#decima-primeira-pagina').css('display', 'block').hide();
					$('#decima-primeira-pagina').fadeIn('normal');
					paginaRegulamento = 'decima-primeira-pagina';
					numeroPagina = 11;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			}
		});
		////-////-////-////-////-////-////-////-////-////-////-////-////-////-////

		$("#popup-regulamento #proxima-pagina").click(function(event) {


			if(paginaRegulamento == 'primeira-pagina'){
				$('#primeira-pagina').fadeOut('normal', function() {
					$('#segunda-pagina').css('display', 'block').hide();
					$('#segunda-pagina').fadeIn('normal');
					paginaRegulamento = 'segunda-pagina';
					numeroPagina = 2;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'segunda-pagina'){
				$('#segunda-pagina').fadeOut('normal', function() {
					$('#terceira-pagina').css('display', 'block').hide();
					$('#terceira-pagina').fadeIn('normal');
					paginaRegulamento = 'terceira-pagina';
					numeroPagina = 3;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'terceira-pagina'){
				$('#terceira-pagina').fadeOut('normal', function() {
					$('#quarta-pagina').css('display', 'block').hide();
					$('#quarta-pagina').fadeIn('normal');
					paginaRegulamento = 'quarta-pagina';
					numeroPagina = 4;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'quarta-pagina'){
				$('#quarta-pagina').fadeOut('normal', function() {
					$('#quinta-pagina').css('display', 'block').hide();
					$('#quinta-pagina').fadeIn('normal');
					paginaRegulamento = 'quinta-pagina';
					numeroPagina = 5;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'quinta-pagina'){
				$('#quinta-pagina').fadeOut('normal', function() {
					$('#sexta-pagina').css('display', 'block').hide();
					$('#sexta-pagina').fadeIn('normal');
					paginaRegulamento = 'sexta-pagina';
					numeroPagina = 6;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'sexta-pagina'){
				$('#sexta-pagina').fadeOut('normal', function() {
					$('#setima-pagina').css('display', 'block').hide();
					$('#setima-pagina').fadeIn('normal');
					paginaRegulamento = 'setima-pagina';
					numeroPagina = 7;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'setima-pagina'){
				$('#setima-pagina').fadeOut('normal', function() {
					$('#oitava-pagina').css('display', 'block').hide();
					$('#oitava-pagina').fadeIn('normal');
					paginaRegulamento = 'oitava-pagina';
					numeroPagina = 8;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'oitava-pagina'){
				$('#oitava-pagina').fadeOut('normal', function() {
					$('#nona-pagina').css('display', 'block').hide();
					$('#nona-pagina').fadeIn('normal');
					paginaRegulamento = 'nona-pagina';
					numeroPagina = 9;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'nona-pagina'){
				$('#nona-pagina').fadeOut('normal', function() {
					$('#decima-pagina').css('display', 'block').hide();
					$('#decima-pagina').fadeIn('normal');
					paginaRegulamento = 'decima-pagina';
					numeroPagina = 10;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'decima-pagina'){
				$('#decima-pagina').fadeOut('normal', function() {
					$('#decima-primeira-pagina').css('display', 'block').hide();
					$('#decima-primeira-pagina').fadeIn('normal');
					paginaRegulamento = 'decima-primeira-pagina';
					numeroPagina = 11;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			} else if(paginaRegulamento == 'decima-primeira-pagina'){
				$('#decima-primeira-pagina').fadeOut('normal', function() {
					$('#decima-segunda-pagina').css('display', 'block').hide();
					$('#decima-segunda-pagina').fadeIn('normal');
					paginaRegulamento = 'decima-segunda-pagina';
					numeroPagina = 12;
					$('#paginas').fadeOut('fast', function(){
		                $(this).text(' página ' + numeroPagina + ' de 12 ').fadeIn('fast');
		            });
				});
			}
		});
	});