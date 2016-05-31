require('normalize.css/normalize.css');
require('styles/TechnologyContent.css');

import React from 'react';
import { History } from 'react-router'
import { Breadcrumb } from 'react-bootstrap';

class TechnologyContentComponent extends React.Component {
  render() {
    return (
      <div className="technologyContent">
      	<Breadcrumb>
      	    <Breadcrumb.Item onClick={() => this.props.history.goBack()}>
      	      技术秘籍
      	    </Breadcrumb.Item>
      	    <Breadcrumb.Item active>
      	      孙小妹的技术文章
      	    </Breadcrumb.Item>
      	  </Breadcrumb>
        <div className="contentContainer">
        	<span className="techTitle">孙小妹的技术文章</span>
        	<time className="techDate" datetime="2016-05-31">2016-05-31</time>
        	<div className="techContent">
        		<p><strong>1.校验密码强度</strong></p>
        		<p>密码的强度必须是包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间。</p>
        		<pre>
        			<code className="language-javascript">^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$</code>
        		</pre>
        		<p><strong>2.校验密码强度</strong></p>
        		<p>密码的强度必须是包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间。</p>
        		<pre>
        			<code className="language-javascript">^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$</code>
        		</pre>
        		<p><strong>3.校验密码强度</strong></p>
        		<p>密码的强度必须是包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间。</p>
        		<pre>
        			<code className="language-javascript">^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$</code>
        		</pre>
        	</div>
        </div>
      </div>
    );
  }
}

TechnologyContentComponent.defaultProps = {
};

export default TechnologyContentComponent;
