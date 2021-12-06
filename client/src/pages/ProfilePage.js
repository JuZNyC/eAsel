import { Typography , Paper} from '@material-ui/core';
import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react';




function ProfilePage(){
    //so , we need to make a profile page which shows the user profile if they're logged in, 
    //otherwise shows the login page. 
    //so if the userid is empty then it displays the login page, otherwise it displays the userprofile- from the userid feature in the
    //db. 
    const auth = useContext(AuthContext);

   if(!auth.isAuthenticated) return<LoginForm />
    if(auth.isAuthenticated){
     return (
       <div>
         <Paper variant="outlined">
           {auth.user.firstName} {auth.user.lastName}
           {auth.user.firstName} {auth.user.lastName}
         </Paper>
       </div>
     );}
    

}

export default ProfilePage;