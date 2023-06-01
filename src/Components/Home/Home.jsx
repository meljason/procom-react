import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import * as ROUTES from '../../contansts/routes';
import AddIcon from '@mui/icons-material/Add';
import EmployeeView from './EmployeeView/EmployeeView';

const Home = () => {
	const navigate = useNavigate();

	const handleAddEmployee = () => {
		navigate(ROUTES.EMPLOYEE_SUBMITION);
	};
	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '10px',
				}}
			>
				<Typography
					variant='h4'
					sx={{
						textAlign: 'left',
						marginTop: '20px',
					}}
				>
					Employee Management System
				</Typography>
				<Button
					onClick={handleAddEmployee}
					variant='contained'
					startIcon={<AddIcon />}
				>
					Add Employee
				</Button>
			</Box>

			<Box>
				<EmployeeView />
			</Box>
		</Box>
	);
};

export default Home;
