[![micromq](https://img.shields.io/npm/v/micromq-pug-render.svg?style=flat-square)](https://www.npmjs.com/package/micromq-pug-render/)

# micromq-pug-render

Extend of [https://github.com/micromq/micromq](https://github.com/micromq/micromq) library add res.render('view', data) function

## Install

```sh
$ npm i micromq-pug-render
```

## Usage
```js
res.render('index', { title: 'My Title' });
```

## Examples

```js
const MicroMQ = require('micromq');
const pug_render = require('micromq-pug-render');

const mq = new MicroMQ(...)

const path_views = __dirname + '/views/';

mq.use(pug_render({ path_views: path_views }));

//...

mq.all('/', (req,res,next) => {
  res.render('index', { title: 'My Title' });
});

```

## Lience

The package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT)

