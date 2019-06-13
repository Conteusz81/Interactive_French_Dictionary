import React, {Component} from 'react';
import {HashRouter, Link, Route, Switch,} from 'react-router-dom';
import MainPage from './MainPage';
import VerbPage from './VerbPage';
import AdminPage from './AdminPage';


class App extends Component {

    render() {
        return (
            <HashRouter>
                <>
                    <Switch>
                        <Route exact path='/' component={MainPage}/>
                        <Route exact path='/admin' component={AdminPage}/>
                        <Route exact path='/:id' component={VerbPage}/>
                    </Switch>
                </>
            </HashRouter>

        )
    }


}

export default App;