//WB2 2020/21 - Matilde Ferreira - P2 - 365 MOVIES - SCRIPT

//-- BOTÕES -- ÍNICIO --
$(function () {
	$("#formdate").datepicker({
		dateFormat: 'yy-mm-dd'
	});
	$("#dateedit").datepicker({
		dateFormat: 'yy-mm-dd'
	});
});

//variavéis para o Local Storage
let MoviesWatched;
let MoviesToSee;
let Usernames;
let newMovie;
let newMovieTS;

//-- BOTÕES -- ÍNICIO --
//Botão login
$('#login').on('click', function () {

	//ler a string existente de usernames
	Usernames = localStorage.getItem('StringUsernames');
	//novo username
	let newUsername = $('#username').val();

	//se já existir usernames no array
	if (Usernames != null) {
		//converter a string em array
		Usernames = JSON.parse(Usernames);

		//verificar se já existe o username inserido
		let repeated = Usernames.filter(function (a) {
			return a.myUsername == newUsername;
		}).length;

		//se ainda não existir, guardar novo username
		if (!repeated) {
			Usernames.push({
				"myUsername": newUsername
			});
			localStorage.setItem('StringUsernames', JSON.stringify(Usernames));

			//se for repetido, não guardar nada
		} else {}

		//se não existir usernames no array
	} else {
		//criar array
		 Usernames = [{
			"myUsername": newUsername
        }];
		//transformar o array em string
		localStorage.setItem('StringUsernames', JSON.stringify(Usernames));
	}

	//ir para a página "watched"
	document.location.href = "watched.html";

});

//Botões menu
$("#bstatics").click(function () {
	document.location.href = "statistics.html";
});

$("#bwatched").click(function () {
	document.location.href = "watched.html";
});

$("#bto-see").click(function () {
	document.location.href = "to-see.html";
});

//-- BOTÕES -- FIM --

//PÁGINA WATCHED - INICIO
// no load da página verifica se já existem filmes guardados
$(function () {
	// verifica o local storage
	MoviesWatched = localStorage.getItem("StringMoviesWatched");
	//se já houver filmes
	if (MoviesWatched != null) {
		// converte os dados de TEXTO em JSON para objeto JS na memória
		MoviesWatched = JSON.parse(MoviesWatched);

		$.each(MoviesWatched, function (index, value) {
			let removeyear = value.newMovie.date.substring(5, value.newMovie.date.length);
			($("<ol/>", {
				"class": "allbeforeafter"
			})).appendTo(".allmovies").append($("<ol/>", {
				"class": "before"
			}).append($("<li> Edit </li>"))).append($("<ol/>", {
				"class": "all"
			}).append($('<ol/>', {
				"class": "list"
			}).append("<li class='watcheddate'>" + value.newMovie.date + "</li>").append("<li class='watcheddateMB'>" + removeyear + "</li>").append("<li class='watchedtitle'>" + value.newMovie.title + "</li>").append("<li class='watchedreview'>" + value.newMovie.review + "</li>")).append($('<ol/>', {
				"class": "extra"
			}).append($('<ol/>', {
				"class": "firstextra"
			}).append("<li class='year'>Year</li>").append("<li class='director'>Director</li>").append("<li class='genre'>Genre</li>").append("<li class='platform'>Watched in</li>")).append($('<ol/>', {
				"class": "listextra"
			}).append("<li class='watchedyear'>" + value.newMovie.year + "</li>").append("<li class='watcheddirector'>" + value.newMovie.director + "</li>").append("<li class='watchedgenre'>" + value.newMovie.genre + "</li>").append("<li class='watchedplatform'>" + value.newMovie.platform + "</li>")))).append($("<ol/>", {
				"class": "after"
			}).append($("<li> DELETE </li>")));
		});


	} else {

	}
});

////Revelar mais informação do filme visto
$(document).on('click', '.all', function (e) {
	$(this).find(".extra").slideToggle(0);
});

//---MENU ADICIONAR FILME VISTO -- INICIO

//revelar menu de adicionar filme
$("#addwatched").click(function () {
	//menu aparece
	$("#formaddwatched").fadeIn(0);
	//botão de adicionar filmes desaparece
	$(this).fadeOut(0);
});

//Sistema de Review -> Estrelas
$("#cinco").click(function () {
	//Quando é clicada passa a ter a class de starfull
	$(this).removeClass('starempty');
	$(this).addClass('starfull');

	//Estrelas anteriores são tambêm preenchidas
	$('#quatro').removeClass('starempty');
	$('#quatro').addClass('starfull');

	$('#tres').removeClass('starempty');
	$('#tres').addClass('starfull');

	$('#dois').removeClass('starempty');
	$('#dois').addClass('starfull');

	$('#um').removeClass('starempty');
	$('#um').addClass('starfull');

	//Preenchimento das classes
	$(".starfull").text('★');
	$(".starempty").text('☆');
});

$("#quatro").click(function () {
	//Quando é clicada passa a ter a class de starfull
	$(this).removeClass('starempty');
	$(this).addClass('starfull');

	//Estrelas posteriores deixam de estar preenchidas
	$('#cinco').addClass('starempty');
	$('#cinco').removeClass('starfull');

	//Estrelas anteriores são tambêm preenchidas
	$('#tres').removeClass('starempty');
	$('#tres').addClass('starfull');

	$('#dois').removeClass('starempty');
	$('#dois').addClass('starfull');

	$('#um').removeClass('starempty');
	$('#um').addClass('starfull');

	//Preenchimento das classes
	$(".starfull").text('★');
	$(".starempty").text('☆');
});

