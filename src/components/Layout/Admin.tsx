import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'grid',
			gridTemplateRows: 'auto 1fr',
			gridTemplateColumns: '260px 1fr',
			gridTemplateAreas: '"header header" "sidebar main"',
			minHeight: '100vh',
		},
		header: {
			gridArea: 'header',
		},
		sidebar: {
			gridArea: 'sidebar',
			// borderRight: `1px solid ${theme.palette.divider}`,
		},
		main: {
			gridArea: 'main',
		},
	})
);

const theme = createTheme();

export const AdminLayout = () => {
	const classes = useStyles();
    console.log(classes);
    

	return (
		<ThemeProvider theme={theme}>
			<Box className={classes.root}>
				<Box className={classes.header}>HEADER</Box>
				<Box className={classes.sidebar}>SIDEBAR</Box>
				<Box className={classes.main}>MAIN</Box>
			</Box>
		</ThemeProvider>
	);
};
