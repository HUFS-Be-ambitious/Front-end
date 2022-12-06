import React from 'react';
import Navigation from "../components/navigation";
import Ad from "../components/advertisement";
import { useState } from 'react'


function Buypost(){
    const [category, setCategory] = useState('생활용품');
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');
    const [delivery_fee, setFee] = useState('');
    const [done_num, setDonenum] = useState('');
    const [location, setLocation] = useState('');
    const [content, setContent] = useState('');
    const [point, setPoint] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState();

    const onchangecategory = (e) => {
        setCategory(e.target.value)
      }
      const onchangefile = (e) => {
        setFile(e.target.files[0])
      }
      const onchangename = (e) => {
        setName(e.target.value)
      }
      const onchangepoint = (e) => {
        setPoint(e.target.value)
      }
      const onchangecontnet = (e) => {
        setContent(e.target.value)
      }
      const onchangelocation = (e) => {
        setLocation(e.target.value)
      }
      const onchangedonenum = (e) => {
        setDonenum(e.target.value)
      }
      const onchangetitle = (e) => {
        setTitle(e.target.value)
      }
      const onchangeprice = (e) => {
        setPrice(e.target.value)
      }
      const onchangedeliveryfee = (e) => {
        setFee(e.target.value)
      }
      const onchangetime = (e) => {
        setTime(e.target.value)
      }
      const onSubmitHandler=()=>{
        let formData = new FormData();
        
        let data={
            "title" : title,
            "item_name" : name,
            "itemCategory" : category,
            "price" : price,
            "delivery_fee" : delivery_fee,
            "endTime" : time,
            "done_num" : done_num,
            "location" : location,
            "content" : content,
            "point" : point,
        }
        console.log(data)
        formData.append("writeDto", JSON.stringify(data));
        formData.append("file", file);
        for (var key of formData.keys()) {

            console.log(key);
          
          }
          
          for (var value of formData.values()) {
          
            console.log(value);
          
          }
        fetch("http://43.200.162.100/itempost/write", {
            method: "POST",
            headers: {
                "content-type": "multipart/form-data"
              },
            body: formData,
    }) .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    }
    return(
        <div>
            <Navigation></Navigation>
            <div className="글올리기">글 올리기</div>
            <div className='postform'>
                <div className='post'><div className='postword'>제목</div>
                <input className='titleinput' type="text" placeholder='제목을 입력하세요' onChange={onchangetitle}></input>
                </div>
                <div className='post'><div className='postword'>물건</div>
                <input className='titleinput' type="text" placeholder='물건을 입력하세요' onChange={onchangename}></input>
                </div>
                <div className='post'><div className='postword'>카테고리</div>
                <select className='category' defaultValue="카테고리를 선택하세요" onChange={onchangecategory}>
                    <option value="생활용품">생활용품</option>
                    <option value="주방용품">주방용품</option>
                    <option value="식품">식품</option>
                    <option value="뷰티">뷰티</option>
                    </select>
                </div>
                <div className='post'><div className='postword'>마감시간</div>
                <input className='timeinput' type="date"  onChange={onchangetime}></input>
                </div>
                <div className='post'><div className='postword'>모집인원</div>
                <input className='numinput' type="text" placeholder='모집인원 수를 입력하세요' onChange={onchangedonenum}></input>명
                </div>
                <div className='post'><div className='postword'>상품금액</div>
                <input className='priceinput' type="text" placeholder='금액을 입력하세요' onChange={onchangeprice}></input>원
                </div>
                <div className='post'><div className='postword'>배송료</div>
                <input className='priceinput' type="text" placeholder='베송료를 입력하세요' onChange={onchangedeliveryfee}></input>원
                </div>
                <div className='post'><div className='postword'>수령장소</div>
                <input className='locationinput' type="text" placeholder='수령장소를 입력하세요' onChange={onchangelocation}></input>
                </div>
                <div className='post'><div className='postword'>포인트 사용</div>
                <input className='locationinput' type="text" placeholder='사용하실 포인트를 입력하세요' onChange={onchangepoint}></input>
                </div>
                <div className='filepost'>
                <input className='fileinput' type="file" onChange={onchangefile} ></input>
                </div>
                <div className='post'><div className='postword'>내용</div>
                <textarea className='contentinput' type="number" placeholder='내용을 입력하세요' onChange={onchangecontnet}></textarea>
                </div>
                <div className='post_button'><button onClick={onSubmitHandler}>post</button></div>
            </div>
        </div>
    )
}
export default Buypost;