$("#tres").click(function () {
	//Quando é clicada passa a ter a class de starfull
	$(this).removeClass('starempty');
	$(this).addClass('starfull');

	//Estrelas posteriores deixam de estar preenchidas
	$('#cinco').addClass('starempty');
	$('#cinco').removeClass('starfull');

	$('#quatro').addClass('starempty');
	$('#quatro').removeClass('starfull');

	//Estrelas anteriores são tambêm preenchidas
	$('#dois').removeClass('starempty');
	$('#dois').addClass('starfull');

	$('#um').removeClass('starempty');
	$('#um').addClass('starfull');

	//Preenchimento das classes
	$(".starfull").text('★');
	$(".starempty").text('☆');
});

$("#dois").click(function () {
	//Quando é clicada passa a ter a class de starfull
	$(this).removeClass('starempty');
	$(this).addClass('starfull');

	//Estrelas posteriores deixam de estar preenchidas
	$('#cinco').addClass('starempty');
	$('#cinco').removeClass('starfull');

	$('#quatro').addClass('starempty');
	$('#quatro').removeClass('starfull');

	$('#tres').addClass('starempty');
	$('#tres').removeClass('starfull');

	//Estrelas anteriores são tambêm preenchidas
	$('#um').removeClass('starempty');
	$('#um').addClass('starfull');

	//Preenchimento das classes
	$(".starfull").text('★');
	$(".starempty").text('☆');
});

$("#um").click(function () {
	//Quando é clicada passa a ter a class de starfull
	$(this).removeClass('starempty');
	$(this).addClass('starfull');

	//Estrelas posteriores deixam de estar preenchidas
	$('#cinco').addClass('starempty');
	$('#cinco').removeClass('starfull');

	$('#quatro').addClass('starempty');
	$('#quatro').removeClass('starfull');

	$('#tres').addClass('starempty');
	$('#tres').removeClass('starfull');

	$('#dois').addClass('starempty');
	$('#dois').removeClass('starfull');

	//Preenchimento das classes
	$(".starfull").text('★');
	$(".starempty").text('☆');
});


//Clicar no botão de inserir filme novo
$("#donewatched").click(function () {

	//Variáveis do input 
	let date = $('#formdate').val();
	let title = $('#formtitle').val();
	let platform = $('#formplatform').val();
	let stars = $("p.stars").text();
	let review = $('#um').hasClass('starfull');


	//data sem ano para mobile
	let removeyear = date.substring(5, date.length);

	//se todos os parametros forem respondidos
	if (date != "" && title != "" && platform != "" && review != false) {

		//API omdB ->ir buscar o ano, o director e o género do filme
		let url = "https://www.omdbapi.com/?t=" + title + "&apikey=abeb758c";
		$.getJSON(url,
			function (json) {

				//se o filme for encontrado pela API
				if (json.Title != undefined) {

					//ler a string existente de filmes
					MoviesWatched = localStorage.getItem('StringMoviesWatched');

					//dados novo filme
					const TitleSave = json.Title;
					const YearSave = json.Year;
					const DirectorSave = json.Director;
					const GenreSave = json.Genre;

					//se já houver filmes no array
					if (MoviesWatched != null) {

						//converter a string em array
						MoviesWatched = JSON.parse(MoviesWatched);

						//acrescentar filme novo
						MoviesWatched.push({
							"newMovie": {
								date: date,
								title: TitleSave,
								review: stars,
								year: YearSave,
								director: DirectorSave,
								genre: GenreSave,
								platform: platform
							}
						});

						localStorage.setItem('StringMoviesWatched', JSON.stringify(MoviesWatched));


					} else {
						//criar array
						let MoviesWatched = [{
							"newMovie": {
								date: date,
								title: TitleSave,
								review: stars,
								year: YearSave,
								director: DirectorSave,
								genre: GenreSave,
								platform: platform
							}
					}];
						localStorage.setItem('StringMoviesWatched', JSON.stringify(MoviesWatched));
					}



					//Append estrutura + dados novos do input/da api
					($("<ol/>", {
						"class": "allbeforeafter"
					})).appendTo(".allmovies").append($("<ol/>", {
						"class": "before"
					}).append($("<li> Edit </li>"))).append($("<ol/>", {
						"class": "all"
					}).append($('<ol/>', {
						"class": "list"
					}).append("<li class='watcheddate'>" + date + "</li>").append("<li class='watcheddateMB'>" + removeyear + "</li>").append("<li class='watchedtitle'>" + json.Title + "</li>").append("<li class='watchedreview'>" + stars + "</li>")).append($('<ol/>', {
						"class": "extra"
					}).append($('<ol/>', {
						"class": "firstextra"
					}).append("<li class='year'>Year</li>").append("<li class='director'>Director</li>").append("<li class='genre'>Genre</li>").append("<li class='platform'>Watched in</li>")).append($('<ol/>', {
						"class": "listextra"
					}).append("<li class='watchedyear'>" + json.Year + "</li>").append("<li class='watcheddirector'>" + json.Director + "</li>").append("<li class='watchedgenre'>" + json.Genre + "</li>").append("<li class='watchedplatform'>" + platform + "</li>")))).append($("<ol/>", {
						"class": "after"
					}).append($("<li> DELETE </li>")));

					//menu adicionar filme desaparece
					$("#formaddwatched").fadeOut(50);
					//botão adicionar filme aparece
					$("#addwatched").fadeIn(50);

					//Restart dos avisos
					$("#warning").fadeOut(0);
					$("#notfound").fadeOut(0);

					//restart input
					$('#formdate').val('');
					$('#formtitle').val('');
					$('#formplatform').val('');

					//restart estrelas
					$('#um').removeClass('starfull');
					$('#um').addClass('starempty');
					$('#dois').removeClass('starfull');
					$('#dois').addClass('starempty');
					$('#tres').removeClass('starfull');
					$('#tres').addClass('starempty');
					$('#quatro').removeClass('starfull');
					$('#quatro').addClass('starempty');
					$('#cinco').removeClass('starfull');
					$('#cinco').addClass('starempty');
					$(".starempty").text('☆');

				}
				//se o filme não for encontrado
				else {
					//Aviso de parametros desaparece
					$("#warning").fadeOut(0);
					//Surge aviso de filme não encontrado
					$("#notfound").fadeIn(100).fadeOut(200).fadeIn(200);
				}

			});

		//se nem todos os parametros forem respondidos aviso
	} else {
		//Aviso de filme não encontrado desaparece
		$("#notfound").fadeOut(0);
		//Surge aviso de nem todos os parametros terem sido respondidos
		$("#warning").fadeIn(100).fadeOut(200).fadeIn(200);
	}

});

