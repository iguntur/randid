# randid

[![Build Status](https://travis-ci.com/iguntur/randid.svg?token=Gqg6SWkLJ3YyFSAu5i3M&branch=master)](https://travis-ci.com/iguntur/randid)
[![npm](https://img.shields.io/npm/v/@guntur/randid.svg?style=flat)](https://www.npmjs.org/package/@guntur/randid)
[![node](https://img.shields.io/node/v/@guntur/randid.svg?style=flat)](https://nodejs.org)

> Generate a random string or id


---


## Install

```console
$ npm install @guntur/randid
```

## Usage

```js
const randid = require('@guntur/randid');

randid().then(str => {
    console.log(str);
    //=> l43xxapV9aWq
});

console.log(randid.sync({length: 24}));
//=> x3qAJC3d7ra4IafxmtXEqWkK
```

## API

### randid(`options`)

- Params:
  - `options`: [`<Options>`](#options)
- Returns: `Promise<string>`

### randid.sync(`options`)

- Params:
  - `options`: [`<Options>`](#options)
- Returns: `<string>`

#### `Options`

- `length`: `<number>`
  - default: `12`


## License

MIT © [Guntur Poetra](https://github.com/iguntur)
