import React, { Component } from "react";
import * as muiCore from "@material-ui/core";
import * as muiStyles from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";

const theme = muiStyles.createMuiTheme({
  palette: {
    primary: muiCore.colors.pink,
    secondary: muiCore.colors.deepOrange
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    console.log(`Rendering: isOpen ${this.props.drawerOpen}`);
    return (
      <muiStyles.MuiThemeProvider theme={theme}>
        <div className="App">
          <muiCore.AppBar color="primary" position="fixed">
            <muiCore.Toolbar
              variant="dense"
              classes={{ root: this.props.classes.root }}
            >
              <muiCore.IconButton
                color="inherit"
                onClick={this.props.onToggleDrawerOpen}
              >
                <MenuIcon />
              </muiCore.IconButton>
              <muiCore.Typography variant="h6" color="inherit">
                Posts
              </muiCore.Typography>
            </muiCore.Toolbar>
          </muiCore.AppBar>
          <muiCore.Drawer
            variant="persistent"
            anchor="left"
            open={this.props.drawerOpen}
          >
            Children
          </muiCore.Drawer>
        </div>
      </muiStyles.MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  drawerOpen: state.drawer.open
});

const mapDispatchToProps = dispatch => ({
  onToggleDrawerOpen: () => {
    console.log("TOGGLED");
    dispatch({ type: "TOGGLE_DRAWER_OPEN" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(muiStyles.withStyles({ root: { marginLeft: "100px" } })(App));
