import { Link } from 'react-router-dom';
import React,{ useEffect, useState } from 'react';
import Items from "./items";
export default function Mainduedelivery(){
    const [Pointlist, setPointList] =useState([]);
    const getPointlist= async()=>{
        const json = await(
            await fetch(
                "http://localhost:3000/data/duedelivery.json"
            
        )).json();
        setPointList(json.item);
    };
    useEffect(()=>{
        getPointlist();
    },[]);

    return(
        <div>
            <div className='maintitle'><div className='mainword'>마감 임박! (지당먹)</div></div>
            <div className="listcontainer">
                {
                    Pointlist.map((list) => {
                        return(
                            <div>
                            <Items key={list.id}
                            id={list.id}
                            title={list.title}
                            price={list.price}
                            imgpath={list.image_path}
                            />
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}