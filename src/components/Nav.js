require('styles/Nav.css');
import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavComponent extends React.Component {
  handleAcitveCss(e) {
    let otherActiveItem = document.getElementsByClassName('activeItem')[0];
    if (otherActiveItem) {
      otherActiveItem.classList.remove('activeItem');
    }
    if (e.target.classList.contains('activeItem')) {
      e.target.classList.remove('activeItem');
    }
    e.target.classList.add('activeItem');
  }
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
                <NavItem className="activeItem" onClick={this.handleAcitveCss} eventKey={1} href="#">技术秘籍</NavItem>
              </LinkContainer>
              <LinkContainer to='/record'>
                <NavItem onClick={this.handleAcitveCss} eventKey={2}>生活点滴</NavItem>
              </LinkContainer>
              <NavItem onClick={this.handleAcitveCss} eventKey={3} href="#">休闲娱乐</NavItem>
              <NavItem onClick={this.handleAcitveCss} eventKey={4} href="#">沟通交流</NavItem>
              <NavItem onClick={this.handleAcitveCss} eventKey={5} href="#">关于博主</NavItem>
            </Nav>
          </Navbar.Collapse>
          
        </Navbar>
    );
  }
}

NavComponent.defaultProps = {
};

export default NavComponent;