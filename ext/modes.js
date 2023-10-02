function toggleDarkMode() {
	const $html = document.documentElement;
	$html.classList.toggle('Dark');

	const $img = document.querySelector('#homepage-profile-pic');

	if ($html.classList.contains('Dark')) {
		$img.setAttribute('src', '/resources/images/general/homepage_profile_dark.jpg');

	} else {
		$img.setAttribute('src', '/resources/images/general/homepage_profile.jpg');
	}
}

/*---------------------------------------------------------
 * Translation
/----------------------------------------------------------*/
function translate() {

}

/*----------------------------------------------------------
/ Menu 
/----------------------------------------------------------*/
function menuSwift($e) {
	$e.classList.toggle("Change");	

	let $panel = document.querySelector(".Nav-panel");

	if ($panel.style.display === "inline-block") {
		$panel.style.display = "none";

	} else {
		$panel.style.display = "inline-block";
	}

	if ($panel.style.maxWidth) {
		$panel.style.maxWidth = null;

	} else {
		$panel.style.maxWidth = ($panel.scrollWidth * 9) + "%";
	}
}

/*
let $menu = document.getElementsByClassName("MenuButton");

for (let i = 0; i < $menu.length; i++) {
	$menu[i].addEventListener("click", function() {

		
	});
}
*/

/*----------------------------------------------------
 * Dropdown Menu
 *---------------------------------------------------*/
function  dropdownToggle($element) {
	$element.nextElementSibling.classList.toggle("Show");
}

//Close the dropdown menu fi user clicks outside
window.onclick = function(event) {
	if (!event.target.matches('.DropdownButton')) {
		let dropdowns = document.getElementsByClassName("DropdownPanel");

		for (let i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];

			if (openDropdown.classList.contains('Show')) {
				openDropdown.classList.remove('Show');
			}
		}
	}
}
