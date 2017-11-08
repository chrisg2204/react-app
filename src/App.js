import React, {Component} from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import { connect } from 'react-redux';
// React-Router
import { withRouter } from 'react-router-dom';
// Actions
import { MainActionThunk } from './redux/actions';
// Custom Component
import { Login } from './components/Login';
import { Main } from './components/Main';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            session: ''
        };
    }
    
    componentDidMount() {
        let savedSession = (
            reactLocalStorage.get('session') !== undefined)
                ?
            JSON.parse(reactLocalStorage.get('session')) : '';
            
        if (savedSession !== '') {
            this.setState({
                session : 'session-active'
            });

            this.props.history.push('/main');
        } else {
            this.setState({
                session : 'session-inactive'
            });
        }
    }
    
    render() {
        
        const {
            session
        } = this.state;
        
        if (session === 'session-active') {
            return (
                <div className="App">
                    <Main />
                </div>
                );
        } else if (session === 'session-inactive') {
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

const mapStateToProps = (state) => {
    return Object.assign({}, state, '');
};

export default connect(mapStateToProps)(withRouter(App));
