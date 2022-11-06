import './App.css';
import Profile  from './profile/profile';
import zoubaida from "./pic.jpg"


function App() {
  const list={
    name:"zoubaida",
    bio:"hello i am a student",
    profession:"computer science engineering student ",
    imgurl:zoubaida
        
    }
    const functionalert= (x) =>{
      return alert(`hello my name is ${x}`) 
    }
  return (
   
    <div  style={{backgroundColor: "grey"}} className="App">
      
     <Profile data={list} myfunction={functionalert} ></Profile>
    </div>
  );
}

export default App;
