import React, { Component, PropTypes } from 'react';
import { Header, Footer } from '../../components';

export class App extends Component {
  render() {
    return (
			<div id="app-container">
        <Header />
        <main>
          { this.props.children }
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};
