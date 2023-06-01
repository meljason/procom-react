import React from 'react';
import withHeader from '../HOC/withHeader';
import EmployeeEdit from '../Components/EmployeeEdit/EmployeeEdit';

const employeeEdit = () => {
	return <EmployeeEdit />;
};

export default withHeader(employeeEdit);
