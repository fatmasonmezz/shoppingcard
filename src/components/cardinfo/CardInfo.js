import React from 'react';
import "./cardInfo.css";

function CardInfo({info}) {
  return (
    <div style={{textAlign:"center", fontSize:"20px",color:"#fff"}}>{info}</div>
  )
}

export default CardInfo