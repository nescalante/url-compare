'use strict';

var url = require('url');
var querystring = require('querystring');

module.exports = compare;

function compare(uriStr1, uriStr2) {
  var urlObj1 = url.parse(uriStr1);
  var urlObj2 = url.parse(uriStr2);

  [urlObj1, urlObj2].forEach(setDefaultPort);

  return urlObj1.port === urlObj2.port &&
    urlObj1.protocol === urlObj2.protocol &&
    urlObj1.hostname === urlObj2.hostname &&
    urlObj1.pathname === urlObj2.pathname &&
    compareQueryStrings(urlObj1.query, urlObj2.query);
}

function setDefaultPort(urlObj) {
  var defaultPort =
  urlObj.port = urlObj.port || getDefaultPort(urlObj.protocol);

  return urlObj;
}

function getDefaultPort(protocol) {
  if (protocol === 'http:') {
    return '80';
  }
  else if (protocol === 'https:') {
    return '443';
  }
}

function compareQueryStrings(queryStr1, queryStr2) {
  var queryObj1 = querystring.parse(queryStr1);
  var queryObj2 = querystring.parse(queryStr2);

  return Object.keys(queryObj1).length === Object.keys(queryObj2).length &&
    Object.keys(queryObj1).every(function (key) { return queryObj2[key] === queryObj1[key]; });
}
