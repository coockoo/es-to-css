const toCSS = require('../src')

const obj = {
	'#my-id-element': {
		'background-color': 'red'
	},
	'.my-class-element': {
		'font-family': 'arial'
	}
};
const actual = toCSS(obj)
const expected = '#my-id-element { background-color: red; }\n.my-class-element { font-family: arial; }'

console.log('Should be truthfully', actual === expected)
