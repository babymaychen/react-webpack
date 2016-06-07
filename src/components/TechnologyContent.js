require('normalize.css/normalize.css');
require('styles/TechnologyContent.css');
var superagent = require('superagent');

import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

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

        this.setState({technologyContent: res.body});

    }.bind(this));
  }
  render() {
    var technologyContent = this.state.technologyContent;
    var createtime = '"'+technologyContent.createtime+'"';
    console.log(createtime.l);
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
        	<span className="techDate">{createtime.slice(1,11)}</span>
        	<div className="techContent">
        		{this.state.technologyContent.content}
        	</div>
        </div>
      </div>
    );
  }
}

TechnologyContentComponent.defaultProps = {
};

export default TechnologyContentComponent;
