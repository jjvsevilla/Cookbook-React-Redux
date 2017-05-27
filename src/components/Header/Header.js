import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { LoadingDots } from '../../common';

const Header = () => {
  return (
		<header>
			<nav className="nav-wrapper">
				<div className="row">
					<div className="col s10 offset-s1">
						<IndexLink to="/" activeClassName="active">Home</IndexLink>
						{" | "}
						<Link to="/courses" activeClassName="active">Courses</Link>
						{" | "}
						<Link to="/about" activeClassName="active">About</Link>
            <LoadingDots interval={ 100 } dots={ 20 } />
					</div>
				</div>
			</nav>
		</header>
  );
};

export default Header;
