require('normalize.css/normalize.css');
require('styles/HiChat.css');

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

let chatIntroImg = require('../images/chatIntro.png');

class HiChatComponent extends React.Component {
  render() {
    return (
      <div className="hiChat container">
        <Grid>
          <Row className="show-grid">
            <Col xs={2} md={2}>
              <div className="chatIntroImg">
                <img src={chatIntroImg} alt=""/>
              </div>
            </Col>
            <Col xs={8} md={8}>
              <span className="chatIntroContent">
                前端技术交流群，喜欢小妹博客的人，一起进群聊天，谈天说地，畅所欲言
              </span>
            </Col>
          </Row>
        </Grid>
        <iframe src="http://localhost:3000/" frameborder="0" border="0" cellspacing="0"
         allowfullscreen>
          你的浏览器不支持iframe页面嵌套，请点击这里访问页面内容。
        </iframe>
      </div>
    );
  }
}

HiChatComponent.defaultProps = {
};

export default HiChatComponent;
