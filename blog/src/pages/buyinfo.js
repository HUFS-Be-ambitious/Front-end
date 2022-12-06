import React, { useState,useEffect } from 'react'
import Navigation from "../components/navigation";
import Ad from "../components/advertisement";
import Myitems from '../components/myitems';
import Doneitems from '../components/doneitem';
function Buyinfo(){
    const [buylist, setmyBuyList] =useState([]);
    const [deliverylist, setmydeliveryList] =useState([]);
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
                "http://localhost:3000/data/mybuy.json"
        )).json();
        setmydeliveryList(json);   
    };
    useEffect(()=>{
        getmybuylist();
    },[]);
    useEffect(()=>{
        getdeliverylist();
    },[]);
    return(
        <div>
            <Navigation></Navigation>
            <div className='buyinfotitle'>참여중인 공구-공구</div>
            <div style={{display:"flex",fontSize:"20px"}}><div>제목</div><div style={{marginLeft:"410px"}}>남은인원</div><div style={{marginLeft:"410px"}}>현재상황</div></div>
            {
                      deliverylist.map((list) => {
                          return(
                              <Myitems key={list.id}
                              id={list.id}
                              title={list.title}
                              presentNum={list.presentNum}
                              doneNum={list.doneNum}
                            />
                        )
                      })
                  }
            <div className='buyinfotitle'>참여중인 공구-배달</div>
            <div style={{display:"flex",fontSize:"20px"}}><div>제목</div><div style={{marginLeft:"410px"}}>남은인원</div><div style={{marginLeft:"410px"}}>현재상황</div></div> 
            {
                      buylist.map((list) => {
                          return(
                              <Myitems key={list.id}
                              id={list.id}
                              title={list.title}
                              presentNum={list.presentNum}
                              doneNum={list.doneNum}
                            />
                        )
                      })
            }
            <div className='buyinfotitle'>완료된 공구</div>
            <div style={{display:"flex",fontSize:"20px"}}><div>제목</div><div style={{marginLeft:"410px"}}>남은인원</div><div style={{marginLeft:"410px"}}>현재상황</div></div> 
            {
                      buylist.map((list) => {
                          return(
                              <Doneitems key={list.id}
                              id={list.id}
                              title={list.title}
                              presentNum={list.presentNum}
                              doneNum={list.doneNum}
                            />
                        )
                      })
            }         
        </div>
        
        
    )
}
export default Buyinfo;