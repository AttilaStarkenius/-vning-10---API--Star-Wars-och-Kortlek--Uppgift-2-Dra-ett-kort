element.addEventListener("click", function() {
    var fullUri = "https://deckofcardsapi.com/api/deck/new/draw/?count=1" + document.getElementById("characterName").value;
    fetch(fullUri).then(res => res.json()).then(data => res).catch(err => console.log(err))
    console.log(res.json);
    console.log(`Card image: ${image}`);
    const div1 = document.createElement('div');
    div.setAttribute('class', 'divCard');
                        div.setAttribute('alt', div.name );
                        div.setAttribute('title', div.name );
                        const image = document.createElement('img');
                        image.setAttribute('class', 'imgCard');
                        image.setAttribute('alt', img.name );
                        image.setAttribute('title', img.name );
                        image.src = "https://deckofcardsapi.com/static/img/6H.png";
                        div1.appendChild(image);
}
  });
  
function getApi() {
    var fullUri = "https://deckofcardsapi.com/api/deck/new/draw/?count=1" + document.getElementById("characterName").value;
    fetch(fullUri).then(res => res.json()).then(data => res).catch(err => console.log(err))
    console.log(res.json);
    console.log(`Card image: ${image}`);
    const div1 = document.createElement('div');
    div.setAttribute('class', 'divCard');
                        div.setAttribute('alt', div.name );
                        div.setAttribute('title', div.name );
                        const image = document.createElement('img');
                        image.setAttribute('class', 'imgCard');
                        image.setAttribute('alt', img.name );
                        image.setAttribute('title', img.name );
                        image.src = "https://deckofcardsapi.com/static/img/6H.png";
                        div1.appendChild(image);
}