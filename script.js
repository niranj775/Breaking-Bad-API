async function getChar() {
  try {
    let response = await fetch("https://www.breakingbadapi.com/api/characters");
    let data = await response.json();

    let eleFound = false;

    let input = document.querySelector("input");
    let name = input.value;
    input.value = "";

    data.forEach((ele) => {
      if (ele.name.toLowerCase() == name.toLowerCase()) {
        eleFound = true;

        let container = document.getElementById("container");
        container.innerHTML = "";

        let row = createEle("div", "row");

        let col = createEle("div", "col");
        col.setAttribute("class", "mr-auto ml-auto");

        let card = createEle("div", "card border border-secondary");
        card.setAttribute("style", "width: 18rem;");

        let img = createEle("img", "card-img-top h-25");
        img.setAttribute("alt", "Character Image");
        img.setAttribute("src", ele.img);

        let cardBody = createEle("div", "card-body");

        let cardTitle = createEle(
          "h5",
          "card-title bg-info text-white d-flex justify-content-center"
        );
        cardTitle.innerHTML = ele.name;

        let cardText1 = createEle(
          "h6",
          "card-text d-flex justify-content-center"
        );
        cardText1.innerHTML = `Nickname: ${ele.nickname}`;

        let cardText2 = createEle(
          "h6",
          "card-text d-flex justify-content-center"
        );
        cardText2.innerHTML = `Status: ${ele.status}`;

        let cardText3 = createEle(
          "h6",
          "card-text d-flex justify-content-center"
        );
        cardText3.innerHTML = `Actor: ${ele.portrayed}`;

        cardBody.append(cardTitle, cardText1, cardText2, cardText3);
        card.append(img, cardBody);

        col.append(card);
        row.append(col);

        container.append(row);

        function createEle(elem, value) {
          let tag = document.createElement(elem);
          tag.setAttribute("class", value);
          return tag;
        }
      }
    });

    if (eleFound == false) alert("Character not found!");
  } catch (err) {
    console.log(err);
  }
}
