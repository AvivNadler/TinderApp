import React from 'react'
import UserDetails from '../UserDetails'
import Buttons from '../Buttons'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'



const Matches = (params) => {
    
    return (
            <div className='row'>
            
           {parseInt(params.Users.length)>=parseInt(params.index)+1?<div className='col-12'><UserDetails item={params.Users[params.index]}></UserDetails> <div className='row offset-3' >
                <Buttons  addLiked={params.addLiked} addSuperliked={params.addSuperliked} item={params.Users[params.index]} num={parseInt(params.index)+1}  prevnum={(parseInt(params.index)-1)>=0?(parseInt(params.index)-1):(parseInt(params.index))}></Buttons>
            </div></div>:<div className="offset-3" style={{paddingTop:'50px'}} ><ButtonToolbar>
  <Button variant="danger" disabled>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <span className="sr-only">Loading...</span>
  </Button>
  <Button variant="danger" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
Looking for new users...  </Button>
</ButtonToolbar></div>}
            
           

            </div>

    )
}
export default Matches;

