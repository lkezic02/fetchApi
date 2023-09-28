var button = document.getElementById("search");

button.addEventListener('click', () => {
    const urlAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'; 

    //dohvaćanje api-ja preko fetch i then promisea
    fetch(urlAPI)
        .then((response) => response.json())
        .then((data) => {
            const tbody = document.getElementById("responseTable").getElementsByTagName("tbody")[0];
            tbody.innerHTML = "";

            if (data.drinks) {
                data.drinks.forEach((element) => {
                    //novi red
                    const row = document.createElement("tr");

                    // Kreiranje i postavljanje imena koktela
                    const imeKoktela = document.createElement("td");
                    imeKoktela.innerText = element.strDrink;
                    row.appendChild(imeKoktela);

                    // Kreiranje i postavljanje pripreme koktela
                    const pripremaKoktela = document.createElement("td");
                    pripremaKoktela.innerText = element.strInstructions;
                    row.appendChild(pripremaKoktela);

                    // Sastojci koktela - polje
                    const sastojciKoktela = [];
                    for (let i = 1; i <= 15; i++) {
                        let sastojci = element["strIngredient" + i];
                        if (sastojci) {
                            sastojciKoktela.push(sastojci);
                        }
                    }

                    // Dodavanje polja sastojaka u tablicu
                    const koktelSastojci = document.createElement("td");
                    koktelSastojci.innerText = sastojciKoktela.join(", ");
                    row.appendChild(koktelSastojci);

                    // Postavljanje slike koktela (ako je dostupna)
                    const imgKoktela = document.createElement("img");
                    imgKoktela.src = element.strDrinkThumb;
                    imgKoktela.alt = element.strDrink;
                    const imgCell = document.createElement("td");
                    imgCell.appendChild(imgKoktela);
                    row.appendChild(imgCell);

                    // Dodavanje reda u tablicu
                    tbody.appendChild(row);
                });
            } else {
                console.log("Nema rezultata.");
            }
        })
        .catch((error) => {
            console.log(error);
        });
});


//button za prebacivanje jezika

//pushati na github