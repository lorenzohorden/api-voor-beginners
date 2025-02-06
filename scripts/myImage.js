getData(myURL).then(data => {
    let avatarURL = data.data.avatar
    const section = document.querySelector("section:first-of-type")

    if(!avatarURL){vatarURL = "http://127.0.0.1:5500/images/placeholder1.svg"}

    const imgElement = document.createElement("img")
    imgElement.src = avatarURL
    imgElement.alt = "avatar afbeelding"

    section.append(imgElement)
})














/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }