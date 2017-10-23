import React, {Component} from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import {Login} from './components/Login';
import {Main} from './components/Main';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            layout: ''
        };
    }
    
    componentDidMount() {
        let savedSession = (reactLocalStorage.get('session') !== undefined) ? reactLocalStorage.get('session') : '';
        if (savedSession !== '') {
            this.setState({layout : 'session-active'});
        } else {
            this.setState({layout : 'session-inactive'});
        }
    }
    
    render() {
        if (this.state.layout === 'session-active') {
            return (
            <div className="App">
                <Main />
            </div>
            );
        } else if (this.state.layout === 'session-inactive') {
            return (
            <div className="App">
                <Login />
            </div>
            );
        } else {
            return false;
        }
    }

}

export default App;
