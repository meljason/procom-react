import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss';
import { Axios } from 'axios';

const Form = () => {
	//https://procom-interview-employee-test.azurewebsites.net/

	const [formData, setFormData] = useState({
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
	});

	const { firstName, lastName, email, phoneNumber, addresses } = formData;

	const handleChange = (e) => {
		console.log(e.target.value);

		let name = e.target.name;
		let value = e.target.value;

		console.log("name.startWith('address')", name.startsWith('address'));

		if (name?.startsWith('address')) {
			const addressName = name?.split('-')[1];
			const addressIndex = Number(name?.split('-')[2]);

			console.log('This is the formData', formData);

			if (addressName === 'apartmentNumber') {
				console.log('This is the apartment numner', value);
				setFormData((prevFormData) => ({
					...prevFormData,
					addresses: prevFormData?.addresses?.map(
						(address, index) => {
							return index === addressIndex
								? {
										...address,
										[addressName]: Number(value),
								  }
								: address;
						}
					),
				}));
			} else {
				setFormData((prevFormData) => ({
					...prevFormData,
					addresses: prevFormData?.addresses?.map(
						(address, index) => {
							console.log(
								'inside',
								address,
								typeof index,
								addressIndex
							);
							return index === addressIndex
								? {
										...address,
										[addressName]: value,
								  }
								: address;
						}
					),
				}));
			}
		} else {
			setFormData({
				...formData,
				[name]: value,
			});
		}
	};

	useEffect(() => {
		console.log('This is my form data', formData);
	}, [formData]);

	const addAddress = () => {
		setFormData({
			...formData,
			addresses: [
				...formData.addresses,
				{
					streetName: '',
					postalCode: '',
					apartmentNumber: '',
					state: '',
					country: '',
				},
			],
		});
	};

	const removeAddress = (index) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			addresses: prevFormData.addresses?.filter((_, i) => i !== index),
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log('I am insiude handleSubmit');

		try {
			const response = await fetch(
				'https://procom-interview-employee-test.azurewebsites.net/Employee',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			);

			console.log('This is the response', response);

			if (!response.ok) {
				throw new Error('Failed to submit this data');
			}
		} catch (error) {
			console.error('Error in the form', error);
		}
	};
	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className={styles.formItem}>
				<label htmlFor='firstName'>First Name</label>
				<input
					type='text'
					placeholder='First Name'
					onChange={(e) => handleChange(e)}
					name='firstName'
					value={firstName}
				/>
			</div>
			<div className={styles.formItem}>
				<label htmlFor='lastName'>Last Name</label>
				<input
					type='text'
					placeholder='Last Name'
					onChange={(e) => handleChange(e)}
					name='lastName'
					value={lastName}
				/>
			</div>
			<div className={styles.formItem}>
				<label htmlFor='email'>Email Address</label>
				<input
					type='text'
					placeholder='Email Address'
					onChange={(e) => handleChange(e)}
					name='email'
					value={email}
				/>
			</div>
			<div className={styles.formItem}>
				<label htmlFor='phoneNumber'>Phone Number</label>
				<input
					type='tel'
					placeholder='Phone Number'
					onChange={(e) => handleChange(e)}
					name='phoneNumber'
					value={phoneNumber}
				/>
			</div>
			<div className={styles.formItem}>
				{addresses?.map((address, index) => (
					<div key={index}>
						<label htmlFor={`address-${index}`}>
							Address {index + 1}
						</label>
						<div
							className={styles.address_input}
							id={`address-${index}`}
						>
							<input
								type='text'
								placeholder='Street Name'
								onChange={(e) => handleChange(e)}
								name={`address-streetName-${index}`}
								value={address['streetName']}
							/>
							<input
								type='text'
								placeholder='Postal Code'
								onChange={(e) => handleChange(e)}
								name={`address-postalCode-${index}`}
								value={address['postalCode']}
							/>
							<input
								type='number'
								placeholder='Apartment Number'
								onChange={(e) => handleChange(e)}
								name={`address-apartmentNumber-${index}`}
								value={address['apartmentNumber']}
							/>
							<input
								type='text'
								placeholder='State'
								onChange={(e) => handleChange(e)}
								name={`address-state-${index}`}
								value={address['state']}
							/>
							<input
								type='text'
								placeholder='Country'
								onChange={(e) => handleChange(e)}
								name={`address-country-${index}`}
								value={address['country']}
							/>
						</div>
						<div
							className={styles.remove_btn}
							onClick={() => removeAddress(index)}
						>
							Delete
						</div>
					</div>
				))}
			</div>

			<div onClick={addAddress} className={styles.add_address_btn}>
				Add address
			</div>

			<button className={styles.submit_btn} type='submit'>
				Submit
			</button>
		</form>
	);
};

export default Form;
