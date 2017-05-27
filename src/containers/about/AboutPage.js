import React, { Component } from 'react';
import { Link } from 'react-router';
import { PageContainer } from '../../common';

export class AboutPage extends Component {
  render() {
    return (
      <PageContainer title="About Page">
        <div className="jumbotron">
          <Link to="/" className="btn btn-primary btn-lg">go to home page</Link>
        </div>
      </PageContainer>
    );
  }
}
