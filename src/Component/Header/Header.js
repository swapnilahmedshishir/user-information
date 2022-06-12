import React from 'react';

const Header = (props) => {
     
    const reciveData = props.friendDataSend;
    let salaryTotal = 0;
    console.log(reciveData);
    for (let i = 0; i < reciveData.length; i++) {
        const newReciveData = reciveData[i];
       salaryTotal += newReciveData.balance;
        console.log(newReciveData.name);
        
        
    }

 const haderStyle = {
    color:"#af1ad4",
 }
    return (
        <div>
            <h3 style={haderStyle}>User Data information</h3>
            <h4>Add friend :{reciveData.length} </h4>
            <h4>Friend Total salary : ${salaryTotal}</h4>
        </div>
    );
};

export default Header;