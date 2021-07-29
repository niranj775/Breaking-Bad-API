const url = "https://www.breakingbadapi.com/api/";

async function getApiData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    for (let e in data) {
      let tag = document.createElement("span");
      tag.setAttribute("class", "navbar-brand mb-0 h1");
      tag.setAttribute("onclick", e + "()");
      tag.innerHTML = e.charAt(0).toUpperCase() + e.slice(1);

      let nav = document.querySelector("nav");
      nav.append(tag);
    }
  } catch (err) {
    console.log(err);
  }
}

getApiData(url);

async function characters() {
  try {
    let charResp = await fetch(`${url}characters`);
    let charData = await charResp.json();
    charData.forEach((element) => {
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      card.setAttribute("style", "card");

      let img = document.createElement("img");
      img.setAttribute("class", "card-img-top");
      img.setAttribute("src", element.image);
      img.setAttribute("alt", element.name);

      let cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");

      let cardText = document.createElement("p");
      cardText.setAttribute("class", "card-text");
      cardText.innerHTML = element.name;

      cardBody.append(cardText);
      card.append(card, img);

      let content = document.getElementById("content");
      content.append(card);
    });
  } catch (error) {
    console.log(error);
  }
}
