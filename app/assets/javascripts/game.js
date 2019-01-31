$(document).ready(function () {
	console.log('game.js loaded ...');
	getGames()

});

function getGames() {
	$("button#js_index_games").on("click", function (e) {
		e.preventDefault();

		$.ajax({
			url: 'http://localhost:3000/games',
			method: 'get',
			dataType: 'json'
		}).done(function (response) {

			console.log("response: ", response);
			// debugger;

			let game = new Game(response[0])
			let gameHtmlData = game.gameHTML()
			$('div#main-display-div').html(gameHtmlData)

		})
		// $('div#main-display-div').text("You clicked this link!")
		// $('div#main-display-div').html('<p id="content">"You clicked this link!"</p>')
		// somelistener()
	})
}

function somelistener() {
	$('p#content').on('click', function (e) {
		e.preventDefault()

		console.log("now we clicked ");
	})
}

class Game {
	constructor(obj) {
		this.title = obj.title
		// this.title = obj.title
		// this.title = obj.title
		// this.title = obj.title
		// this.title = obj.title
	}
}

Game.prototype.gameHTML = function () {
	return (`
		<div>${this.title}</div>
	`)
}