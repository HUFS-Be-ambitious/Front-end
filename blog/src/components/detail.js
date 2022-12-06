import {useParams } from 'react-router-dom';
import React,{ useEffect, useState } from 'react';
function Detail(){
    const {id}=useParams();
    const [Post, setPost] =useState([]);
    const [Comment, setComment] =useState([]);
    const getPost= async()=>{
        const data = await(
            await fetch(
                "http://localhost:3000/data/postdetail.json"
            
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
            <img src={Post.image_path}></img>
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
            <div>가격: {Post.price}원</div>
            <br></br>
            <div>인당비용: {price}원</div>
            <br></br>
            <div>  {Post.host_id}님이 모집중입니다</div>
            <br></br>
            <div>  매너온도 {Post.mannerscore}</div>
            <br></br>
            <button className='endbutton' onClick={() => alert("공구 완료되었습니다")}>공구 완료</button>
            </div>
        </div>
        <div className='postcontent'>{Post.content}</div>
        <div className='comment'>
            <br></br>
            <div className='commenttitle'>전체 댓글</div>
            <hr></hr>
            <div>몇개월 하실건가요?</div>
            <hr></hr>
            <div>저랑 같이 해요</div>
            <hr></hr>
            <div>저도 같이 신청하고 싶어요</div>
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
export default Detail;