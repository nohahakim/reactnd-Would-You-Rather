import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<Fragment>
			<div className="error-block">
				<h1 className="display3 text-center">404 ERROR</h1>
				<h1 className="display4 text-center">
					<Link to="/">Return to the Home Page</Link>
				</h1>
			</div>
		</Fragment>
	);
}

export default PageNotFound;