//fechar menu de adicionar filmes
$("#close").click(function () {
	$("#formaddwatched").fadeOut(50);
	$("#addwatched").fadeIn(50);
	$("#warning").fadeOut(0);
	$("#notfound").fadeOut(0);


	//restart dos inputs
	$('#formdate').val('');
	$('#formtitle').val('');
	$('#formplatform').val('');

	//restart estrelas
	$('#um').removeClass('starfull');
	$('#um').addClass('starempty');
	$('#dois').removeClass('starfull');
	$('#dois').addClass('starempty');
	$('#tres').removeClass('starfull');
	$('#tres').addClass('starempty');
	$('#quatro').removeClass('starfull');
	$('#quatro').addClass('starempty');
	$('#cinco').removeClass('starfull');
	$('#cinco').addClass('starempty');
	$(".starempty").text('☆');

});
//---MENU ADICIONAR FILME VISTO -- FIM

//EDITAR FILMES PÁGINA WATCHED

//---MENU EDITAR FILME VISTO-- INICIO
//Sistema de Review -> Estrelas

$("#cincoedit").click(function () {
	//Quando é clicada passa a ter a class de starfull
	$(this).removeClass('starempty');
	$(this).addClass('starfull');

	//Estrelas anteriores são tambêm preenchidas
	$('#quatroedit').removeClass('starempty');
	$('#quatroedit').addClass('starfull');

	$('#tresedit').removeClass('starempty');
	$('#tresedit').addClass('starfull');

	$('#doisedit').removeClass('starempty');
	$('#doisedit').addClass('starfull');

	$('#umedit').removeClass('starempty');
	$('#umedit').addClass('starfull');

	//Preenchimento das classes
	$(".starfull").text('★');
	$(".starempty").text('☆');
});

$("#quatroedit").click(function () {
	//Quando é clicada passa a ter a class de starfull
	$(this).removeClass('starempty');
	$(this).addClass('starfull');

	//Estrelas posteriores deixam de estar preenchidas
	$('#cincoedit').addClass('starempty');
	$('#cincoedit').removeClass('starfull');

	//Estrelas anteriores são tambêm preenchidas
	$('#tresedit').removeClass('starempty');
	$('#tresedit').addClass('starfull');

	$('#doisedit').removeClass('starempty');
	$('#doisedit').addClass('starfull');

	$('#umedit').removeClass('starempty');
	$('#umedit').addClass('starfull');

	//Preenchimento das classes
	$(".starfull").text('★');
	$(".starempty").text('☆');
});

$("#tresedit").click(function () {
	//Quando é clicada passa a ter a class de starfull
	$(this).removeClass('starempty');
	$(this).addClass('starfull');

	//Estrelas posteriores deixam de estar preenchidas
	$('#cincoedit').addClass('starempty');
	$('#cincoedit').removeClass('starfull');

	$('#quatroedit').addClass('starempty');
	$('#quatroedit').removeClass('starfull');

	//Estrelas anteriores são tambêm preenchidas
	$('#doisedit').removeClass('starempty');
	$('#doisedit').addClass('starfull');

	$('#umedit').removeClass('starempty');
	$('#umedit').addClass('starfull');

	//Preenchimento das classes
	$(".starfull").text('★');
	$(".starempty").text('☆');
});

