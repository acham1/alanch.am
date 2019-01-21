import React, { Component } from "react";
import * as muiCore from "@material-ui/core";
import * as muiStyles from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

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
