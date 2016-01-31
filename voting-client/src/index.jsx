/**
 * Created by estsauver on 1/23/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {VotingContainer} from './components/Voting';
import App from "./components/App";
import {ResultsContainer} from './components/Results';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import remoteActionMiddleware from './remote_action_middleware';
import {setState} from './action_creators';

import {Provider} from 'react-redux';
import io from 'socket.io-client';

import {Route, Router} from 'react-router';

const pair = ['Trainspotting', '28 Days Later'];

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
    store.dispatch(setState( state))
);


const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(reducer);

store.dispatch({
    type: 'SET_STATE',
    state: {
        vote: {
            pair: ['Sunshine', '28 Days Later'],
            tally: {Sunshine: 2}
        }
    }
});

const routes = <Route component={App}>
    <Route path="/results" component={ResultsContainer} />
    <Route path="/" component={VotingContainer} />
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