$("#doisedit").click(function () {
	//Quando é clicada passa a ter a class de starfull
	$(this).removeClass('starempty');
	$(this).addClass('starfull');

	//Estrelas posteriores deixam de estar preenchidas
	$('#cincoedit').addClass('starempty');
	$('#cincoedit').removeClass('starfull');

	$('#quatroedit').addClass('starempty');
	$('#quatroedit').removeClass('starfull');

	$('#tresedit').addClass('starempty');
	$('#tresedit').removeClass('starfull');

	//Estrelas anteriores são tambêm preenchidas
	$('#umedit').removeClass('starempty');
	$('#umedit').addClass('starfull');

	//Preenchimento das classes
	$(".starfull").text('★');
	$(".starempty").text('☆');
});

$("#umedit").click(function () {
	//Quando é clicada passa a ter a class de starfull
	$(this).removeClass('starempty');
	$(this).addClass('starfull');

	//Estrelas posteriores deixam de estar preenchidas
	$('#cincoedit').addClass('starempty');
	$('#cincoedit').removeClass('starfull');

	$('#quatroedit').addClass('starempty');
	$('#quatroedit').removeClass('starfull');

	$('#tresedit').addClass('starempty');
	$('#tresedit').removeClass('starfull');

	$('#doisedit').addClass('starempty');
	$('#doisedit').removeClass('starfull');

	//Preenchimento das classes
	$(".starfull").text('★');
	$(".starempty").text('☆');
});

//SLIDE RIGHT->EDITAR
//SLIDE LEFT ->REMOVER

//Posição do click
let pos = 0;
//Quando se clica no filme
$(document).on('touchstart mousedown', '.all', function (a) {
	//Filme clicado muda de classe
	$(this).addClass('allmoving');
	$(this).removeClass('all');

	//Posição da lista
	let offset = $(".allmoving").offset();

	//Update da posição do rato ou touch no momento do click, relativo à lista
	if (window.matchMedia("(pointer: coarse)").matches) {
		pos = a.changedTouches[0].pageX - offset.left;

	} else {
		pos = a.pageX - offset.left;
	}

	//Mecânica slide
	//Quando o rato se movimenta
	$(document).on('touchmove mousemove', '.allmoving', function (e) {
		//Esconder .extra dos filmes (informações extra)
		$(this).find(".extra").hide();

		//variável largura da lista
		let width = $(".allmoving").width();

		//variável metade da largura da lista
		let metade = parseInt(width / 2);

		//variável para a nova posição da lista, relativa à posição do rato, menos a posição original da lista, menos a posição do click
		let x;

		if (window.matchMedia("(pointer: coarse)").matches) {
			x = e.targetTouches[0].pageX - offset.left - pos;
		} else {
			x = e.pageX - offset.left - pos;
		}

		//variável da altura da lista em movimento
		let height = $(".allmoving").height();

		//se o slide for para a esquerda
		if (x => 0) {
			//caso se tenha feito slide right primeiro), apagar o after
			$(".after").css({
				width: '0px',
				height: '0px'
			});

			//largura total da lista é igual a 100% mais largura do before (100% mais x)
			$(this).parent().css({
				width: 'calc(100% + ' + x + 'px)',
				overflow: 'hidden'
			});

			//largura da lista em movimento é igual a largura da lista estática (inicial)
			$('.allmoving').css({
				width: width
			});

			//o before tem largura igual x e altura igual à altura do filme
			$(this).siblings(".before").css({
				width: x + 'px',
				height: height + 'px'
			});

			//Se o before já tiver 40px, mostrar o seu filho (li) "Edit"
			if ($(this).siblings(".before").width() >= 40) {
				$(this).siblings(".before").children().css({
					display: "block"
				});
				//Se o before tiver menos de 40px, esconder o filho
			} else {
				$(this).siblings(".before").children().css({
					display: "none"
				});
			}

			//Quando a lista chega à sua metade
			if (x >= metade) {
				//a sua width volta a ser 100%
				$(this).parent().css({
					width: '100%'
				});

				//o before deixa de ser vísivel
				$(".before").css({
					width: '0px'
				});
				$(".before").children().css({
					display: "none"
				});
				//surge o formulário de edição
				$("#formeditwatched").fadeIn(0);

				//botão de adicionar filmes desaparece
				$("#addwatched").fadeOut(0);

				editWatched();

			}
		}


		//se o slide for para a direita
		if (x <= 0) {
			//caso se tenha feito slide left primeiro, apagar o before
			$(".before").css({
				width: '0px',
				height: '0px'
			});

			//largura total da lista é igual a 100% mais largura do before (100% mais x)
			$(this).parent().css({
				width: 'calc(100% + ' + -x + 'px)'
			});

			//largura da lista em movimento é igual a largura da lista estática (inicial)
			$('.allmoving').css({
				width: width,
				left: x + 'px'
			});

			//o after tem largura igual x e altura igual à altura do filme
			$(this).siblings(".after").css({
				width: x + 'px',
				height: height + 'px'
			});

			//Se o after já tiver 50px, mostrar o seu filho (li) "Edit"
			if (-x >= 50) {
				$(this).siblings(".after").children().css({
					display: "block"
				});
				//Se o before tiver menos de 40px, esconder o filho
			} else {
				$(this).siblings(".after").children().css({
					display: "none"
				});
			}

			$(".after").css({
				left: x,
				width: -x + 'px'
			});

			if (-x >= metade) {
				let titleremoved = $(".allmoving").find(".watchedtitle").text();

				$(".allmoving").remove();

				//after desaparece
				$(".after").css({
					width: '0px',
					height: '0px'
				});
				$(".after").children().css({
					display: 'none'
				});


				//atualizar local storage
				MoviesWatched = localStorage.getItem("StringMoviesWatched");

				MoviesWatched = JSON.parse(MoviesWatched);

				let index;

				MoviesWatched.some(function (value, i) {
					if (value.newMovie.title == titleremoved) {
						index = i;

						//remover filme
						MoviesWatched.splice(index, 1);
						localStorage.setItem('StringMoviesWatched', JSON.stringify(MoviesWatched));

					}
				});
			}
		}
	});
});

