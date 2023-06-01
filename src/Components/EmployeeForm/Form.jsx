import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss';
import { useFormik } from 'formik';
import AddressInput from './AddressInput/AddressInput';
import { submitEmployeeData } from '../../api/submitEmployeeData.api';
import { Box, Button, TextField } from '@mui/material';
import { getEmployeeProfileData } from '../../api/getEmployeeProfileData.api';
import { useNavigate, useParams } from 'react-router';
import { editEmployeeData } from '../../api/editEmployeeData.api';

const Form = ({ edit }) => {
	//https://procom-interview-employee-test.azurewebsites.net/
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (edit) {
			const fetchData = async () => {
				try {
					const employeeData = await getEmployeeProfileData(id);
					// Process the employeeData or update your component state
					console.log('This is the employee data', employeeData);

					formik.setFieldValue('firstName', employeeData.firstName);
					formik.setFieldValue('lastName', employeeData.lastName);
					formik.setFieldValue('email', employeeData.email);
					formik.setFieldValue(
						'phoneNumber',
						employeeData.phoneNumber
					);
					formik.setFieldValue('addresses', employeeData.addresses);
				} catch (error) {
					// Handle the error if needed
					console.log(error);
				}
			};

			fetchData();
		}
	}, [edit]);

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			addresses: [
				{
					streetName: '',
					postalCode: '',
					apartmentNumber: '',
					state: '',
					country: '',
				},
			],
		},
		onSubmit: async (values) => {
			try {
				if (edit) {
					console.log('I am here', values, id);
					await editEmployeeData(values, id).then((res) => {
						navigate('/');
					});
				} else {
					await submitEmployeeData(values).then((res) => {
						navigate('/');
					});
				}

				alert('Employee data submitted successfully');
			} catch (error) {
				// Handle the error
			}
		},
	});

	const addAddress = () => {
		formik.setFieldValue('addresses', [
			...formik.values.addresses,
			{
				streetName: '',
				postalCode: '',
				apartmentNumber: '',
				state: '',
				country: '',
			},
		]);
	};

	const removeAddress = (index) => {
		const updatedAddresses = formik.values.addresses.filter(
			(_, i) => i !== index
		);
		formik.setFieldValue('addresses', updatedAddresses);
	};
	return (
		<Box
			component='form'
			onSubmit={formik.handleSubmit}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '16px',
				maxWidth: '500px',
				margin: '0 auto',
				padding: '24px',
				border: '1px solid #e0e0e0',
				borderRadius: '8px',
			}}
		>
			<TextField
				id='firstName'
				name='firstName'
				label='First Name'
				value={formik.values.firstName}
				onChange={formik.handleChange}
			/>

			<TextField
				id='lastName'
				name='lastName'
				label='Last Name'
				value={formik.values.lastName}
				onChange={formik.handleChange}
			/>

			<TextField
				id='email'
				name='email'
				label='Email'
				value={formik.values.email}
				onChange={formik.handleChange}
			/>

			<TextField
				id='phoneNumber'
				name='phoneNumber'
				label='Phone Number'
				value={formik.values.phoneNumber}
				onChange={formik.handleChange}
				type='text'
			/>

			<div className={styles.formItem}>
				{formik.values.addresses?.map((address, index) => (
					<AddressInput
						key={index}
						address={address}
						index={index}
						handleChange={formik.handleChange}
						removeAddress={removeAddress}
					/>
				))}
			</div>

			<Button
				type='button'
				variant='outlined'
				onClick={addAddress}
				sx={{ marginBottom: '16px' }}
			>
				Add address
			</Button>

			<Button type='submit' variant='contained' color='primary'>
				{`${edit ? 'Edit User' : 'Add User'}`}
			</Button>
		</Box>
	);
};

export default Form;
