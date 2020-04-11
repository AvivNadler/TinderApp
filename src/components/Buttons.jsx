import React from 'react'
import {withRouter} from 'react-router-dom'



const Buttons = (props) => {
  
    return (
        <div className='row'>
            <button style={{border:'none'}} onClick={()=>{
                
                props.history.push('/match/'+props.num)
              
                
            }} 
            ><img  src="https://i.imgur.com/mDfQdsQ.png" alt="Unlike"></img></button>&nbsp;
            <button style={{border:'none'}} onClick={()=>{
                
                props.history.push('/match/'+props.prevnum)
              
                
            }} 
            ><img  src="https://i.imgur.com/V7AnZAy.png" alt="Rewind"></img></button>&nbsp;

            <button style={{border:'none'}} onClick={()=>{
                props.history.push('/match/'+props.num)
                
                props.addSuperliked(props.item)
            }} ><img src="https://i.imgur.com/oOscsSj.png" alt="SuprLike"></img></button>&nbsp;

            <button style={{border:'none'}} onClick={()=>{
                props.history.push('/match/'+props.num)
                
                props.addLiked(props.item)
            }} ><img src="https://i.imgur.com/qHRvdx9.png" alt="Like"></img></button>
            </div>

    )
}
export default withRouter(Buttons)