function editWatched() {

	//objeto com estrutura original do filme
	let editedmovie = {
		title: $(".allmoving").find(".watchedtitle"),
		date: $(".allmoving").find(".watcheddate"),
		review: $(".allmoving").find(".watchedreview"),
		year: $(".allmoving").find(".watchedyear"),
		director: $(".allmoving").find(".watcheddirector"),
		genre: $(".allmoving").find(".watchedgenre"),
		platform: $(".allmoving").find(".watchedplatform")
	};

	//Valores iniciais do formulário são os valores do filme original
	$('#dateedit').val(editedmovie.date.text());
	$('#titleedit').val(editedmovie.title.text());
	$('#platformedit').val(editedmovie.platform.text());

	//Ao clicar no botão adicionar filme visto
	$("#doneeditwatched").one('click', function () {

		//verificar se pelo menos uma estrela foi preenchida
		let reviewedit = $('#umedit').hasClass('starfull');

		//novo input estrelas
		let starsedit = $("p.starsedit").text();

		//se todos os parametros forem respondidos
		if ($('#dateedit').val() != "" && $('#titleedit').val() != "" && $('#platformedit').val() != "" && reviewedit != false) {


			//API omdB ->ir buscar o ano, o director e o género do filme
			let url = "https://www.omdbapi.com/?t=" + $('#titleedit').val() + "&apikey=abeb758c";
			$.getJSON(url,
				function (json) {

					//se o filme for encontrado pela API
					if (json.Title != undefined) {


						//atualizar local storage
						MoviesWatched = localStorage.getItem("StringMoviesWatched");

						MoviesWatched = JSON.parse(MoviesWatched);

						let index;
						MoviesWatched.some(function (value, i) {
							if (value.newMovie.title == editedmovie.title.text()) {

								newMovie = {
									"newMovie": {
										date: $('#dateedit').val(),
										title: json.Title,
										review: starsedit,
										year: json.Year,
										director: json.Director,
										genre: json.Genre,
										platform: $('#platformedit').val()
									}
								};

								index = i;

								//remover filme
								MoviesWatched.splice(index, 1);

								//filme edita no lugar de antes de ser editado
								MoviesWatched.splice(index, 1, newMovie);

								localStorage.setItem('StringMoviesWatched', JSON.stringify(MoviesWatched));

							}
						});



						//preencher o filme com os novos valores
						editedmovie.title.text(json.Title);
						editedmovie.date.text($('#dateedit').val());
						editedmovie.review.text(starsedit);
						editedmovie.year.text(json.Year);
						editedmovie.director.text(json.Director);
						editedmovie.genre.text(json.Genre);
						editedmovie.platform.text($('#platformedit').val());

						//Menu desaparece
						$("#formeditwatched").fadeOut(50);
						//Botão adicionar filme surge
						$("#addwatched").fadeIn(50);

						//Restart dos avisos 
						$("#warningedit").fadeOut(0);
						$("#notfoundedit").fadeOut(0);

						//restart estrelas
						$('#umedit').removeClass('starfull');
						$('#umedit').addClass('starempty');
						$('#doisedit').removeClass('starfull');
						$('#doisedit').addClass('starempty');
						$('#tresedit').removeClass('starfull');
						$('#tresedit').addClass('starempty');
						$('#quatroedit').removeClass('starfull');
						$('#quatroedit').addClass('starempty');
						$('#cincoedit').removeClass('starfull');
						$('#cincoedit').addClass('starempty');
						$(".starempty").text('☆');



						//se o filme não for encontrado
					} else {
						//Aviso dos parametros desaparece
						$("#warningedit").fadeOut(0);
						//Surge aviso de filme não encontrado
						$("#notfoundedit").fadeIn(100).fadeOut(200).fadeIn(200);
					}
				});

			//se nem todos os parametros forem respondidos aviso
		} else {
			//Aviso de filme não encontrado desaparece
			$("#notfoundedit").fadeOut(0);
			//Surge aviso de paramentros não respondidos
			$("#warningedit").fadeIn(100).fadeOut(200).fadeIn(200);
		}

	});
}

//Quando o rato é leventado
$(document).on('mouseup touchend', function () {

	//Filme em movimento volta a ser estático
	$('.allmoving').addClass('all');
	$('.allmoving').removeClass('allmoving');

	//Restart da posição
	pos = 0;

	//Restart da css inicial
	$('.all').css({
		width: '100%',
		left: '0px'
	});
	$(".allbeforeafter").css({
		width: '100%'
	});

	$(".before").css({
		width: '0px',
		height: '0px'
	});

	$(".after").css({
		width: '0px',
		height: '0px'
	});


	$(".before").children().css({
		display: 'none'
	});

	$(".after").children().css({
		display: 'none'
	});


});

