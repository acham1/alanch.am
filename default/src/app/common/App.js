import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as colors from "@material-ui/core/colors";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: colors.amber
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar color="primary" position="fixed">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Title
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
