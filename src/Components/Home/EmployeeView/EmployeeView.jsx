import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	ListItemIcon,
	Typography,
	styled,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getEmployeeData } from '../../../api/getEmployeeData.api';

import PhoneIcon from '@mui/icons-material/Phone';

import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router';

const EmployeeView = () => {
	const [employeeList, setEmployeeList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const employeeData = await getEmployeeData();
				// Process the employeeData or update your component state
				console.log('This is the employee data', employeeData);
				setEmployeeList(employeeData);
			} catch (error) {
				// Handle the error if needed
				console.log(error);
			}
		};

		fetchData();
	}, []);

	const handleViewEmployee = (employeeId) => {
		console.log(employeeId);
		navigate(`/profile/${employeeId}`);
	};
	return (
		<Box
			sx={{
				padding: '10px',
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				maxWidth: '1200px',
			}}
		>
			{employeeList.map((employee, index) => (
				<Card
					variant='outlined'
					sx={{
						maxWidth: 345,
						margin: '10px auto',
					}}
					key={index}
				>
					<CardContent>
						<Typography variant='h5' component='div'>
							{employee.firstName} {employee.lastName}
						</Typography>
						<Typography
							sx={{ mb: 0.5, display: 'flex' }}
							color='text.secondary'
						>
							<MailIcon sx={{ mr: 0.5, color: '#000' }} />
							{employee.email}
						</Typography>
						<Box sx={{ mb: 1.5, display: 'flex', color: '#000' }}>
							<PhoneIcon
								sx={{ mr: 0.5 }}
								color='text.secondary'
							/>
							{employee.phoneNumber}
						</Box>
						<Typography variant='h6' component='div'>
							Addresses
						</Typography>
						{employee.addresses.map((address, index) => (
							<Typography
								key={index}
								variant='body1'
								component='div'
								color='text.secondary'
								sx={{ display: 'flex', alignItems: 'center' }}
							>
								<ListItemIcon>
									<span
										style={{
											fontSize: '1.25rem',
											marginRight: '0.5rem',
										}}
									>
										&bull;
									</span>
								</ListItemIcon>
								{address.streetName}, {address.postalCode},{' '}
								{address.state}, {address.country}
							</Typography>
						))}
					</CardContent>
					<CardActions>
						<Button
							size='small'
							onClick={() => handleViewEmployee(employee?.id)}
						>
							View Employee
						</Button>
					</CardActions>
				</Card>
			))}
		</Box>
	);
};

export default EmployeeView;
