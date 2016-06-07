require('styles/Nav.css');
import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavComponent extends React.Component {
  render() {
    return (
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">孙小妹_个人博客</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to='/technologyList'>
                <NavItem active eventKey={1} href="#">技术秘籍</NavItem>
              </LinkContainer>
              <LinkContainer to='/record'>
                <NavItem eventKey={2}>生活点滴</NavItem>
              </LinkContainer>
              <NavItem eventKey={3} href="#">休闲娱乐</NavItem>
              <LinkContainer to='/hiChat'>
                <NavItem eventKey={4} href="#">沟通交流</NavItem>
              </LinkContainer>
              <NavItem eventKey={5} href="#">关于博主</NavItem>
            </Nav>
          </Navbar.Collapse>
          
        </Navbar>
    );
  }
}

NavComponent.defaultProps = {
};

export default NavComponent;