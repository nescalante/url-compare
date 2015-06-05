'use strict';

var test = require('tape');
var compare = require('..');

test('comparisons', function (t) {
  t.true(compare('http://example.com/route', 'http://example.com:80/route'), 'compare default http protocol');
  t.true(compare('http://example.com:123?a=1&b=2', 'http://example.com:123?b=2&a=1'), 'compare query string');
  t.true(compare('https://example.com', 'https://example.com:443'), 'compare default https protocol');
  t.false(compare('http://example.com', 'http://example.com:443'), 'ensure default http protocol');
  t.false(compare('http://example.com:123?a=1&b=2', 'http://example.com:123?a=2&b=1'), 'ensure query string comparison');
  t.false(compare('https://example.com:80', 'http://example.com:80'), 'ensure protocol comparison');
  t.false(compare('https://example.com:80/route', 'https://example.com/route'), 'ensure default https protocol check');
  t.false(compare('http://example123.com', 'http://example456.com'), 'ensure domain comparison');

  t.end();
});
