# <repa-tilt>

Tilts the content of the element based on mouse position or mobile device orientation.

See [a very basic demo here](https://dyuri.bitbucket.io/repa-tilt/).

## Usage

1 - Install the package

```sh
$ yarn add repa-tilt

# or

$ npm i --save repa-tilt
```

2 - Import the element

```html
<script type="module" src="node_modules/repa-tilt/repa-tilt.js"></script>
```

or in your javascript file

```js
import "repa-tilt/repa-tilt.js";
```

3 - Use it in your HTML

```html
<repa-tilt>content here</repa-tilt>
```

### Styling

The following custom properties and mixins are available for styling:

Custom property             | Default                   | Description
:---                        |:---                       |:---
--repa-tilt-background      | `transparent`             | background
--repa-tilt-text-color      | `#fff`                    | text color
--repa-tilt-primary-color   | `#44a655`                 | primary color (card)
--repa-tilt-secondary-color | `#6168a5`                 | secondary color (card)
--repa-tilt-gradient-deg    | `135deg`                  | gradient tilt degree
--repa-tilt-z               | `10vh`                    | Z axis translation of the content

### Properties

Property        | Default             | Description
:---            | :---                | :---
no-x            | false               | X axis disabled
no-y            | false               | Y axis disabled
no-mobile       | false               | device orientation tilt disabled
reversed        | false               | tilt direction reversed
no-gradient     | false               | single color background

## Development

### Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

### Development Server

```
$ polymer serve
```

`index.html` contains only a single empty `<repa-tilt>` element, please check the demo page under `http://localhost:8081/demo/`

### Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

### Documentation

When `polymer serve` is running, the documentation is available under `http://localhost:8081/doc.html`

###V ES5 Compatible Build

Running
```
$ polymer build
```
will generate an ES5 compatible version of the custom element into `build/es5` directory. An example `index.html` will be included there.
