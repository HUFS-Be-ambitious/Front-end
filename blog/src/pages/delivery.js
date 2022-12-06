import React, { useState,useEffect } from 'react'
import Navigation from "../components/navigation";
import Ad from "../components/advertisement";
import DeliveryItems from '../components/deliveryitems';
import { Link } from 'react-router-dom';
function Delivery(){    
    const [buylist, setBuyList] =useState([]);
    const getbuylist= async()=>{
        const json = await(
            await fetch(
                "http://43.200.162.100/deliverypost/list"
            
        )).json();
        setBuyList(json.content);
    };
    useEffect(()=>{
        getbuylist();
    },[]);
    return(
      <div>
        <Navigation></Navigation>

            <Ad/>
            <div className="buytitle">
                <div className="buyword">당신을 위한 배달음식</div>
                <div className="postbutton"><div>글쓰러가기</div> <Link Link to ="/deliverypost"><img src='\img\right.png'></img></Link></div>
                </div>
            <div className="buytitle">
                <div className='category' ><ul><li>한식</li><li>양식</li><li>중식</li><li>일식</li></ul>
                </div>
                </div>
            <div className="listcontainer">
                {
                    buylist.map((list) => {
                        return(
                            <DeliveryItems key={list.id}
                            id={list.id}
                            title={list.title}
                            price={list.price}
                            imgpath={list.image_path}
                            />
                        )
                    })
                }
            </div>
            <div className="buy_bottom">
                <div className="buyword">먹고싶은게 없으신가요?</div>
                <div className="postbutton"><div>글쓰러가기</div> <img src='\img\right.png'></img></div>
                </div>
            
            
        </div>
    )
}
export default Delivery;