import { Box, Typography } from '@mui/material';
import React from 'react';
import Form from '../EmployeeForm/Form';

const EmployeeEdit = () => {
	return (
		<Box
			sx={{
				padding: '10px',
			}}
		>
			<Typography
				variant='h4'
				align='center'
				color='primary'
				sx={{ marginBottom: '20px' }}
			>
				Edit Employee
			</Typography>

			<Form edit={true} />
		</Box>
	);
};

export default EmployeeEdit;
