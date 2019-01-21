import React, { Component } from "react";
import * as muiCore from "@material-ui/core";
import * as muiStyles from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

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
    return (
      <muiStyles.MuiThemeProvider theme={theme}>
        <div className="App">
          <muiCore.AppBar color="primary" position="fixed">
            <muiCore.Toolbar variant="dense">
              <muiCore.IconButton color="inherit" onClick={console.log}>
                <MenuIcon />
              </muiCore.IconButton>
            </muiCore.Toolbar>
          </muiCore.AppBar>
        </div>
      </muiStyles.MuiThemeProvider>
    );
  }
}

export default App;
