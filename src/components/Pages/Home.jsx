import React, { Component } from "react";
import User from "../../Classes/User";
import Profile from "./Profile";
import Matches from "./Matches";
import Likes from "./Likes";
import Superlikes from "./Superlikes";
import About from "./About";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import MyNavbar from "../MyNavbar";
import { Col } from "react-bootstrap";

class Home extends Component {
 
  componentDidMount() {
    this.userApiUrl = "http://proj.ruppin.ac.il/igroup17/Mobile/server/api/User/";
    this.likedUserApiUrl = "http://proj.ruppin.ac.il/igroup17/Mobile/server/api/LikedUser/";
    
    this.FetchGetUsers();
   
  }

  constructor(props) {
    super(props);

    this.state = {
      Users: [],
      preferredUsers: [],
      myLikes: [],
      mySuperlikes: [],
      FilterUsers: []
    };
  }

  
  
  FetchGetUsers = () => {
    fetch(this.userApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            Users: result.map(
              item =>
                new User(
                  item.Id,
                  item.Name,
                  item.Age,
                  item.Gender,
                  item.Height,
                  item.City,
                  item.ImgSrc,
                  item.Premium,
                  item.Hobbies
                )
            )
          });
        },
        error => {}
      );
  };
  

  FetchGetLikedUsers = () => {
    fetch(this.likedUserApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            myLikes: result.map(
              item =>
                new User(
                  item.Id,
                  item.Name,
                  item.Age,
                  item.Gender,
                  item.Height,
                  item.City,
                  item.ImgSrc,
                  item.Premium,
                  item.Hobbies
                )
            )
          });
        },
        error => {}
      );
  };

  
  myPreferences = e => {
    this.setState({
      myLikes: [],
      mySuperlikes: [],
      FilterUsers: e,
      preferredUsers: this.state.Users.filter(
        user =>
          user.age > e.minAge && user.age < e.maxAge && user.gender === e.gender
      )
    });
  };
  addLiked = item => {
    const user = {
      Id: item.id,
      Name: item.name,
      Age: item.age,
      Gender: item.gender,
      Height: item.height,
      City: item.city,
      ImgSrc: item.imgSrc,
      Premium: item.premium,
      Hobbies: item.hobbies
    };
    console.log("im user", user.Name);

    fetch(this.likedUserApiUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8"

        //very important to add the 'charset=UTF-8'!!!!
      })
    })
      .then(res => {
        console.log("res=", res);
        return res.json();
      })
      .then(
        result => {
          console.log("fetch POST= ", result);
        },
        error => {
          console.log("err post=", error);
        }
      );

    this.FetchGetLikedUsers();
  };
  addSuperliked = item => {
    this.setState({
      mySuperlikes: this.state.mySuperlikes.concat(item)
    });
  };

  render() {
    return (
      <Col md={{ span: 6, offset: 3 }}>
        <Router>
          <div className="row" style={{}}>
            <div style={{ width: "100%" }}>
              <MyNavbar></MyNavbar>
            </div>
            <div className="col-12">
              <Route path="/profile" exact>
                {
                  <Profile
                    Adj={this.state.Filter}
                    Adjustments={this.myPreferences}
                  ></Profile>
                }
              </Route>
            </div>

            <div className="col-12">
              <Route
                path="/match/:index"
                exact
                strict
                render={({ match }) => (
                  <Matches
                    index={match.params.index}
                    Users={this.state.preferredUsers}
                    addLiked={this.addLiked}
                    addSuperliked={this.addSuperliked}
                  />
                )}
              ></Route>
            </div>
            <div className="col-12">
              <Route
                path="/likes/:index"
                exact
                strict
                render={({ match }) => (
                  <Likes
                    index={match.params.index}
                    myLikes={this.state.myLikes}
                  />
                )}
              ></Route>
            </div>
            <div className="col-12">
              <Route
                path="/superlikes/:index"
                exact
                strict
                render={({ match }) => (
                  <Superlikes
                    index={match.params.index}
                    mySuperlikes={this.state.mySuperlikes}
                  />
                )}
              ></Route>
            </div>
            <div className="col-12">
              <Route path="/about" exact>
                <About></About>
              </Route>
            </div>
          </div>
        </Router>
      </Col>
    );
  }
}
export default Home;
