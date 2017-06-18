/**
 * @author Dale
 * @homepage https://github.com/Dale-/
 * @since 6/18/17
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CounterComponent from '../../components/CounterComponent';

import { counterAction, counterServiceAction } from '../../actions/counterAction';

@connect(state => ({
	counter: state.counter
}))

export default class CounterContainer extends Component {

	static propTypes = {
		dispatch: PropTypes.func,
		counter: PropTypes.object
	};

	componentDidMount() {
		this.props.dispatch(counterServiceAction());
	}

	increaseNumber() {
		this.props.dispatch(counterAction(this.props.counter.counterData + 1));
	}

	render() {
		const {
			counter
		} = this.props;

		return <CounterComponent {...counter} onClick={::this.increaseNumber} />;
	}
}
