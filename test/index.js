/**
 * @author Dale
 * @homepage https://github.com/Dale-/
 * @since 6/18/17
 */

const context = require.context('../src', true, /-test\.js$/);
context.keys().forEach(context);
