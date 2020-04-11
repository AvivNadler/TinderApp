import React from 'react'
import Container from 'react-bootstrap/Container'
import UserDetails from '../UserDetails'


const Superlikes=(params)=> {
    return (
      <Container>
      <div className='container' style={{height:'70vh'}}>

      <div className='row'>
      

       {params.mySuperlikes.map(item=>{return(
         <div className='col-4' key={item.id} >
           <UserDetails key={item.id} item={item}></UserDetails>
         </div>
       )})}
     

      </div>

  </div>
  </Container>
    )
}
export default Superlikes;

 