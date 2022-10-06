import {useState} from "react";
import {data} from "./Profile1"
function App(){
  const [people,setPeople]=useState(data)
  const removePerson=(id)=>{
    let newPerson=people.filter((person) => person.id!==id)
    setPeople(newPerson)
  }
  return(
    <>
    <h3 style={{backgroundColor:"skyblue",color:"navy",fontFamily:"cursive",fontSize:"40px"}}>YOU HAVE {people.length} BIRTHDAY'S TODAY</h3>
    {people.map((person) =>{const{id,name,age,image,location}=person
    return(
      <div className="container" key={id}>
      <img src={image} alt={name} />
      <ul type="square">
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{location}</h3>
      </ul>
      <button className="btn" onClick={() =>removePerson(id)}>DISMISS</button>
      </div>      
    )
  })}
  </>
  )
}
export default App