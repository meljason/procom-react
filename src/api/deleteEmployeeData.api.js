export const deleteEmployeeData = async (id) => {
	try {
		const response = await fetch(
			`https://procom-interview-employee-test.azurewebsites.net/Employee/${id}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
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
