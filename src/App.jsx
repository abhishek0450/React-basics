import "./styles.css";
import {useState} from 'react'


export default function App() {
  const [name,setName] = useState("")
  const [headingText,setHeadingText] = useState("")
  function handleChange(event){
    setName(event.target.value)
  }
  function hanldeClick(){
    setHeadingText(name)
  }

   
  return (
    <div>
      
<h1>Hello {headingText}</h1>
      <form>
        <input onChange={handleChange} type="text" value={name} placeholder="Enter your Name"  />
        
      
      <button onClick={hanldeClick} type="submit">
          Submit
        </button>
        </form>
    </div>
    
  );
}
