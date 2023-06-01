import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const AddressInput = ({ index, address, handleChange, removeAddress }) => {
	return (
		<Box
			key={index}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '16px',
				maxWidth: '500px',
				margin: '10px 0',
				padding: '24px',
				border: '1px solid #e0e0e0',
				borderRadius: '8px',
			}}
		>
			<Typography variant='subtitle1'>Address {index + 1}</Typography>

			<TextField
				type='text'
				placeholder='Street Name'
				onChange={handleChange}
				name={`addresses[${index}].streetName`}
				value={address.streetName}
			/>
			<TextField
				type='text'
				placeholder='Postal Code'
				onChange={handleChange}
				name={`addresses[${index}].postalCode`}
				value={address.postalCode}
			/>
			<TextField
				type='text'
				placeholder='Apartment Number'
				onChange={handleChange}
				name={`addresses[${index}].apartmentNumber`}
				value={address.apartmentNumber}
			/>
			<TextField
				type='text'
				placeholder='State'
				onChange={handleChange}
				name={`addresses[${index}].state`}
				value={address.state}
			/>
			<TextField
				type='text'
				placeholder='Country'
				onChange={handleChange}
				name={`addresses[${index}].country`}
				value={address.country}
			/>

			<Button
				type='button'
				variant='outlined'
				onClick={() => removeAddress(index)}
				sx={{ marginTop: '8px' }}
			>
				Delete Address
			</Button>
		</Box>
	);
};

export default AddressInput;
