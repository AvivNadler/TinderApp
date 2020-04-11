/* import React from 'react';


export default function ProfileC(props) {
    let { profile } = props;

   return (        <div>
        <li
            key={profile.id}
            style={{
                padding: 10,
                flex: 1,
                border: '2px solid black',
                borderRadius: 15
            }}
            onClick={() => props.sendProfileObjToMoveFromProfileC(profile)}
        >
            {profile.show()}
            <img src={profile.imgSrc} style={{ width: 100, height: 100 }} alt='img' />
        </li>
    </div> );
}
 
 */