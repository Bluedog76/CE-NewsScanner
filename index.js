//dotenv (Hide tokens)
require('dotenv').config();
const Token = process.env.TOKEN;
if (Token == undefined) {
  console.log("SAFE ABORT")
  console.log("There is no active tooken set in the .env config file. Please add a token...")
  process.exit();
}
console.log("Loaded Config & Set");


//promting
const prompt = require('prompt-sync')()

//file system
const fs = require('fs');


//load NewAPI
const NewsAPI = require('newsapi');
const { exit } = require('process');
//const { exit } = require('process');
const newsapi = new NewsAPI(Token);


function GetDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var today = mm + '/' + dd + '/' + yyyy;
  return today;
}


// file system https://tutorialedge.net/nodejs/reading-writing-files-with-nodejs/
function GetConfig() {
  var fun = fs.readFileSync("config.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    return data;
  })
  return fun;


}
function GetAscii() {
  var fun = fs.readFileSync("./ExtraFiles/ascii_husky_small.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    return data;
  })
  return fun;
}

function Getdata() {

}

//^I dont know how the fuck this is working so dont fucking touch it.

var Today = GetDate()
var configdecript = GetConfig()
var asciihusky = GetAscii()
console.log(asciihusky);
console.log("Succesfully loaded Functions, Packages, and Config on the "+ Today);
console.log("Loading...");

console.log("What Preset Would you like to Chose")
console.log("Preset1")
console.log("Preset2")
console.log("Preset3")
console.log("Preset4") 


//get preset
function Preset() {
  var answer = prompt("> ")
  var passed = 0;

  if (answer == 1) {
    var passed = 1;
  } else if(answer == 2) {
    var passed = 1; 
  }else if (answer == 3) {
    var passed = 1;
  }else if (answer == 4) {
    var passed = 1;
  }else if (passed == 0) {
    console.log("Incrorrect, Please state a number in the range of 1-4");
    var answer = Preset();
  }
  return answer;
} 
Preset();









/*
if (configdecript == 1) {
  console.log("true", configdecript);
  } else {
  console.log("false", configdecript);
}

*/

// https://newsapi.org/docs/client-libraries/node-js
// You need atleast one filter
/*
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
});

// You nee the filter of at least one q, so5urce, or domain
newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);
});
// All options are optionalo
newsapi.v2.sources({
    category: 'technology',
    language: 'en',
    country: 'us'
  }).then(response => {
    console.log(response);
  });
  */