//fechar menu de editar filmes
$("#editclose").click(function () {
	//menu desaparece
	$("#formeditwatched").fadeOut(50);
	//aparece botão de adicionar filmes
	$("#addwatched").fadeIn(50);

	//aviso de not found e de nem todos os parametros estarem respondidos desaparecem (para quando se edita outro, não estarem logo vísiveis)
	$("#notfoundedit").fadeOut(0);
	$("#warningedit").fadeOut(0);
});

//---MENU EDITAR FILME VISTO-- FIM

//PÁGINA WATCHED - FIM


//PÁGINA TO-SEEE - INICIO
// no load da página verifica se já existem filmes guardados
$(function () {
	// verifica o local storage
	MoviesToSee = localStorage.getItem("StringMoviesToSee");
	//se já houver filmes
	if (MoviesToSee != null) {
		// converte os dados de TEXTO em JSON para objeto JS na memória
		MoviesToSee = JSON.parse(MoviesToSee);

		$.each(MoviesToSee, function (index, value) {

			$("<ol/>", {
				"class": "beforeafteralltoseelist"
			}).appendTo("#alltoseelist").append("<ol class= 'beforetosee'><li>EDIT</li></ol>").append($("<ol/>", {
				"class": "toseelist"
			}).append("<li class='toseetitle'>" + value.newMovieTS.title + "</li>").append("<li class='toseeyear'>" + value.newMovieTS.year + "</li>").append("<li class='toseegenre'>" + value.newMovieTS.genre + "</li>")).append("<ol class= 'aftertosee'><li>DELETE</li></ol>");
		});

	} else {

	}
});

//---MENU ADICIONAR FILME PARA VER -- INICIO

//revelar menu de adicionar filme para ver
$("#addtosee").click(function () {
	//menu aparece
	$("#formaddtosee").fadeIn(0);
	//botão de adicionar desaparece
	$(this).fadeOut(0);
});

//inserir filme para ver novo
$("#donetosee").click(function () {

	//adicionar valor 
	let title = $('#formtitletosee').val();

	//se o parametro titulo for respondido
	if (title != "") {

		//API omdB ->ir buscar o ano e o género através do título
		let url = "https://www.omdbapi.com/?t=" + title + "&apikey=abeb758c";
		$.getJSON(url,
			function (json) {

				//se o título do filme for encotrado
				if (json.Title != undefined) {

					//ler a string existente de filmes
					MoviesToSee = localStorage.getItem('StringMoviesToSee');

					//dados novo filme
					const TitleSaveTS = json.Title;
					const YearSaveTS = json.Year;
					const GenreSaveTS = json.Genre;

					//se já houver filmes no array
					if (MoviesToSee != null) {

						//converter a string em array
						MoviesToSee = JSON.parse(MoviesToSee);

						//acrescentar filme novo
						MoviesToSee.push({
							"newMovieTS": {
								title: TitleSaveTS,
								year: YearSaveTS,
								genre: GenreSaveTS,

							}
						});

						localStorage.setItem('StringMoviesToSee', JSON.stringify(MoviesToSee));


					} else {
						//criar array
						let MoviesToSee = [{
							"newMovieTS": {
								title: TitleSaveTS,
								year: YearSaveTS,
								genre: GenreSaveTS,
							}
					}];
						localStorage.setItem('StringMoviesToSee', JSON.stringify(MoviesToSee));
					}


					$("<ol/>", {
						"class": "beforeafteralltoseelist"
					}).appendTo("#alltoseelist").append("<ol class= 'beforetosee'><li>EDIT</li></ol>").append($("<ol/>", {
						"class": "toseelist"
					}).append("<li class='toseetitle'>" + json.Title + "</li>").append("<li class='toseeyear'>" + json.Year + "</li>").append("<li class='toseegenre'>" + json.Genre + "</li>")).append("<ol class= 'aftertosee'><li>DELETE</li></ol>");

					$("#formaddtosee").fadeOut(50);
					$("#addtosee").fadeIn(50);
					$("#warningtosee").fadeOut(0);

					//restart dos input
					$('#formtitletosee').val('');

					//se o título do filme não for encontrado
				} else {
					$("#warningtosee").fadeOut(0);
					$("#notfoundtosee").fadeIn(100).fadeOut(200).fadeIn(200);
				}
			});


		//se nem todos os parametros forem respondidos aviso
	} else {
		$("#warningtosee").fadeIn(100).fadeOut(200).fadeIn(200);
		$("#notfoundtosee").fadeOut(0);
	}

});

