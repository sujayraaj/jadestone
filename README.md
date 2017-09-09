# Nyun
A small, fast and minimalist rendering engine for express

## Install

You can get Nyun via npm.

```bash
$ npm install nyun --save
```

## Usage

Below is a quick example how to use nyun with express:

### app.js
```js
app.set('view engine', 'nyun')
```

Create a nyun template file named index.nyun in the views directory, with the following content

```js
module.exports = (options) => {
  with(options){
      return `<html>
                <head>
                    <title>${title}<title>
                </head>
                <body>
                    <h1>${message}</h1>
                </body>
            </html>`
  }
}
```

Then create a route to render the index.nyun file. If the view engine property is not set, you must specify the extension of the view file. Otherwise, you can omit it.

```js
var view = {
  title: "Joe",
  message: 'Hello there!'
};

app.get('/', function (req, res) {
  res.render('index', view);
})
```
## Partials

Nyun supports including partials out of the box. Just require the partial with its context and its done!

### index.nyun

```js
module.exports = (options) => {
  with(options){
      return `<html>
                <head>
                    <title>${title}<title>
                </head>
                <body>
                    <h1>${require('./message.nyun')(message)}</h1>
                </body>
            </html>`
  }
}
```
### message.nyun
```js
module.exports = (options) => {
  with(options){
      return `<span> ${text}
                </span>`
  }
}
```
and the route is written as 
```js
var view = {
  title: "Joe",
  message: {text:'Hello there!'}
};

app.get('/', function (req, res) {
  res.render('index', view);
})
```
