window.onload = function() {
				callExtDt();
			};
			
function callExtDt() {
	// Fetching External Data
	fetch('/ext/externalDataBase.json')
		.then(response => response.json())
		.then(eDB => {
			// Get Element Classes
			let titles = document.getElementsByClassName('ExtTitle');
			let paragraphs = document.getElementsByClassName('ExtParagraph');
			let subtitles = document.getElementsByClassName('ExtSubtitle');
			let lists = document.getElementsByClassName('ExtList');
			let buttons = document.getElementsByClassName('ExtButton');

			
			// Alter Element Inner HTML with the External Data Base
			//TITLES
			for (let i = 0; i < titles.length; i++) {
				titles[i].innerHTML = eDB.titles[i].content;

			}

			//PARAGRAPHS 
			for (let i = 0; i < paragraphs.length; i++) {
				paragraphs[i].innerHTML = eDB.paragraphs[i].content;
			}

			//SUBTITLES 
			for (let i = 0; i < subtitles.length; i++) {
				subtitles[i].innerHTML = "testing subtitles";
			}

			//LISTS 
			for (let i = 0; i < lists.length; i++) {
				lists[i].innerHTML = "tsting lists";
			}
			
			//BUTTONS 
			for (let i = 0; i < buttons.length; i++) {
				buttons[i].innerHTML = "tsting buttons";
			}
		})
	
}
