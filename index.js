//dotenv (Hide tokens)
require('dotenv').config();
const Token = process.env.TOKEN;
if (Token == undefined) {
  console.log('\x1b[41m',"SAFE ABORT ")
  console.log("There is no active token set in the .env config file. Please add a token...")
  console.log("You can do so by creating a .env file in the root of the aplication")
  console.log("the open and type and replace <your data> w/ your token: ")
  console.log('\x1b[36m%s\x1b[0m', "TOKEN=<your data>")
  process.exit();
}
console.log("Token Loaded");


//promting
const prompt = require('prompt-sync')()

//file system
const fs = require('fs');


//load NewAPI
const NewsAPI = require('newsapi');
//const { exit } = require('process');
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

function GetAscii() {
  var fun = fs.readFileSync("./ExtraFiles/ascii_husky_small.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    return data;
  })
  return fun;
}

function Getdata() {
  fs.readFile("./Config/config.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }
  try {
    const presets = JSON.parse(jsonString);
    console.log(presets);
    return presets
  } catch (err) {
    console.log("Error parsing JSON string:", err);
    return;
  }
});
}
//^I dont know how the fuck this is working so dont fucking touch it.

var Today = GetDate()
var asciihusky = GetAscii()
console.log(asciihusky);
console.log("Succesfully loaded Functions, Packages, and Config on the "+ Today);


var jsonout = Getdata()

var Preset1 = "ye"


//starts the user prompting
console.log("What Preset Would you like to Chose?")
console.log("1. " + Preset1)
console.log("2. " + "Preset2")
console.log("3. " + "Preset3")
console.log("4. " + "Preset4") 


//get preset
function Preset() {
  var answer = prompt("Input: ")
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

var SelectedPreset = Preset();
//gets data from users --Start important suff here 








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