import { Typography , Paper} from '@material-ui/core';
import React, { Component } from 'react';

class ProfilePage extends React.Component{
    //so , we need to make a profile page which shows the user profile if they're logged in, 
    //otherwise shows the login page. 
    //so if the userid is empty then it displays the login page, otherwise it displays the userprofile- from the userid feature in the
    //db. 
    state={
        user:{},
        userid:'',
    }

componentDidMount(){
    fetch(`api/users/${userid}`)
    .then(res=> {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Content validation');
    })
    .then(data=>{
        this.setState({
            user: data,
        });
    })
}

    render(){

     return(
         <Paper variant="outlined">{this.user.firstName}</Paper>
     )
    }

}

export default ProfilePage;