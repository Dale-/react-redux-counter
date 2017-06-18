/**
 * @author Dale
 * @homepage https://github.com/Dale-/
 * @since 6/18/17
 */

const context = require.context('./data', true, /\.js$/),
			result = {};

context.keys().forEach(data => {
	Object.assign(result, context(data).default);
});

export default result;
