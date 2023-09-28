// api https://cat-fact.herokuapp.com/facts

var request = new XMLHttpRequest();
request.open("GET", "https://cat-fact.herokuapp.com/facts", true);

request.onload = () => {
  if (request.status === 200) {
    var responseData = JSON.parse(request.responseText); //pretvaramo u text iz json-a
    var tableBody = document
      .getElementById("tableResponse")
      .getElementsByTagName("tbody")[0];
 

    for (i = 0; i < responseData.length; i++) {
    //kreiramo red 0 (naslovni red) i spremamo u var row 
      var row = tableBody.insertRow(i);
      
//3 nove ćelije u tom redu na lokaciji 0, 1, 2
    var idCell = row.insertCell(0);
    var userCell = row.insertCell(1);
    var textCell = row.insertCell(2);

      //ispisivanje podatak u ćelije
    idCell.innerHTML = responseData[i]._id;
    userCell.innerHTML = responseData[i].user;
    textCell.innerHTML = responseData[i].text;
    }
  } else {
    console.error;
  }
}

request.send();