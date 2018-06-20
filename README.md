# <repa-tilt>

Tilts the content of the element based on mouse position or mobile device orientation.

See [a very basic demo here](https://dyuri.bitbucket.io/repa-tilt/).

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

`index.html` contains only a single empty `<repa-tilt>` element, please check the demo page under `http://localhost:8081/demo/`

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Documentation

When `polymer serve` is running, the documentation is available under `http://localhost:8081/doc.html`

## ES5 compatible build

Running
```
$ polymer build
```
will generate an ES5 compatible version of the custom element into `build/es5` directory. An example `index.html` will be included there.
