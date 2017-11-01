import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// Custom Component
import App from './App';
import {Main} from './components/Main';

ReactDOM.render(
    <BrowserRouter>
        <div>       
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/main' component={Main} />               
            </Switch>
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
