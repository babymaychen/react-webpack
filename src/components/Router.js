import React from 'react'
import { Router, Route, Link, IndexRoute } from 'react-router'

import MainContent from './MainContent'
import TechnologyList from './TechnologyList'

class RouterComponent extends React.Component {
	render() {
	  return (
	        <Router>
	            <Route path="/" component={MainContent}>
	            	<IndexRoute component={TechnologyList} />
	            	<Route path="technologyList" component={TechnologyList}>
	            	</Route>
	            </Route>
	          </Router>
	  );
	}
}

RouterComponent.defaultProps = {
};

export default RouterComponent;