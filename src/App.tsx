import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Categories from "./Components/Categories"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));


function App() {
  const classes = useStyles();
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer
          style={{ width: "220px" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}>
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Link to="/Categories" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary={"Categories"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch>
          <Route exact path="/">
            <Container>
              <Typography variant="h3" gutterBottom>
                Home
              </Typography>
            </Container>
          </Route>
          <Route exact path="/Categories">
            <Container>
              <Typography variant="h3" gutterBottom>
                Categories
              </Typography>
              <Categories/>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
