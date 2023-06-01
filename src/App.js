import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './Components/EmployeeForm/Form';
import {
	EmployeeEdit,
	EmployeeProfile,
	EmployeeSubmition,
	Home,
} from './pages';
import * as ROUTES from './contansts/routes';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route
					path={ROUTES.EMPLOYEE_SUBMITION}
					element={<EmployeeSubmition />}
				/>
				<Route
					path={ROUTES.EMPLOYEE_VIEW}
					element={<EmployeeProfile />}
				/>

				<Route path={ROUTES.EMPLOYEE_EDIT} element={<EmployeeEdit />} />
			</Routes>
		</Router>
	);
};

export default App;
