import React, { Component } from 'react';
import { Link } from 'react-router';
import { PageContainer } from '../../common';

export class NotFoundPage extends Component {
  render() {
    return (
      <PageContainer title="Page not found">
        <div className="jumbotron">
          <Link to="/" className="btn btn-primary btn-lg">go to home page</Link>
        </div>
      </PageContainer>
    );
  }
}
