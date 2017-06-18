/**
 * @author Dale
 * @homepage https://github.com/Dale-/
 * @since 6/18/17
 */

import fetchie from 'fetchie';


fetchie
.use(function () {
	this.timeout(20000);
})
.error(error => {
	console.log(error);
});
