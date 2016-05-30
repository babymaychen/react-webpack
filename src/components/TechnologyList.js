require('normalize.css/normalize.css');
require('styles/TechnologyList.css');

import React from 'react';
import { Grid, Row, Col, Button, Image, Nav, NavItem } from 'react-bootstrap';

let mayImage = require('../images/mayImage.png');

class TechnologyListComponent extends React.Component {
  render() {
    var mapData = ['css', 'javascript', 'react'];
    var commentNodes = mapData.map(function(comment) {
      return (
        <TechnologyComponent url={comment} key={comment}/>
      );
    });
    return (
      <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              {commentNodes}
            </Col>
            <Col className="hidden-xs hidden-sm" xs={6} md={4}>
              <SideBarComponent />
            </Col>
          </Row>
      </Grid>
    );
  }
}

class TechnologyComponent extends React.Component {
  render() {
    return (
      <section className="technology" id={this.props.url}>
        <div className="techTitle">
          <span>孙小妹技术贴标题</span>
        </div>
        <div className="techInfo">
          <span className="dateSpan">
            <span className="glyphicon glyphicon-time"></span>
            <span className="timeContent">2016.5.27</span>
          </span>
          <span className="commentsSpan">
            <span className="glyphicon glyphicon-comment"></span>
            <span className="commentContent">2</span>
          </span>
        </div>
        <div className="techContent">
          <p>
            Apps - Mac 浏览器 Google Chrome Firefox Opera Safari Safari Technology Preview 编辑图片 Pixelmator Skitch Polarr Photo Editor 3 原型设计 Sketch Adobe Creative Cloud PhotoShop Lightroom »
          </p>
        </div>
        <div className="readMoreBtn">
          <Button>详细阅读</Button>
        </div>
      </section>
    )
  }
}

class SideBarComponent extends React.Component {
  render() {
    return (
      <section className="sideBar">
        <div className="selfIntro">
          <div className="selfImage">
            <Image src={mayImage} circle />
          </div>
          <div className="selfIntroContent">
            孙小妹，原名孙天姝，是一个爱好前端的女程序员，现居沈阳，喜欢运动，喜欢看网球，是费德勒迷
            喜欢随遇而安的生活，是一枚吃货。
          </div>
        </div>
        <SideBarNavComponent />
      </section>
    )
  }
}

class SideBarNavComponent extends React.Component {
  render() {
    return (
      <div className="sideBarNav">
        <hr/>
        <span className="sideBarNavTitle">最受欢迎文章</span>
        <ul className="bs-docs-sidebar" bsStyle="pills">
          <li>
            <a href="#">
              孙小妹技术贴标题
              <span className="sideBarComment">
                <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
                <span className="commentContent">23</span>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              孙小妹技术贴标题
              <span className="sideBarComment">
                <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
                <span className="commentContent">23</span>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              孙小妹技术贴标题
              <span className="sideBarComment">
                <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
                <span className="commentContent">23</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

TechnologyListComponent.defaultProps = {
};

export default TechnologyListComponent;
