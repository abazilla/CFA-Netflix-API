const axios = require('axios');
const prompt = require('prompt');

function getNetflix(actor) {
  axios.get(`http://netflixroulette.net/api/api.php?actor=${actor}`).then(function (response) {
    //  console.log(response["data"][0]);
    for(var i = 0; i < response["data"].length; i++) {
      // console.log(response["data"]);
      console.log("Title:", response["data"][i]["show_title"]);
      console.log("Year:", response["data"][i]["release_year"]);
      console.log("Cast:", response["data"][i]["show_cast"]);
      console.log("Synopsis:", response["data"][i]["summary"] + '\n');
      i++;
    }
  }).catch(function (error) {
    console.log(error);
  });
}

console.log("Welcome to the Netflix thing!!🎬")

prompt.start();

console.log("Please enter the name of your favourite actor!🕺💃")

prompt.get(['actor'], function (err, result) {
  getNetflix(result.actor)
});
