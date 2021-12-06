import { Typography , Paper} from '@material-ui/core';
import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react';


import {  Card, Avatar, CardContent } from "@material-ui/core";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List , ListItem ,ListItemIcon , ListItemText } from "@material-ui/core";
//import { Instagram } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { makeStyles } from "@mui/styles";
import { CardHeader } from "@material-ui/core";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import { AppBar , Box , Tabs, Tab} from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    justifyContent: "center",
    margin: 20,
    alignSelf: "center",
  },
}));

function ProfilePage(){
    //so , we need to make a profile page which shows the user profile if they're logged in, 
    //otherwise shows the login page. 
    //so if the userid is empty then it displays the login page, otherwise it displays the userprofile- from the userid feature in the
    //db. 
    const auth = useContext(AuthContext);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

   if(!auth.isAuthenticated) return<LoginForm />
    if(auth.isAuthenticated){
     return (
      <div className={classes.root}>
        <Stack spacing={2}>
          <Avatar
            alt="Michael Cohen"
            src="profilPic"
            className={classes.avatar}
          />

          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              centered
            >
              <Tab label="PROFILE" {...a11yProps(0)} />
              <Tab label="SOLD" {...a11yProps(1)} />
              <Tab label="BOUGHT" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Name</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {auth.user.firstName} {auth.user.lastName}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>email</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>hi@gmail.com</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Social Media</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <InstagramIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="https/:" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FacebookIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="https/:" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PinterestIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="https/:" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LinkedInIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="https/:" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <TwitterIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="https/:" />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Bio</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  blah blah blah blah blah blah blah blah blah blah blah blah{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Location</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>New York, New York, 11210</Typography>
              </AccordionDetails>
            </Accordion>
          </TabPanel>
          <TabPanel value={value} index={1}>
            My Buys
          </TabPanel>
          <TabPanel value={value} index={2}>
            Artworks Sold
          </TabPanel>
        </Stack>
      </div>
     );}
    

}

export default ProfilePage;