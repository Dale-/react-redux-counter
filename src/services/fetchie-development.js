/**
 * @author Dale
 * @homepage https://github.com/Dale-/
 * @since 6/18/17
 */

import fetchie, { fetchieMock } from 'fetchie';
import mockData from '../mock';


fetchie
.use(function () {

	if (process.env.SERVER) {
		this.prefix(process.env.SERVER);
	}

	this.timeout(20000);
})
.error(error => {
	console.log(error);
});


if (!process.env.SERVER) {
	fetchie.use(fetchieMock(mockData, 500));
}
