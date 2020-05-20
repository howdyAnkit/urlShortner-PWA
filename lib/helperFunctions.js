"use strict";

// Manipulates responseField to render a formatted and appropriate message
var renderResponse = function renderResponse(res) {
  // Displays either message depending on results
  if (res.errors) {
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    responseField.innerHTML = "<p>Your shortened url is: </p><p> " + res.shortUrl + " </p>";
  }
};

// Manipulates responseField to render an unformatted response
var renderRawResponse = function renderRawResponse(res) {
  // Displays either message depending on results
  if (res.errors) {
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // Adds line breaks for JSON
    var structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
    structuredRes = "<pre>" + structuredRes + "</pre>";
    responseField.innerHTML = "" + structuredRes;
  }
};