import React from 'react'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import MainContent from './MainContent'
import TechnologyList from './TechnologyList'
import TechnologyContent from './TechnologyContent'

const history = useRouterHistory(createBrowserHistory)({ queryKey: false });

class RouterComponent extends React.Component {
	render() {
	  return (
	        <Router history={history}>
	            <Route path="/" component={MainContent}>
	            	<IndexRoute component={TechnologyList} />
	            	{/*<Route path="technologyContent" component={TechnologyContent} />*/}
	            	<Route path="technologyList" component={TechnologyList}>
	            		<Route path="technologyContent" component={TechnologyContent} />
	            	</Route>
	            </Route>
	        </Router>
	  );
	}
}

RouterComponent.defaultProps = {
};

export default RouterComponent;