//adicionar filme random à lista para ver
$("#random").click(function () {

	//Array com o id dos 50 filmes no topo dos ratings do imdb
	let random = ["0111161", "0068646", "0071562", "0468569", "0050083", "0108052", "0167260", "0110912", "0060196", "0120737", "0137523", "0109830", "1375666", "0167261", "0080684", "0133093", "0099685", "0073486", "0047478", "0114369", "0118799", "0317248", "0102926", "0038650", "0076759", "0120815", "0245429", "0120689", "0816692", "6751668", "0110413", "0114814", "0056058", "0110357", "0088763", "0253474", "0103064", "0120586", "0027977", "0054215", "0172495", "0021749", "0407887", "1675434", "2582802", "0482571", "0095327", "8503618", "0064116", "0034583"];

	//gerar random id do array
	function getRandom() {
		return random[Math.floor(Math.random() * random.length)];
	}

	//acrescentar o random id ao url da API
	let url = "https://www.omdbapi.com/?i=tt" + getRandom() + "&apikey=abeb758c";

	$.getJSON(url,
		function (json) {
			$('#formtitletosee').val(json.Title);
		});
});

//fechar menu de adicionar filmes para ver
$("#closetosee").click(function () {
	$("#formaddtosee").fadeOut(50);
	$("#addtosee").fadeIn(50);
	$("#warningtosee").fadeOut(0);
	$("#notfoundtosee").fadeOut(0);


	//restart dos inputs
	$('#formtitletosee').val('');
});

//---MENU ADICIONAR FILME PARA VER -- FIM

//---MENU EDITAR FILME PARA VER -- INICIO

//Posição do click
let postosee = 0;
//Quando se clica no filme
$(document).on('touchstart  mousedown', '.toseelist', function (a) {
	//Filme clicado muda de classe
	$(this).addClass('allmovingtosee');
	$(this).removeClass('toseelist');

	//Posição da lista
	let offsettosee = $(".allmovingtosee").offset();

	//Update da posição do rato no momento do click, relativo à lista
	if (window.matchMedia("(pointer: coarse)").matches) {
		postosee = a.targetTouches[0].pageX - offsettosee.left;
	} else {
		postosee = a.pageX - offsettosee.left;
	}


	//Mecânica slide
	//Quando o rato se movimenta
	$(document).on('touchmove mousemove', '.allmovingtosee', function (e) {
		//variável largura da lista
		let widthTS = $(".allmovingtosee").width();

		//variável metade da largura da lista
		let metadeTS = parseInt(widthTS / 2);

		//variável para a nova posição da lista, relativa à posição do rato, menos a posição original da lista, menos a posição do click
		let xTS;
		if (window.matchMedia("(pointer: coarse)").matches) {
			xTS = e.targetTouches[0].pageX - offsettosee.left - postosee;
		} else {
			xTS = e.pageX - offsettosee.left - postosee;
		}

		//variável da altura da lista em movimento
		let heightTS = $(".allmovingtosee").height();

		//se o slide for para a esquerda
		if (xTS >= 0) {

			//caso se tenha feito slide right primeiro), apagar o after
			$(".aftertosee").css({
				width: '0px',
				height: '0px'
			});

			//largura total da lista é igual a 100% mais largura do before (100% mais x)
			$(this).parent().css({
				width: 'calc(100% + ' + xTS + 'px)'
			});

			//largura da lista em movimento é igual a largura da lista estática (inicial)
			$('.allmovingtosee').css({
				width: widthTS
			});

			//o before tem largura igual x e altura igual à altura do filme
			$(this).siblings(".beforetosee").css({
				width: xTS + 'px',
				height: heightTS + 2 + 'px'
			});

			//Se o before já tiver 40px, mostrar o seu filho (li) "Edit"
			if ($(this).siblings(".beforetosee").width() >= 40) {
				$(this).siblings(".beforetosee").children().css({
					display: "block"
				});
				//Se o before tiver menos de 40px, esconder o filho
			} else {
				$(this).siblings(".beforetosee").children().css({
					display: "none"
				});
			}

			//Quando a lista chega à sua metade
			if (xTS >= metadeTS) {
				//a sua width volta a ser 100%
				$(this).parent().css({
					width: '100%'
				});

				//o before deixa de ser vísivel
				$(".beforetosee").css({
					width: '0px'
				});

				$(this).siblings(".beforetosee").children().css({
					display: "none"
				});

				//surge o formulário de edição
				$("#formedittosee").fadeIn(0);

				//botão de adicionar filmes desaparece
				$("#addtosee").fadeOut(0);

				editToSee();

			}
		}

		//se o slide for para a direita
		if (xTS <= 0) {
			//caso se tenha feito slide left primeiro, apagar o before
			$(".beforetosee").css({
				width: '0px',
				height: '0px'
			});

			//largura total da lista é igual a 100% mais largura do before (100% mais x)
			$(this).parent().css({
				width: 'calc(100% + ' + -xTS + 'px)'
			});

			//largura da lista em movimento é igual a largura da lista estática (inicial)
			$('.allmovingtosee').css({
				width: widthTS,
				left: xTS + 'px'
			});

			//o after tem largura igual x e altura igual à altura do filme
			$(this).siblings(".aftertosee").css({
				width: xTS + 'px',
				height: heightTS + 'px'
			});

			//Se o after já tiver 50px, mostrar o seu filho (li) "Edit"
			if (-xTS >= 50) {
				$(this).siblings(".aftertosee").children().css({
					display: "block"
				});
				//Se o before tiver menos de 40px, esconder o filho
			} else {
				$(this).siblings(".aftertosee").children().css({
					display: "none"
				});
			}

			$(".aftertosee").css({
				left: xTS,
				width: -xTS + 'px'
			});

			if (-xTS >= metadeTS) {
				let titleTSremoved = $(".allmovingtosee").find(".toseetitle").text();
				$(".allmovingtosee").remove();

				//after desaparece
				$(".aftertosee").css({
					width: '0px',
					height: '0px'
				});
				$(".aftertosee").children().css({
					display: 'none'
				});

				//atualizar local storage
				MoviesToSee = localStorage.getItem("StringMoviesToSee");

				MoviesToSee = JSON.parse(MoviesToSee);

				let index;

				MoviesToSee.some(function (value, i) {
					if (value.newMovieTS.title == titleTSremoved) {
						index = i;

						//remover filme
						MoviesToSee.splice(index, 1);
						localStorage.setItem('StringMoviesToSee', JSON.stringify(MoviesToSee));

					}
				});
			}
		}
	});
});

