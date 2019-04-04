# randid

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
