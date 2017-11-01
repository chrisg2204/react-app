import React from 'react';
import { Container, Dropdown, Header, Menu, Icon } from 'semantic-ui-react';
import { reactLocalStorage } from 'reactjs-localstorage';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userData : {},
            itemSelected: '',
            sessionActive: ''
        };

    }

    componentDidMount() {
        const savedSession = (reactLocalStorage.get('session') !== undefined) ? JSON.parse(reactLocalStorage.get('session')) : '';
        if (savedSession !== '') {
            this.setState({ userData : savedSession.data });
        }

    }
    
    handleChangeDropdown = (e, data) => {
        const self = this;
        const { value } = data;
        this.setState({ itemSelected : data.value });

        if (value === 'sign-out') {
            self.logout();
        }
    }

    logout = () => {
        reactLocalStorage.clear();
        this.props.history.push('/');
    }

    render() {
        const { firstname, lastname } = this.state.userData;
        const fullName = firstname +' '+ lastname;
        const trigger = (
            <span>
                <Icon name='user' /> { fullName }
            </span>
        );
        const options = [
            { value: 'profile', text: 'Your Profile' },
            { value: 'stars', text: 'Your Stars' },
            { value: 'explore', text: 'Explore' },
            { value: 'integrations', text: 'Integrations' },
            { value: 'help', text: 'Help' },
            { value: 'settings', text: 'Settings' },
            { value: 'sign-out', text: 'Sign Out' },
          ];

        return (
            <div>
            <Menu fixed='top' inverted>
              <Container>
                <Menu.Item as='a' header>
                  Project Name
                </Menu.Item>
                <Menu.Item as='a'>Home</Menu.Item>
        
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
              <Header as='h1'>Semantic UI React Fixed Template</Header>
              <p>This is a basic fixed menu template using fixed size containers.</p>
              <p>A text container is used for the main container, which is useful for single column layouts.</p>
        
            </Container>
          </div>
        );
    
    }
}

export default withRouter(Main);