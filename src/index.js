import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
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
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
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
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
