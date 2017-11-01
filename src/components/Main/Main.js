import React from 'react';
import {Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment} from 'semantic-ui-react'
import { Link, Route, withRouter } from 'react-router-dom';

class Main extends React.Component {
    
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <div>
            <Menu fixed='top' inverted>
              <Container>
                <Menu.Item as='a' header>
                  Project Name
                </Menu.Item>
                <Menu.Item as='a'>Home</Menu.Item>
        
                <Dropdown item simple text='Dropdown'>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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