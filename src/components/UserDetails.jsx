import React from 'react'

const UserDetails = (props) => {
    
    
    
    
    return (
        <div>

            <div className='container' >
                <div className='row'>
                    <div style={{margin:'auto'}}>
                        <img style={{ borderRadius: '10px', objectFit: 'contain', width: '100%', height: '450px' }} src={props.item.imgSrc} alt='userimg'></img>
                    </div>
                </div>
                <div className='row'>
                    <div style={{margin:'auto'}}>
                        <span style={{ fontSize: '1.5rem' }}>{props.item.name}, </span><span style={{ fontSize: '1rem' }}>{props.item.age} </span>
                    </div>
                </div>
                <div className='row'>
                    <div style={{margin:'auto'}}>
                  {/*   <span style={{ fontSize: '1.5rem' }}>
                        Hobbies:{props.item.hobbies.map(hobby => <span>{hobby},</span>)} <br></br></span> */}
                        <span style={{ fontSize: '1rem' }}>Height:{props.item.height} CM,<br></br> </span>
                        <span style={{ fontSize: '1rem' }}>{props.item.city} </span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default UserDetails
