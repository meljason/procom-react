import React from 'react';
import withHeader from '../HOC/withHeader';
import Home from '../Components/Home/Home';

const home = () => {
	return (
		<>
			<Home />
		</>
	);
};

export default withHeader(home);
