import React from 'react';
import './Body.css';
const Body = (props) => {
    //console.log(props.addFriendData);
    //let UserData = 
    let {name ,email,picture,phone,company,balance} = props.fackData;
    const reciveFriend = props.addFriendData ;
    return (
        <div className="body_data">
            <div className="left-part">
             <img className="img_style" src={picture} alt=""/>
            </div>
            <div className="right-part">
                <ul>
                    <li>Name : {name}</li>
                    <li>Email : {email}</li>
                    <li>Phone : {phone}</li>
                    <li>Company : {company}</li>
                    <li>Salary : ${balance}</li>
                </ul>
                
                <button onClick={() => reciveFriend(props.fackData)}>Add Friend</button>
            </div>
        </div>
    );
};

export default Body;