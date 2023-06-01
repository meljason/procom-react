import React from 'react';
import Form from './Form';
import { Box, Typography } from '@mui/material';

const EmployeeSubmit = () => {
	return (
		<Box sx={{ padding: '10px' }}>
			<Typography
				variant='h4'
				sx={{
					textAlign: 'center',
					marginBottom: '20px',
				}}
				color='primary'
			>
				Employee Submition
			</Typography>
			<Form />
		</Box>
	);
};

export default EmployeeSubmit;
