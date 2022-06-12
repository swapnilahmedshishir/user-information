import './App.css';
import React,{useState} from "react";
import fackData from './FackData/data.json';
import Body from './Component/BodyPart/Body';
import Header from './Component/Header/Header';
function App() {
  const [FackData] = useState(fackData);
 
    const[addFriend , setaddFriend] = useState([]);
      const addFriendData = (friend) =>{
        const newFriend = [...addFriend, friend];
        setaddFriend(newFriend);
      }
  return (
    <div className="App">
      <header className="header-part">
      <Header friendDataSend={addFriend}></Header>
     
      </header>
      <div className="body_part">
          <div  className="card">
            {
            FackData.map(data => <Body key={data._id} fackData={data} addFriendData={addFriendData}></Body>)
            }
          </div>
      </div>
     
    </div>
  );
}

export default App;
