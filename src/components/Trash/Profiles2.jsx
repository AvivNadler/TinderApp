/* import React, { Component } from 'react';
import ProfileC from './ProfileC';
import Profile from '../../Classes/Profile';
import Button from 'react-bootstrap/Button'
import ProfileCard from '../Trash/ProfileCard';
import ProfilesData from '../Trash/ProfilesData.js';
import Home from '../Trash/Home'



class Profiles extends Component {
    constructor(props) {
        super(props);
        this.state={
            filterProfiles:{...props.Users}

        };
    }
    render() { 
        console.log(this.state.filterProfiles)
        const profileComponents = ProfilesData.map(profile => <ProfileCard key={profile.id} profile={profile}></ProfileCard>) ;       
        return (<div>Profiles Page
            {profileComponents}

            
            
            

        </div>  );
    }
}
 
export default Profiles; */