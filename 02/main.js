window.onload = function() {
	var clickClasses = document.getElementsByClassName("menu-icon");
	for(var i = 0; i < clickClasses.length; i++) {
		var clickClass = clickClasses[i];
		clickClass.onclick = function() {
			var menu = document.querySelector('.menu-icon')
			menu.classList.toggle('active');

			var noAnims = document.getElementById("menuicon").querySelectorAll(".no-animation");
			for(var i2 = 0; i2 < noAnims.length; i2++) {
				noAnims[i2].classList.remove("no-animation");
			}
		}
	}
}