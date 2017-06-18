/**
 * @author Dale
 * @homepage https://github.com/Dale-/
 * @since 6/18/17
 */

import fetchie from 'fetchie';

export function counterAction(actionData) {
	return {
		type: 'COUNTER_ACTION',
		data: actionData
	};
}

export function counterServiceAction() {
	return dispatch => fetchie
		.get('counter/')
		.then(response => {
			dispatch(counterServiceSuccessAction(response.counterData));
	});
}

function counterServiceSuccessAction(counterData) {
	return {
		type: 'COUNTER_SERVICE_ACTION',
		data: counterData
	};
}
