// https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
// https://restfulapi.net/
// https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
// https://www.w3schools.com/xml/ajax_intro.asp


var request = new XMLHttpRequest();
request.open("GET", "https://api.publicapis.org/entries", true);

request.onload = function () {
  // Pristupi podacima koje je server vratio
  console.log(request);
};

request.send();