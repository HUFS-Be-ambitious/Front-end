import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import Ad from "./advertisement"; 
function DeliveryItems({id,title,price,imgpath}){
    return(
    <div className="itemcontainer">
        <Link to ={`/deliveryposter/${id}`}>
        <img src={imgpath} alt="items"></img>
        <div classNmae="item_title">{title}</div>
        <div classNmae="item_price">{price}원</div>
        </Link>
    </div>)
}
export default DeliveryItems;