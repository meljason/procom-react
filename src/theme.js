import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#f50057',
		},
		background: {
			default: 'linear-gradient(to bottom right, #e1f5fe, #b3e5fc)',
			paper: '#ffffff',
		},
		text: {
			primary: '#333333',
			secondary: '#666666',
		},
	},
	typography: {
		fontFamily: 'Roboto, Arial, sans-serif',
	},
	shape: {
		borderRadius: 8,
	},
});
