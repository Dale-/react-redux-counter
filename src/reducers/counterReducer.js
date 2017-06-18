/**
 * @author Dale
 * @homepage https://github.com/Dale-/
 * @since 6/18/17
 */

const initialState = {
	counterData: 0
};

export default function counterReducer(state = initialState, action = {}) {
	let data = action.data;

	switch (action.type) {
		case 'COUNTER_ACTION':
		case 'COUNTER_SERVICE_ACTION':
			return {
				...state,
				counterData: data
			};
		default:
			return state;
	}
}
