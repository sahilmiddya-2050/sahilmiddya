import React from "react"
import { Box, Typography, Avatar, Grid, Divider } from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"
import avatar from "./pf.jpg"

// Styles
const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    // margin: "1rem auto",
  },
  title: {
    color: "tomato",
  },
  subTitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Sahil Middya" />
      </Grid>
      <Typography className={classes.title} varient="h1">
        Sahil Middya
      </Typography>
      <Divider />
      <Typography className={classes.subTitle} varient="h4">
        MERN Stack developer
      </Typography>
    </Box>
  )
}

export default Header
