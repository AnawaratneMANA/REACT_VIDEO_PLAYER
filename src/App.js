import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Container, Typography} from "@material-ui/core";
import ReactPlayer from "react-player";
function App() {
  return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6">React Video Player</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar/>
        <Container maxWidth="md">
            <ReactPlayer
            url="https://www.youtube.com/watch?v=wGixQPuG1GY"
            muted={false}
            playing={true}
            />
        </Container>
      </React.Fragment>
  );
}

export default App;
