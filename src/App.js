import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Button, Container, Typography} from "@material-ui/core";
import ReactPlayer from "react-player";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";
import PlayArrow from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
const useStyles = makeStyles({
    playerWrapper: {
        width: "100%",
        position: "relative"
    },

    controlWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 1,
    }
})

function App() {
    const classes = useStyles();
  return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6">React Video Player</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar/>
          <Container maxWidth="md">
              <div className={classes.playerWrapper}>
                  <ReactPlayer
                      width={"100%"}
                      url="https://www.youtube.com/watch?v=wGixQPuG1GY"
                      muted={true}
                      playing={true}
                  />
                  <div className={classes.controlWrapper}>
                      <Grid container direction="row" alignItems="center" justify ="space-between" style={{padding: 16}}>
                          <Grid item>
                            <Typography variant="h5" style={{color: "#fff"}}>Video Title</Typography>
                          </Grid>
                          <Grid item>
                              <Button
                                  variant="contained"
                                  color="primary"
                                  startIcon={<BookmarkIcon/>}
                              > Bookmark

                              </Button>
                          </Grid>
                      </Grid>
                      <Grid container direction="row" alignItems="center" justify="center">
                          <IconButton className={classes.controlIcons} aria-label="reqind">
                                <FastRewindIcon fontSize="inherit"/>
                          </IconButton>

                          <IconButton className={classes.controlIcons} aria-label="reqind">
                                <PlayArrow fontSize="inherit"/>
                          </IconButton>

                          <IconButton className={classes.controlIcons} aria-label="reqind">
                                <FastForwardIcon fontSize="inherit"/>
                          </IconButton>
                      </Grid>
                  </div>
              </div>
          </Container>
      </React.Fragment>
  );
}

export default App;
