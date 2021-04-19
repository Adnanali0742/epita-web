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


var win = false;

let current_player = 1;

cols.forEach((col) => {
	col.onclick = (e) => {
			// Checked if the player can click on the cell
			if (e.target.innerHTML == "") {
				// Put the symbol in the col
				e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;

			// check the end of the game

			// horizontal check
			if (a1.innerHTML != "" && a1.innerHTML == a2.innerHTML && a1.innerHTML == a3.innerHTML){
				win = true;
			} 
			if (b1.innerHTML != "" && b1.innerHTML == b2.innerHTML && a1.innerHTML == b3.innerHTML){
				win = true;
			} 
			if (c1.innerHTML != "" && c1.innerHTML == c2.innerHTML && c1.innerHTML == c3.innerHTML){
				win = true;
			} 

			//vertical check
			if (a1.innerHTML != "" && a1.innerHTML == b1.innerHTML && a1.innerHTML == c1.innerHTML){
				win = true;
			} 
			if (a2.innerHTML != "" && a2.innerHTML == b2.innerHTML && a2.innerHTML == c2.innerHTML){
				win = true;
			} 
			if (a3.innerHTML != "" && a3.innerHTML == b3.innerHTML && a3.innerHTML == c3.innerHTML){
				win = true;
			} 	

			// diagonal check		
			if (a1.innerHTML != "" && a1.innerHTML == b2.innerHTML && a1.innerHTML == c3.innerHTML){
				win = true;
			} 
			if (a3.innerHTML != "" && a3.innerHTML == b2.innerHTML && a3.innerHTML == c1.innerHTML){
				win = true;
			} 

			if (win == true) {
				setTimeout(function() { your_func(); }, 5000);
				alert("The player"+current_player+" has win")
			}


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