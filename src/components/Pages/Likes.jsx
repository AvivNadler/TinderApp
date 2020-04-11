import React from 'react'
import Container from 'react-bootstrap/Container'
import UserDetails from '../UserDetails'


const Likes=(params)=> {
    
  
  return (
      <Container>
      <div className='container' style={{height:'70vh'}}>

      <div className='row' style={{height:'70vh'}}>
      

       {params.myLikes.map(item=>{return(
         <div className='col-4' key={item.id} >
           <UserDetails key={item.id} item={item}></UserDetails>
         </div>
       )})}
     

      </div>

  </div>
  </Container>
    )
}
export default Likes;

 