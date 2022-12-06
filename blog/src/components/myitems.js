import { Link } from 'react-router-dom';
import React,{ useEffect, useState } from 'react';
import Items from "./items";
import {useParams } from 'react-router-dom';
import Modal from '../components/modal';
export default function Myitems({id,title,presentNum,doneNum}){
    const [signup, setSignup] = useState(false);
    
    return(
    <div >
        <hr></hr>
        <div className='myitemcontainer'>
            <div className='myitemtitle'>{title}</div>
            <div className='myitemnum'>{presentNum}</div>
            <div className='myitemstate'>진행중</div>   
        </div> 
    </div>    
    )
}