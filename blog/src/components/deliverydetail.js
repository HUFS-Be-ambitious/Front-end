import {useParams } from 'react-router-dom';
import React,{ useEffect, useState } from 'react';
function Deliverydetail(){
    const {id}=useParams();
    const [Post, setPost] =useState([]);
    const [Comment, setComment] =useState([]);
    const getPost= async()=>{
        const data = await(
            await fetch(
                "http://localhost:3000/data/deliverypostdetail.json"
            
        )).json();
        setPost(data.item.find((Post)=>Post.id==id));
       
    };
    useEffect(()=>{
        getPost();
    },[]);
    console.log(Post)
    
    var price= parseInt(Post.price/Post.done_num)
    return(
        <div>
        <div className='itemposter'>
            <img src="/img/test2.jpg"></img>
            <div className='postertext'>
            <div>{Post.title} </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div>  모집인원: {Post.done_num}명</div>
            <br></br>
            <div>  현재인원: {Post.present_num}명</div>
            <br></br>
            <div>  마감시간: {Post.endTime}</div>
            <br></br>
            <div>  {Post.host_id}님이 모집중입니다</div>
            <br></br>
            <div> 가게이름: 모현각</div>
            <br></br>
            <div>  매너온도: {Post.mannerscore}</div>
            <br></br>
            <button className='endbutton' type="submit">메뉴보기</button>
            <button className='endbutton' onClick={() => alert("공구 완료되었습니다")}>공구 완료</button>
            </div>
        </div>
        <div className='postcontent'>{Post.content}</div>
        <div className='comment'>
            <br></br>
            <div className='commenttitle'>전체 댓글</div>
            <hr></hr>
            <div>어디서 만나실건가요?</div>
            <hr></hr>
            <div>여기서 구매해 보셨나요?</div>
            <hr></hr>
            <div>여기 맛있은데 같이 시켜요</div>
            <hr></hr>
        </div>
        <form>
            <input className="CommentInsert" placeholder="댓글 작성"  
            />
            <button type="submit">
                작성
            </button>
        </form>
        </div>
    )
}
export default Deliverydetail;