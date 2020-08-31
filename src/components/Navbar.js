import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { makeStyles } from '@material-ui/core/styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static" >
      <Container>
        <Toolbar>
          <Typography className={classes.logo} >
            <MusicNoteIcon className={classes.logoIcon} />
          Song Recommender
        </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1f1f1f"
  },
  logoIcon: {
    fontSize: 27
  },
  logo: {
    fontSize: 23,
    fontWeight: 800,
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
    flexGrow: 1,
    '&:hover': { opacity: "0.8" }
  },
}));

export default Navbar;