
var rest = require("./restler");

var options = {
	hostname: "na.api.pvp.net",
	port: 443,
	path: "/api/lol/na/v1.4/summoner/by-name/Epwna?api_key=1171d6f1-0cf3-4d3e-94c4-c176d31cbab4",
	method: "GET"
}

rest.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/Epwna?api_key=1171d6f1-0cf3-4d3e-94c4-c176d31cbab4").on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    console.log(result);
  }
});