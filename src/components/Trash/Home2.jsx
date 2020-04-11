/* import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Col, Row, Form } from "react-bootstrap";
import Profile from '../../Classes/Profile';
import Premium from '../../Classes/Premium';
import Profiles from "./Profiles";
import ProfilesData from "./ProfilesData";
import Likes from './Likes';



const SERVERURL ="http://localhost:49895/api/profile/";

class Home extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          
          Users: ProfilesData.map(item => new Profile(item.id, item.name,item.gender, item.age,item.height, item.city, item.imgSrc, item.premium)),
          gender: 'male',
          minAge:'0',
          maxAge: '100',
          filterProfiles:[],
          Likes: [] 

          // Users: [
          //   {id:0,name:'Gilad Zilberg',gender:'male',age:'28',height:'178',city:'Tel Aviv'},
          //   {id:1,name:'Beyonce knowles',gender:'female',age:'28',height:'178',city:'Los Angeles'}
                //new Profile(0,"Gilad Zilberg",male,28,178,"Tel Aviv","...",True,["Football","Basketball","Volleyball"]),
               // new Profile(1,"Beyonce knowles",female,37,167,"Los Angeles","https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",True,["Sing", "Dance"]),
              //  new Profile(2,"Omer Kimhi",male,28,178,"Tel Aviv","...","Premium", [ "Football","Basketball","Volleyball"]) 

          // ],
        };
        let local = true;
        this.apiUrl = SERVERURL;
        if(!local){
          this.apiUrl = "http://proj.ruppin.ac.il/igroup17/test1/api/profile"
        }
      }

      getItemObjToMove = () => {
        let newItems = this.state.Users.filter(item => item.age>this.state.minAge && item.age<this.state.maxAge && item.gender==this.gender);
        this.setState({
            Uers: newItems

        });
    }



    genderInsert=(e)=>{
        this.setState({
            gender: e.target.value
        });
    }
    minAgeInsert=(e)=>{
        this.setState({
            minAge: parseInt(e.target.value)
        });
    }
    maxAgeInsert=(e)=>{
        this.setState({
            maxAge: parseInt(e.target.value)
        });
    }
    getProfileObjMoveToLikes = (profileIdToMove) => {
        let newUsers = this.state.items.filter(profile => profile.id != profileIdToMove);
        let newLikes = [...this.state.Likes, this.state.Users.filter(profile => profile.id == profileIdToMove)[0]];
        this.setState({
            Users: newUsers,
            Likes: newLikes
        });
    }
    getProfileObjMove = (profileIdToMove) => {
        let newUsers = this.state.items.filter(profile => profile != profileIdToMove);
        this.setState({
            Users: newUsers,
            
        });
    }

    doFilterProfiles = () => {
        let Users2 =this.state.Users;
         let newFilterProfiles = Users2.filter(profile => (profile.age>this.state.minAge && profile.age<this.state.maxAge && profile.gender===this.state.gender));
        this.setState({
            filterProfiles: newFilterProfiles
        })
        return this.filterProfiles;
      }
   

      componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=> res.json())
      .then(json => {
      this.setState({
        isLoaded:true,
        items:json,
      })
      });
      
      }
      render() {
      var {isLoaded, Items} = this.state;
      if(!isLoaded){
        return (<div>Loading</div>)
      }
      else{
        console.log(this.state.filterProfiles);
        
        console.log(this.state.filterProfiles);

        return (
          <div className="App">
            <p>Data has been loaded</p>

            <ul>{this.state.Users.map(item => (
            <li key={item.id}>Name: {item.name} | Age: {item.Age}</li>))}
            </ul>
      
          </div>
        );
      }
      }
      }
    

      export default Home;


      /*     
    render() { 
        return (<Container>
        <Row className="justify-content-md-center">       
         <h1>Welcome to Tinder</h1>
        </Row>
        <Row className="justify-content-md-center"> 
        <h3>Insert the details below to find profiles</h3>
        </Row>
        <Row className="justify-content-md-center"> 
        <input type='text' placeholder='gender' onChange={this.genderInsert}></input>
        </Row><br/>
        <Row className="justify-content-md-center"> 
        <input type='text' placeholder='min age' onChange={this.minAgeInsert}></input>
        </Row><br/>
        <Row className="justify-content-md-center"> 
        <input type='text' placeholder='max age' onChange={this.maxAgeInsert}></input>
        </Row><br/>
        <Row className="justify-content-md-center"> 
        <Button variant='primary' href="/Profiles" onClick={this.filterProfiles} Value='Search' size="lg"></Button>
        </Row>
       

        </Container>  );
  */ 