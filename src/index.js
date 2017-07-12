function toCSS (styles, options = {}) {
	const compiled = compile({}, styles, [])
	return toText(compiled, options);
}

function compile (res, node, path) {
	const pathString = path.join(' ')
	if (path.length > 0) {
		res[pathString] = {};
	}
	Object
		.keys(node)
		.forEach((key) => {
			if (typeof node[key] === 'object') {
				if (key.indexOf('&') === 0) {
					compile(res, node[key], [ ...path.slice(0, -1), `${path.slice(-1)[0]}${key.slice(1)}` ]);
				} else {
					compile(res, node[key], [ ...path, key ]);
				}
			} else {
				res[pathString][key] = node[key];
			}
		})
	return res;
}

function toText (styles, options) {
	return Object
		.keys(styles)
		.map((key) => (`${key} { ${Object.keys(styles[key]).map(prop => (`${prop}: ${styles[key][prop]};`)).join(' ')} }`))
		.join(options.blockSeparator || '\n');
}

module.exports = toCSS;
