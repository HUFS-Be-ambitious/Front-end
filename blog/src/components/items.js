import React, { useState,useEffect } from 'react'
import Ad from "./advertisement"; 
import './style.css';
function Items({title,price,imgpath}){
    return(
    <div className="itemcontainer">
        <img src={imgpath}></img>
        <div classNmae="item_title">제목:{title}</div>
        <div classNmae="item_price">가격:{price}</div>
    </div>)
}
export default Items;