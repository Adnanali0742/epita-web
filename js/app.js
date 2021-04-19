let cols = document.querySelectorAll(".col")

let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let c3 = document.querySelector('.c3');


let current_player = 1;

cols.forEach((col) => {
	col.onclick = (e) => {
		// Checked if the player can click on the cell
		if (e.target.innerHTML == "") {
			// Put the symbol in the col
			e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;

			// check the end of the game

			if ((a1 == "player" + current_player + ".a1") && (a2 == "player" + current_player + ".a2") && (a3 == "player" + current_player + ".a3") ||
				(b1 == "player" + current_player + ".b1") && (b2 == "player" + current_player + ".b2") && (b3 == "player" + current_player + ".b3") ||
				(c1 == "player" + current_player + ".c1") && (c2 == "player" + current_player + ".c2") && (c3 == "player" + current_player + ".c3") ||
				
				(a1 == "player" + current_player + ".a1") && (b1 == "player" + current_player + ".b1") && (c1 == "player" + current_player + ".c1") ||
				(a2 == "player" + current_player + ".a2") && (b2 == "player" + current_player + ".b2") && (c2 == "player" + current_player + ".c2") ||
				(a3 == "player" + current_player + ".a3") && (b3 == "player" + current_player + ".b3") && (c3 == "player" + current_player + ".c3") ||
				
				(a1 == "player" + current_player + ".a1") && (b2 == "player" + current_player + ".b2") && (c3 == "player" + current_player + ".c3") ||
				(a3 == "player" + current_player + ".a3") && (b2 == "player" + current_player + ".b2") && (c1 == "player" + current_player + ".c1")) {
				
				alert("won")
		

			// remove the active class from the current_player
			document.querySelector(".player"+current_player).classList.remove("active");

			// Switch the current_player after playing
			if (current_player == 1) {
				current_player = 2;
			} else {
				current_player = 1;
			}

			// Add the active class to current_player
			document.querySelector(".player"+current_player).classList.add("active");
		} else {
			// When a player play in a not empty cell
			alert('You can play here someone alreay play there !')
		}
	}
});