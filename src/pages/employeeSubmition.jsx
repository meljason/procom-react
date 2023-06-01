import React from 'react';
import EmployeeSubmit from '../Components/EmployeeForm/EmployeeSubmit';
import withHeader from '../HOC/withHeader';

const employeeSubmition = () => {
	return <EmployeeSubmit />;
};

export default withHeader(employeeSubmition);
