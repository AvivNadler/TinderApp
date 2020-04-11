import React from 'react'


const Adjustments = (props) => {
    const Filter={};
     
   
  const  maxiAge=(e)=>{
        Filter.minAge=parseInt(e.target.value);
        
    }

    const miniAge=(e)=> {
        Filter.maxAge=parseInt(e.target.value);

    }
   const setGender=(e)=>{
        Filter.gender = e.target.value;

       
   }
   const FetchDeleteLikedUsers =()=>{
     
        fetch("http://proj.ruppin.ac.il/igroup17/Mobile/server/api/LikedUser/Delete", {
          method: "DELETE"
        })
          .then(res => {
            return res.json();
          })
          .then(
            result => {
            
            },
            error => {}
          );
      };
   

   
  
    return (
        <div>
            
            <h5>Welcome!</h5>
            <div>
                I am looking for meeting <select onChange={setGender} name='gender' required>
                    <option value="">please choose a gender</option>
                    <option value='Female'>Female</option>
                    <option value='Male'>Male</option>
                </select>
            </div><br/>
            <div>
                <input type='text' placeholder='minimum age' onChange={maxiAge}></input><br></br><br></br>
                <input type='text' placeholder='maximum age' onChange={miniAge}></input>


               
            </div>
            <input type="button" value="Done"  onClick={()=>{
                props.Adjustments(Filter);
                FetchDeleteLikedUsers();
                
            }}></input>

        </div>
    )
}
export default Adjustments;
