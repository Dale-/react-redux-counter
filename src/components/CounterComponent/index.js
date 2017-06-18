/**
 * @author Dale
 * @homepage https://github.com/Dale-/
 * @since 6/18/17
 */
import React, { Component, PropTypes } from 'react';

export default class CounterComponent extends Component {

	static propTypes = {
		counterData: PropTypes.number.isRequired,
		onClick: PropTypes.func
	};

	static defaultProps = {
		counterData: 0
	};

	render() {
		const {
			counterData,
			...props
		} = this.props;

		return <div {...props}> CounterData: {counterData}</div>;
	}
}
