var button = document.getElementById("search");
var beers = "beers";
searchButton.addEventListener("click", () => {
  const apiURL = "https://api.punkapi.com/v2/" + beers; //link na api

  fetch(apiURL)
    .then((response) => response.json(request.responseText))
    .then((data) => {
      const tbody = document.querySelector("#results tbody");
      tbody.innerHTML = "";
      data.forEach((element) => {
        const row = document.createElement("tr"); //kreiramo novi red u tablici
        const idElement = document.createElement("td"); //kreiramo novi stupac u tablici
        idElement.innerText = element.id; //dohvaćamo stupac "id" iz api zahtjeva i upisujemo ga u "idElement" kreirani stupac
        const nameElement = document.createElement("td");
        nameElement.innerText = element.name; //dohvaćamo stupac "name" iz api zahtjeva i upisujemo ga u "nameElement" kreirani stupac
        const descriptionElement = document.createElement("td");
        descriptionElement.innerText = element.volume.unit;
        //dodavanje stupaca kreiranom retku
        row.appendChild(idElement);
        row.appendChild(nameElement);
        row.appendChild(descriptionElement);
        //dodavanje retka u tablicu
        tbody.appendChild(row);
      });
    })
    .catch((error) => console.error(error));
});

