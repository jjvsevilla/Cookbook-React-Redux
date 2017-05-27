import React, { PropTypes } from 'react';

const PageContainer = ({ title, children }) => {
  return (
    <div className="row">
      <div className="col s10 offset-s1">
        <h1>{ title }</h1>
        { children }
      </div>
    </div>
  );
};

PageContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default PageContainer;
