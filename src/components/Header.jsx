import { Typography, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    backgroundColor: 'grey',
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'center',
  },
}));

export default function Header() {

  const classes = useStyles();

    return (
      <header>
        <AppBar position="static" className={classes.header}>
          <Toolbar variant="dense">
            <Typography variant="h6" className={classes.header}>
                A Simple Message Board by Luke Chisnall
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
    );
}

