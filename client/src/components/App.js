import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import '../styles/Board.css'

import Board from './board/Board';
import Header from './Header';
import FutureBoardCreate from './futureBoard/forms/FutureBoardCreate';

class App extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Router history={history}>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Board}/>
                        <Route path="/board/create" component={FutureBoardCreate}/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;