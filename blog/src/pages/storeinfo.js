import React, { useState,useEffect } from 'react'
import Navigation from "../components/navigation";
import Ad from "../components/advertisement";
function Storeinfo(){
    const [buylist, setmyBuyList] =useState([]);
    const getmybuylist= async()=>{
        const json = await(
            await fetch(
                "http://localhost:3000/data/mybuy.json"
            
        )).json();
        setmyBuyList(json);
        
    };
    const getdeliverylist= async()=>{
        const json = await(
            await fetch(
                "http://localhost:3000/data/post.json"
            
        )).json();
        setmyBuyList(json.item);
        
    };
    useEffect(()=>{
        getmybuylist();
    },[]);
    console.log("ss")
    return(
        <div>
            <Navigation></Navigation>
            가게정보
            <div>
                {buylist}
            </div>
        </div>
    )
}
export default Storeinfo;