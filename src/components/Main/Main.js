import React from 'react';
import { Container, Dropdown, Header, Menu, Icon } from 'semantic-ui-react';
import { reactLocalStorage } from 'reactjs-localstorage';
import { withRouter } from 'react-router-dom';
// Custom Component
import { User } from '../User';

class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            session: '',
            userData : {},
            itemSelected: '',
            componentActive: 'Main'
        };

    }

    componentDidMount() {
        let savedSession = (
            reactLocalStorage.get('session') !== undefined)
                ?
            JSON.parse(reactLocalStorage.get('session')) : '';
            
        if (savedSession !== '') {
            this.setState({
                session : 'session-active',
                userData : savedSession.data
            });
        } else {
            this.setState({
                session : 'session-inactive'
            });
            
            this.props.history.push('/');
        }
    }
    
    handleChangeDropdown = (e, data) => {
        const self = this;
        const {
            value
        } = data;
        self.setState({
            itemSelected : data.value
        });
        
        if (value === 'sign-out') {
            self.logout();
        } else if (value === 'management-users') {
            self.setState({
                componentActive : 'User'
            });
        }
    }
    
    logout = () => {
        reactLocalStorage.clear();
        this.props.history.push('/');
    }

    render() {
        const {
            firstname,
            lastname
        } = this.state.userData;

        const fullName = firstname +' '+ lastname;

        const trigger = (
            <span>
                <Icon name='user' /> { fullName }
            </span>
        );

        const options = [
            {
                value: 'profile',
                text: 'Your Profile'
            }, {
                value: 'stars',
                text: 'Your Stars'
            }, {
                value: 'management-users',
                text: 'management users'
            }, {
                value: 'integrations',
                text: 'Integrations'
            }, {
                value: 'help',
                text: 'Help'
            }, {
                value: 'settings',
                text: 'Settings'
            }, {
                value: 'sign-out',
                text: 'Sign Out'
            }
        ];

        const { componentActive } = this.state;
        let renderComponent = '';


        if (componentActive === 'User') {
            renderComponent = <User />;
        }
        
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            Project Name
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Home
                        </Menu.Item>
                        <Menu.Menu position='right'>    
                            <Dropdown
                                onChange={this.handleChangeDropdown.bind(this)}
                                item
                                simple
                                trigger={trigger}
                                options={options}
                            />
                        </Menu.Menu>
                    </Container>
                </Menu>
        
            <Container text style={{ marginTop: '7em' }}>
                {renderComponent}
            </Container>
          </div>
        );
    }
}

export default withRouter(Main);