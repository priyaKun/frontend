import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#FFFFFF', // Font color for the title
  },
  appBar: {
    backgroundColor: 'green', // Background color for the AppBar
  },
  button: {
    color: '#FFFFFF', // Font color for the buttons
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Job Board
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button className={classes.button} onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button className={classes.button} onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button className={classes.button} onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button className={classes.button} onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button className={classes.button} onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button className={classes.button} onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button className={classes.button} onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button className={classes.button} onClick={() => handleClick("/applications")}>
                Applications
              </Button>
              <Button className={classes.button} onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button className={classes.button} onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button className={classes.button} onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button className={classes.button} onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;