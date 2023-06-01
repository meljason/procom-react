export const submitEmployeeData = async (values) => {
	try {
		values.addresses = values.addresses.map((address) => ({
			...address,
			apartmentNumber: parseInt(address.apartmentNumber, 10),
		}));

		const response = await fetch(
			'https://procom-interview-employee-test.azurewebsites.net/Employee',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			}
		);

		if (!response.ok) {
			throw new Error('Failed to submit this data');
		}

		return response.json();
	} catch (error) {
		console.error('Error in the form', error);
		throw error;
	}
};
