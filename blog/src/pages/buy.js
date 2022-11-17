import React, { useState,useEffect } from 'react'
import Navigation from "../components/navigation";
import Ad from "../components/advertisement";
import Items from '../components/items';
import './style.css';
function Buy(){
    const [buylist, setBuyList] =useState([]);
    const getbuylist= async()=>{
        const json = await(
            await fetch(
                "http://localhost:3000/data/post.json"
            
        )).json();
        setBuyList(json.item);
    };
    useEffect(()=>{
        getbuylist();
    },[]);
    console.log(buylist);
    return(
      <div>
            <Navigation>
            </Navigation>
            <Ad/>
            <div className="buytitle"><div className="buyword">당신을 위한 공동구매</div></div>
            <div className="listcontainer">
                {
                    buylist.map((list) => {
                        return(
                            <Items key={list.id}
                            title={list.title}
                            price={list.price}
                            imgpath={list.image_path}
                            />
                        )
                    })
                }
            </div>
            
        </div>
    )
}
export default Buy;