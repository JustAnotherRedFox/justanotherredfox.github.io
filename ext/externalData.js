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
			let posts = document.getElementsByClassName('ExtPost');
			let lists = document.getElementsByClassName('ExtList');
			let buttons = document.getElementsByClassName('ExtButton');
			let projs = document.getElementsByClassName('ExtProj');

			
			// Alter Element Inner HTML with the External Data Base
			//TITLES
			for (let i = 0; i < titles.length; i++) {
				titles[i].innerHTML = eDB.titles[i].content;

			}

			//PARAGRAPHS 
			for (let i = 0; i < paragraphs.length; i++) {
				paragraphs[i].innerHTML = eDB.paragraphs[i].content;
			}

			//HOMEPAGE POSTS 
			for (let i = 0; i < posts.length; i++) {
				let $cardFrontImg = posts[i].children[0].children[0];
				let $cardFrontP = posts[i].children[0].children[1];
				let $cardInnerH2 = posts[i].children[1].children[0];
				let $cardInnerP = posts[i].children[1].children[1];

				/* value variables */
				let cardimg = "/resources/images/covers/wip.jpg";
				let cardlegend = "Unnamed, WIP";
				let cardtitle = "Unnamed, WIP";
				let carddesc = "no description added";

				if (eDB.posts[i] != null) {

					if (typeof eDB.posts[i].imgUrl === "string" && eDB.posts[i].imgUrl.length !== 0) {
						cardimg = eDB.posts[i].imgUrl;
						cardlegend = eDB.posts[i].imgLegend;
						cardtitle = eDB.posts[i].cardTitle;
						carddesc = eDB.posts[i].cardMsg;
					}
				}

				$cardFrontImg.setAttribute("src", cardimg);
				$cardFrontP.innerHTML = cardlegend;
				$cardInnerH2.innerHTML = cardtitle;
				$cardInnerP.innerHTML = carddesc;
			}

			//LISTS 
			for (let i = 0; i < lists.length; i++) {
				lists[i].innerHTML = "tsting lists";
			}
			
			//BUTTONS 
			for (let i = 0; i < buttons.length; i++) {
				buttons[i].innerHTML = eDB.buttons[i].content;
			}

			//Project Covers 
			for (let i = 0; i < projs.length; i++) {
				let cover_imgUrl = "/resources/images/covers/wip.jpg";
				let cover_imgSub = "Unnamed, WIP";
				let cover_innerTitle = "Untitled";
				let cover_innerDesc = "not added Description";

				if (eDB.projs[i] != null) {
					if (typeof eDB.projs[i].imgUrl === "string" && eDB.projs[i].imgUrl.length !== 0) {
						cover_imgUrl = eDB.projs[i].imgUrl;
						cover_imgSub = eDB.projs[i].imgSub;
						cover_innerTitle = eDB.projs[i].innerTitle;
						cover_innerDesc = eDB.projs[i].innerDesc;


					}
				}

				projs[i].innerHTML = `
					<div class="ItemImg">
						<img src="${cover_imgUrl}">
						<p> ${cover_imgSub} </p>
					</div>

					<div class="ItemInner">
						<h2> ${cover_innerTitle} </h2>
						<p> ${cover_innerDesc} </p>
					</div>
				`;

			}
		})
	
}
