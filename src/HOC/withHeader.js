import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const withHeader = (WrappedComponent) => {
	const WithHeader = (props) => {
		const navigate = useNavigate();

		const handleGoHome = () => {
			navigate('/');
		};
		return (
			<>
				<AppBar position='static'>
					<Toolbar>
						<Typography
							variant='h6'
							onClick={handleGoHome}
							sx={{
								cursor: 'pointer',
							}}
						>
							Procom React Interview
						</Typography>
					</Toolbar>
				</AppBar>
				<WrappedComponent {...props} />
			</>
		);
	};

	return WithHeader;
};

export default withHeader;
