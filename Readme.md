# url-compare [![Build Status](https://travis-ci.org/nescalante/url-compare.svg?branch=master)](https://travis-ci.org/nescalante/url-compare)

> Url comparisons for humans

## Install

Using `npm`

```
npm install url-compare
```

## Usage

```js
var compare = require('url-compare');
compare('http://example.com/route', 'http://example.com:80/route'); // true
compare('http://example.com:123?a=1&b=2', 'http://example.com:123?b=2&a=1'); // true
compare('https://example.com', 'https://example.com:443'); // true

```

## License

MIT
