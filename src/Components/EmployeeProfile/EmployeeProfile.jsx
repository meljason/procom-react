import {
	Box,
	Button,
	List,
	ListItem,
	ListItemIcon,
	Paper,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getEmployeeProfileData } from '../../api/getEmployeeProfileData.api';
import { useNavigate, useParams } from 'react-router';
import { LocationOn } from '@mui/icons-material';
import * as ROUTES from '../../contansts/routes';
import { deleteEmployeeData } from '../../api/deleteEmployeeData.api';

const EmployeeProfile = () => {
	const [employeeDetails, setEmployeeDetails] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const employeeData = await getEmployeeProfileData(id);
				// Process the employeeData or update your component state
				console.log('This is the employee data', employeeData);
				setEmployeeDetails(employeeData);
			} catch (error) {
				// Handle the error if needed
				console.log(error);
			}
		};

		fetchData();
	}, [id]);

	const handleEditProfile = () => {
		console.log('Edit Profile');
		navigate(`/edit/${id}`);
	};

	const handleDeleteProfile = async () => {
		console.log('Delete Profile');

		try {
			await deleteEmployeeData(id).then((res) => navigate(ROUTES.HOME));
		} catch (error) {
			console.log(error);
		}
	};
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
				Employee Profile
			</Typography>
			<Paper elevation={3} sx={{ padding: '20px' }}>
				<Typography variant='h5' sx={{ marginBottom: '20px' }}>
					{employeeDetails.firstName} {employeeDetails.lastName}
				</Typography>

				<Typography variant='h5' sx={{ marginBottom: '20px' }}>
					{employeeDetails.email}
				</Typography>

				<Typography variant='h5' sx={{ marginBottom: '20px' }}>
					{employeeDetails.phoneNumber}
				</Typography>

				<List>
					{employeeDetails.addresses?.map((address, index) => (
						<ListItem key={index} disableGutters>
							<ListItemIcon sx={{ marginRight: '10px' }}>
								<LocationOn />
							</ListItemIcon>
							<Typography variant='body1'>
								{address.streetName}, {address.postalCode},{' '}
								{address.state}, {address.country}
							</Typography>
						</ListItem>
					))}
				</List>

				<Button
					sx={{
						marginTop: '20px',
					}}
					variant='contained'
					color='primary'
					onClick={handleEditProfile}
				>
					Edit Profile
				</Button>

				<Button
					sx={{
						marginTop: '20px',
						marginLeft: '20px',
					}}
					variant='contained'
					color='error'
					onClick={handleDeleteProfile}
				>
					Delete Profile
				</Button>
			</Paper>
		</Box>
	);
};

export default EmployeeProfile;
