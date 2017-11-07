import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'
// Action
import LoginActionThunk from '../../redux/actions/LoginAction';

class Login extends React.Component {

    constructor(props) {
		super(props);

		this.state = {
			form: 'Init',
            button: 'Init',
            message: {
                hidden: true,
                content: ''
            },
			login: {
				username: '',
				password: ''
			}
		};

	}

	handleChange = (propertyName, event) => {
		const login = this.state.login;
		login[propertyName] = event.target.value;
		this.setState({login: login});

	}

	handleSubmit = (event) => {
        let self = this,
            encodedForm = [];

        for (let i in self.state.login) {
            let encodedKey = encodeURIComponent(i);
            let encodedValue = encodeURIComponent(self.state.login[i]);
            encodedForm.push(encodedKey + "=" + encodedValue);
        }

        encodedForm = encodedForm.join("&");

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:1337/login',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
            data: encodedForm
        })
        .then(response => {
            reactLocalStorage.setObject('session', {data: response.data.data});
            this.props.history.push('/main');
        })
        .catch(err => {
            this.setState({ message: {hidden: false } });
            this.setState({ message: {content: err.response.data.error } });
        });

		event.preventDefault();
    }
    
    handleDismiss = () => {
        this.setState({ message: {hidden: true } });
    }

    render() {
        
        return (
            <div className='login-form'>
            {/*
              Heads up! The styles below are necessary for the correct render of this example.
              You can do same with CSS, the main idea is that all the elements up to the `Grid`
              below must have a height of 100%.
            */}
            <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>
            <Grid
              textAlign='center'
              style={{ height: '100%' }}
              verticalAlign='middle'
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Message warning
                    hidden={this.state.message.hidden}
                    onDismiss={this.handleDismiss}
                    header='Warning!'
                    content={this.state.message.content}
                />
                <Header as='h2' color='teal' textAlign='center'>
                  {' '}Log-in to your account
                </Header>
                <Form onSubmit={this.handleSubmit.bind(this)} size='large'>
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon='user'
                      iconPosition='left'
                      placeholder='E-mail address'
					  onChange={this.handleChange.bind(this, 'username')}
					  value={this.state.login.username}
                    />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
					  onChange={this.handleChange.bind(this, 'password')}
                    />
        
                    <Button color='teal' fluid size='large' type='submit'>Login</Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <a href='#'>Sign Up</a>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        );
    }

}

const mapStateToProps = (state) => {
  return Object.assign({}, state, '');
};

export default connect(mapStateToProps)(withRouter(Login));