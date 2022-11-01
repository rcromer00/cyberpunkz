// setup nav
const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// show nav
navBtn.addEventListener("click", () => {
	navBar.classList.add("showNav");
	navBtn.style.display = "none";
});
// close nav
navClose.addEventListener("click", () => {
	navBar.classList.remove("showNav");
	navBtn.style.display = "block";
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		navBar.style.top = "0";
	} else {
		navBar.style.top = "-50px";
	}
	prevScrollpos = currentScrollPos;
};
