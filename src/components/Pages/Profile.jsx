import React from 'react'
import Adjustments from '../Adjustments'
/* import { Col, Row, Form } from "react-bootstrap"; */


const Profile = (props) => {


  return (
   
    <div style={{ width:'100%', backgroundImage: "url(https://techasli.com/wp-content/uploads/2019/07/The-Most-Romantic-Zodiac-Signs-and-Their-Ranking.jpg?ezimgfmt=rs:741x486/rscb32/ng:webp/ngcb32)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height:'50vh'}}>
   

      <div className='col-8' style={{color:'red', fontWeight:'Bold'}}>
       
        <Adjustments Adjustments={props.Adjustments}></Adjustments>

      </div>
   
      </div>
    
  )
}
export default Profile;
