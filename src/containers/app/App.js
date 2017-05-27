import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header, Footer } from '../../components';

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

@connect(mapStateToProps)
export class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  };

  render() {
    return (
			<div id="app-container">
        <Header loading={ this.props.loading } />
        <main>
          { this.props.children }
        </main>
        <Footer />
      </div>
    );
  }
}
