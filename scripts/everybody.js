const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";
const fallbackImg = "https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette.png"

const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';

const URLsquad = baseURL + endpointSquad

getData(URLsquad).then(data => {
    const squad = data.data
    squad.forEach((member) => {
        const section = document.querySelector("section:nth-of-type(2)")
        const article = document.createElement("article")


        const h3 = document.createElement("h3")
        h3.textContent = member.name


        const img = document.createElement("img")
        img.src = member.avatar
        img.alt = member.name
        if(!member.avatar){img.src = fallbackImg}


        const a = document.createElement("a")
        a.textContent = "website"
        a.href = member.website
        a.setAttribute("aria-label", `de website van ${member.name}`)
        if(!member.website){a.href = fallbackWebsite}


        article.append(h3)
        article.append(img)
        article.append(a)

        section.append(article)
    })
})













/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }