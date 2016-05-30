require('styles/MainContent.css');
import React from 'react';
import Nav from './Nav'
import NavImg from './NavImg'
import TechnologyList from './TechnologyList'

class MainContentComponent extends React.Component {
  render() {
    return (
      <div className="mainContent">
      	<Nav />
        <NavImg />
        <div className="content">
        	{this.props.children}
        </div>
      </div>
    );
  }
}

MainContentComponent.defaultProps = {
};

export default MainContentComponent;
