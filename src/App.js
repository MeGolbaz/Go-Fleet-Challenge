import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Home from "./Home";
import Main from "./Components/Main";
import SearchBox from './Components/SearchBar/SearchBar';
import Pic from './Components/Pic';
import Background from './Components/Background';
import Info from './Components/Contact';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 500,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
           <Pic />
         </Typography>
        <Typography >
           <Background />
         </Typography>
         <Paper className={classes.paper}>
        <Home />
        <SearchBox />
      </Paper> 
      <Paper className={classes.paper}>
        <Main />
      </Paper>
      <Paper className={classes.paper}>
      <span class="p-34 mb-2 bg-dark text-white">Contact Form</span>
        <Info />
      </Paper>
    </div>
  );
}