import React from 'react';
import ReactDOM from 'react-dom';
// Semantic-ui
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
// React-Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers';
// Custom Component
import App from './App';
import { Main } from './components/Main';
import { Login } from './components/Login';

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <div>       
            <Switch>
                <Route
                    exact path='/'
                    component={App}
                />
                <Route
                    exact path='/main'
                    component={Main}
                />
                <Route
                    exact path='/login'
                    component={Login}
                />
            </Switch>
        </div>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
