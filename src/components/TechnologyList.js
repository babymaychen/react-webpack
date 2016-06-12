require('normalize.css/normalize.css');
require('styles/TechnologyList.css');
var superagent = require('superagent');

import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Markdown from 'react-remarkable';

/*import { mongoose } from 'mongoose';*/
/*import Technology from '../stores/model/Technology';*/

let mayImage = require('../images/mayImage.png');

class TechnologyListComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          technologyList: []
      };
  }
  componentWillMount() {
    superagent.get('http://localhost:8001/getTechnologyList')
      .accept('json')
      .end(function(err, res){
        if (err) throw err;

        this.setState({technologyList: res.body});
        console.log(res.body);

    }.bind(this));
  }
  render() {
    var technologyList = this.state.technologyList;
    var commentNodes = technologyList.map(function(comment) {
      return (
        <TechnologyComponent data={comment} key={comment._id}/>
      );
    });
    return (
      <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              {this.props.children || commentNodes}
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
      <section className="technology" id={this.props.data._id}>
        <div className="techTitle">
          <span>{this.props.data.title}</span>
        </div>
        <div className="techInfo">
          <span className="dateSpan">
            <span className="glyphicon glyphicon-time"></span>
            <span className="timeContent">{this.props.data.time.day}</span>
          </span>
          <span className="commentsSpan">
            <span className="glyphicon glyphicon-comment"></span>
            <span className="commentContent">评论({this.props.data.commentnum})</span>
          </span>
          <span className="readSpan">
            <span className="glyphicon glyphicon-eye-open"></span>
            <span className="readContent">{this.props.data.viewnum}人阅读</span>
          </span>
        </div>
        <div className="techContent">
          <p>
            <Markdown source={this.props.data.listContent} />
          </p>
        </div>
        <div className="readMoreBtn">
          <LinkContainer to={`technologyList/technologyContent/${this.props.data._id}`}>
            <a role="button" className="btn btn-primary">阅读全文</a>
          </LinkContainer>
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
        <span className="sideBarNavTitle">热评文章</span>
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
