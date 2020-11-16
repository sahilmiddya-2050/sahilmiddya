import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton,
  Divider,
  Typography,
  Box,
} from "@material-ui/core"
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons"

import avatar from "./pf.jpg"

// Styles
const useStyles = makeStyles(theme => ({
  maeuSliderContent: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}))

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
  },
]

const Navbar = () => {
  const classes = useStyles()

  const [openMobileMenue, setOpenMobileMenue] = useState(false)

  const mobileMenue = (
    <Box
      component="div"
      className={classes.maeuSliderContent}
      onClick={() => setOpenMobileMenue(false)}
    >
      <Avatar src={avatar} alt="Sahil Middya" className={classes.avatar} />
      <Divider />
      <List>
        {menuItems.map((item, index) => {
          return (
            <ListItem
              key={index}
              button
              // onClick={() => setOpenMobileMenue(false)}
            >
              <ListItemIcon className={classes.listItem}>
                {item.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={item.listText}
              />
            </ListItem>
          )
        })}
      </List>
    </Box>
  )

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton
              onClick={() => setOpenMobileMenue(prevState => !prevState)}
            >
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
          </Toolbar>
          <MobilRightMenuSlider
            open={openMobileMenue}
            anchor="right"
            onClose={() => setOpenMobileMenue(false)}
          >
            {mobileMenue}
          </MobilRightMenuSlider>
        </AppBar>
      </Box>
    </React.Fragment>
  )
}

export default Navbar
