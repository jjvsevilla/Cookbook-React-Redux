import React, { Component } from 'react';
import { Link } from 'react-router';

export class NotFoundPage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>not found page</h1>  
        <Link to="/" className="btn btn-primary btn-lg">go to home page</Link>
      </div>
    );
  }
}
