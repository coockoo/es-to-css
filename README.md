# es-to-css

Convert ES6 objects into CSS stylesheet

## Installation

```
npm install --save es-to-css
```

## Usage

Basic usage:

```javascript
const toCSS = require('es-to-css')

const css = toCSS({
	'#my-id-element': {
		'background-color': 'red'
	},
	'.my-class-element': {
		'font-family': 'arial'
	}
})
console.log(css)

// => Outputs:
// #my-id-element { background-color: red; }
// .my-class-element { font-family: arial; }
```

Even nested pseudo-classes supported

```javascript
const toCSS = require('es-to-css')

const css = toCSS({
	'#my-id-element': {
		'background-color': 'red',
		'&:hover': {
			'background-color': 'black'
		}
	}
})
console.log(css)

// => Outputs:
// #my-id-element { background-color: red; }
// #my-id-element:hover { background-color: black; }
```
