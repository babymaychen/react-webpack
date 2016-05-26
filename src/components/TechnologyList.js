require('normalize.css/normalize.css');
require('styles/TechnologyList.css');

import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

let mayIcon = require('../images/mayIcon.png');
let mayEnIcon = require('../images/mayEnIcon.png');

class TechnologyListComponent extends React.Component {
  handleTextChange(e) {
  	console.log(e.target.value);
  }
  render() {
    return (
      <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          </Row>
      </Grid>
    );
  }
}

TechnologyListComponent.defaultProps = {
};

export default TechnologyListComponent;
