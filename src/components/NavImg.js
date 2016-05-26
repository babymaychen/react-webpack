require('normalize.css/normalize.css');
require('styles/NavImg.css');

import React from 'react';

let mayIcon = require('../images/mayIcon.png');
let mayEnIcon = require('../images/mayEnIcon.png');

class NavImgComponent extends React.Component {
  render() {
    return (
      <div className="iconAnim">
      	<div className="container">
        <div className="icon">
            <img src={mayIcon} />
        </div>
        <div className="enIcon">
          <img src={mayEnIcon} />
        </div>
        <span className="title">前端工程师养成记</span>
        </div>
      </div>
    );
  }
}

NavImgComponent.defaultProps = {
};

export default NavImgComponent;
