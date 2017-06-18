/**
 * @author Dale
 * @homepage https://github.com/Dale-/
 * @since 6/18/17
 */

require(`./services/fetchie-${process.env.NODE_ENV}`);
import './styles/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import hashHistory from 'react-router/lib/hashHistory';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import createStore from 'redux/lib/createStore';
import applyMiddleware from 'redux/lib/applyMiddleware';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import CounterContainer from './containers/CounterContainer';
import reducers from './reducers';

const store = applyMiddleware(thunkMiddleware)(createStore)(reducers);

ReactDOM.render((
	<Provider store={store}>
	<Router history={hashHistory}>
	<Route path="/" component={CounterContainer} />
	</Router>
	</Provider>
), document.getElementById('root'));
