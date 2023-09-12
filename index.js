const NewsAPI = require('newsapi');
var fs = require('fs');
const newsapi = new NewsAPI('63dec177fea0436286a192ae49bb5ef1');
var configdecript
// file system https://tutorialedge.net/nodejs/reading-writing-files-with-nodejs/
function readConfig() {
  fs.readFile('config.txt', 'utf8', (err, data) => {
  if (err) { 
    console.log(err) 
    return
  }
  console.log(data);
  return data;
})};

var configdecript = readConfig()

if (configdecript == 1) {
  console.log("true", configdecript);
} else {
  console.log("false", configdecript);
}



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