function editToSee() {
	//objeto com estrutura original do filme
	let editedmovieTS = {
		title: $(".allmovingtosee").find(".toseetitle"),
		year: $(".allmovingtosee").find(".toseeyear"),
		genre: $(".allmovingtosee").find(".toseegenre"),
	};

	//Valores iniciais do formulário são os valores do filme a ser editado
	$('#edittitletosee').val(editedmovieTS.title.text());

	//Ao clicar no botão adicionar filme visto
	$("#doneedittosee").one('click', function () {


		//se o titulo for respondidos
		if ($('#edittitletosee').val() != "") {

			//API omdB ->ir buscar o ano, o director e o género do filme
			let url = "https://www.omdbapi.com/?t=" + $('#edittitletosee').val() + "&apikey=abeb758c";
			$.getJSON(url,
				function (json) {
					//se o filme for encontrado pela API
					if (json.Title != undefined) {

						//atualizar local storage
						MoviesToSee = localStorage.getItem("StringMoviesToSee");

						MoviesToSee = JSON.parse(MoviesToSee);

						let index;
						MoviesToSee.some(function (value, i) {
							if (value.newMovieTS.title == editedmovieTS.title.text()) {

								newMovieTS = {
									"newMovieTS": {
										title: json.Title,
										year: json.Year,
										genre: json.Genre,
									}
								};

								index = i;

								//remover filme
								MoviesToSee.splice(index, 1);

								//filme edita no lugar de antes de ser editado
								MoviesToSee.splice(index, 1, newMovieTS);

								localStorage.setItem('StringMoviesToSee', JSON.stringify(MoviesToSee));

							}
						});

						//Preenchimento da estrutura inicial com o novo input
						editedmovieTS.title.text(json.Title);
						editedmovieTS.year.text(json.Year);
						editedmovieTS.genre.text(json.Genre);

						//Menu desaparece
						$("#formedittosee").fadeOut(50);
						//Botão adicionar filme surge
						$("#addtosee").fadeIn(50);

						//Restart dos avisos 
						$("#warningedittosee").fadeOut(0);
						$("#notfoundedittosee").fadeOut(0);



						//se o filme não for encontrado
					} else {
						//Aviso dos parametros desaparece
						$("#warningedittosee").fadeOut(0);
						//Surge aviso de filme não encontrado
						$("#notfoundedittosee").fadeIn(100).fadeOut(200).fadeIn(200);
					}
				});

			//se nem todos os parametros forem respondidos aviso
		} else {
			//Aviso de filme não encontrado desaparece
			$("#notfoundedittosee").fadeOut(0);
			//Surge aviso de paramentros não respondidos
			$("#warningedittosee").fadeIn(100).fadeOut(200).fadeIn(200);
		};

	});

}
//Quando o rato é leventado
$(document).on("touchend touchcancel mouseup", function () {

	//Filme em movimento volta a ser estático
	$('.allmovingtosee').addClass('toseelist');
	$('.allmovingtosee').removeClass('allmovingtosee');

	//Restart da posição
	postosee = 0;

	//Restart da css inicial
	$('.toseelist').css({
		width: '100%',
		left: '0px'
	});
	$(".beforeafteralltoseelist").css({
		width: '100%'
	});

	$(".beforetosee").css({
		width: '0px',
		height: '0px'
	});

	$(".aftertosee").css({
		width: '0px',
		height: '0px'
	});


	$(".beforetosee").children().css({
		display: 'none'
	});

	$(".aftertosee").children().css({
		display: 'none'
	});


});

//fechar menu de editar filmes
$("#closeedittosee").click(function () {
	//menu desaparece
	$("#formedittosee").fadeOut(50);
	//aparece botão de adicionar filmes
	$("#addtosee").fadeIn(50);

	//aviso de not found e de nem todos os parametros estarem respondidos desaparecem (para quando se edita outro, não estarem logo vísiveis)
	$("#notfoundedittosee").fadeOut(0);
	$("#warningedittosee").fadeOut(0);
});

//PÁGINA TO-SEEE - FIM

//---MENU EDITAR FILME PARA VER -- FIM

//PÁGINA STATICS - INICIO
//revelar learn more
$("#buttonlearnmore").click(function () {
	$("#learnmore").fadeIn(0);
});

//fechar menu learn more
$("#learnmoreclose").click(function () {
	$("#learnmore").fadeOut(0);
});

//PÁGINA STATICS - FIM
