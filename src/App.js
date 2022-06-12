import './App.css';
import React,{useState} from "react";
import fackData from './FackData/data.json';
import Body from './Component/BodyPart/Body';
import Header from './Component/Header/Header';
function App() {
  const [FackData] = useState(fackData);
 

  return (
    <div className="App">
      <header className="header-part">
      <Header></Header>
     
      </header>
      <div className="body_part">
          <div  className="card">
            {
            FackData.map(data => <Body fackData={data}></Body>)
            }
          </div>
      </div>
     
    </div>
  );
}

export default App;
