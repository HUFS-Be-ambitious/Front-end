import { Link } from 'react-router-dom';
import React,{ useEffect, useState } from 'react';
import Items from "./items";
export default function Mainitem(){
    const [Pointlist, setPointList] =useState([]);
    const getPointlist= async()=>{
        const json = await(
            await fetch(
                "http://localhost:3000/data/mainitem.json"
            
        )).json();
        setPointList(json.item);
    };
    useEffect(()=>{
        getPointlist();
    },[]);

    return(
        <div>
            <div className='maintitle'><div className='mainword'>진행중인 물품 공구</div></div>
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