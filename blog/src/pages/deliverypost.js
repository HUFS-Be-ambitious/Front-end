import React from 'react';
import Navigation from "../components/navigation";
import Ad from "../components/advertisement";
function Deliverypost(){
    const data={
        
            title : "할순 드실분!",
            storeName : "큰맘할매순대국 ",
            storeCategory : "한식",
            delivery_fee : 3000,
            endTime : "22. 12. 7. 오전 11:00",
            done_num : 3,
            location : "기숙사 ",
            content : "제곧내",
            point : 50        
    }
    const setpost=()=>{
        fetch("http://43.200.162.100/deliverypost/write", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
}).then((response) => console.log(response));
alert("게시글 생성")

    }
    return(
        <div>
            <Navigation></Navigation>
            <div className="글올리기">글 올리기</div>
            <form className='postform'>
                <div className='post'><div className='postword'>제목</div>
                <input className='titleinput' type="text" placeholder='제목을 입력하세요'></input>
                </div>
                <div className='post'><div className='postword'>카테고리</div>
                <select className='category' defaultValue={"한식"} >
                    <option disabled selected>카테고리를 선택하세요</option>
                    <option value="한식">한식</option>
                    <option value="일식">일식</option>
                    <option value="중식">중식</option>
                    <option value="양식">양식</option>
                    </select>
                </div>
                <div className='post'><div className='postword'>마감시간</div>
                <input className='timeinput' type="time" ></input>
                </div>
                <div className='post'><div className='postword'>모집인원</div>
                <input className='numinput' type="text" placeholder='모집인원 수를 입력하세요'></input>명
                </div>
                <div className='post'><div className='postword'>상품금액</div>
                <input className='priceinput' type="text" placeholder='금액을 입력하세요'></input>원
                </div>
                <div className='post'><div className='postword'>배송료</div>
                <input className='priceinput' type="text" placeholder='베송료를 입력하세요'></input>
                </div>
                <div className='post'><div className='postword'>수령장소</div>
                <input className='locationinput' type="text" placeholder='수령장소를 입력하세요'></input>
                </div>
                <div className='post'><div className='postword'>포인트 사용</div>
                <input className='locationinput' type="text" placeholder='사용하실 포인트를 입력하세요'></input>
                </div>
                <div className='filepost'>
                <input className='fileinput' type="file" ></input>
                </div>
                <div className='post'><div className='postword'>내용</div>
                <textarea className='contentinput' type="text" placeholder='내용을 입력하세요'></textarea>
                </div>
                <div className='post_button'><button onClick={setpost}>post</button></div>
            </form>
        </div>
    )
}
export default Deliverypost;