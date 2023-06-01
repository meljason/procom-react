import React from 'react';
import withHeader from '../HOC/withHeader';
import EmployeeProfile from '../Components/EmployeeProfile/EmployeeProfile';

const employeeProfile = () => {
	return <EmployeeProfile />;
};

export default withHeader(employeeProfile);
