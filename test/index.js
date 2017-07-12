const assert = require('assert')

const toCSS = require('../src')

describe('toCSS', () => {
	it('should pass simple object => style test', () => {
		runTest({
			obj: {
				'#my-id-element': {
					'background-color': 'red'
				},
				'.my-class-element': {
					'font-family': 'arial'
				}
			},
			css: '#my-id-element { background-color: red; }\n.my-class-element { font-family: arial; }',
		});
	});
	it('should work properly with nested styles', () => {
		runTest({
			obj: {
				'#my-id-element': {
					'background-color': 'red',
					'.my-class-element': {
						'font-family': 'arial'
					}
				}
			},
			css: '#my-id-element { background-color: red; }\n#my-id-element .my-class-element { font-family: arial; }',
		});
	});
	it('should work properly with & and pseudo-classes', () => {
		runTest({
			obj: {
				'#my-id-element': {
					'background-color': 'red',
					'&:hover': {
						'background-color': 'black'
					}
				}
			},
			css: '#my-id-element { background-color: red; }\n#my-id-element:hover { background-color: black; }',
		});
	});
	it('should work with option blockSeparator', () => {
		runTest({
			obj: {
				'#my-id-element': {
					'background-color': 'red'
				},
				'.my-class-element': {
					'font-family': 'arial'
				}
			},
			css: '#my-id-element { background-color: red; } .my-class-element { font-family: arial; }',
			opts: {
				blockSeparator: ' '
			}
		});
	});
});

function runTest ({ obj, css, opts = {} }) {
	const actual = toCSS(obj, opts);
	assert.equal(actual, css);
}
