export const editEmployeeData = async (data, id) => {
	try {
		console.log('This is the editEmployeeData.api.js file', data, id);
		const response = await fetch(
			`https://procom-interview-employee-test.azurewebsites.net/Employee/${id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
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
