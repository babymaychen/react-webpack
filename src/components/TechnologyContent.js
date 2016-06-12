require('normalize.css/normalize.css');
require('styles/TechnologyContent.css');
var superagent = require('superagent');

import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Markdown from 'react-remarkable';

class TechnologyContentComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          id: this.props.params.id,
          technologyContent: []
      };
  }
  componentWillMount() {
    var id = this.state.id;
    superagent.get('http://localhost:8001/getTechnologyById?id='+id)
      .accept('json')
      .end(function(err, res){
        if (err) throw err;

        this.setState({technologyContent: res.body,
                      day: res.body.time.day});

    }.bind(this));
  }
  render() {
    var technologyContent = this.state.technologyContent;
    return (
      <div className="technologyContent">
      	<Breadcrumb>
      	    <Breadcrumb.Item onClick={() => this.props.history.goBack()}>
      	      技术秘籍
      	    </Breadcrumb.Item>
      	    <Breadcrumb.Item active>
      	      {technologyContent.title}
      	    </Breadcrumb.Item>
      	  </Breadcrumb>
        <div className="contentContainer">
        	<span className="techTitle">{technologyContent.title}</span>
        	<span className="techDate">{this.state.day}</span>
        	<div className="techContent">
        		<Markdown source={technologyContent.article} />
        	</div>
        </div>
      </div>
    );
  }
}

TechnologyContentComponent.defaultProps = {
};

export default TechnologyContentComponent;
