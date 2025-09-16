import React from 'react';
import "./Usercard.css";

function Usercard(props) {
  return (
    <div className='user'>
      <p id='username'>{props.name}</p>
      <img id='userimg' src="https://tse1.mm.bing.net/th/id/OIP.xAlA5n2akg5L5Xgdcj8V-wHaJS?pid=Api&P=0&h=180" alt="User" />
      <p id="decs">user description</p>
    </div>
  );
}

export default Usercard;