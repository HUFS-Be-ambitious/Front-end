import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
export default function Premium({id,title,price,imgpath}){
    console.log(id)
    return(
    <div className="itemcontainer">
        <Link to ={`/buyposter/${id}`}>
        <img src={imgpath} alt="items"></img>
        <div className="item_title">{title} </div>
        <div className="premium"><div classNmae="item_price">{price}원</div>
        </div>
        </Link>
    </div>)
}