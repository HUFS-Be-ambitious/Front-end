import { Link } from 'react-router-dom';
import React,{ useEffect, useState } from 'react';
import Premium from "./premium";
export default function Pointlist(){
    const [Pointlist, setPointList] =useState([]);
    const getPointlist= async()=>{
        const json = await(
            await fetch(
                "http://localhost:8080/data/pointlist.json"
            
        )).json();
        setPointList(json.item);
    };
    useEffect(()=>{
        getPointlist();
    },[]);

    return(
        <div>
            <div className='pointtitle' ><div className='pointword'>프리미엄</div></div>
            <div className="listcontainer">
                {
                    Pointlist.map((list) => {
                        return(
                            <div>
                            <Premium key={list.id}
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