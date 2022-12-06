import React, { useState,useEffect } from 'react'
import Navigation from "../components/navigation";
import Ad from "../components/advertisement";
import Items from '../components/items';
import { Link } from 'react-router-dom';

function Buy(){
    const [buylist, setBuyList] =useState([]);
    const getbuylist= async()=>{
        const json = await(
            await fetch(
                "http://43.200.162.100/itempost/list"
            
        )).json();
        setBuyList(json.content);
        
    };
    useEffect(()=>{
        getbuylist();
    },[]);
    const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(buylist.length / 20); i++) {
    pageNumber.push(i);
  }
  useEffect(() => {
    setStart((currentPage - 1) * 20);
    setEnd(currentPage * 20);
  }, [currentPage]);
    console.log(buylist)
    return(
        <div>
            <Navigation></Navigation>
  
              <Ad/>
              <div className="buytitle">
                  <div className="buyword">당신을 위한 공동구매</div>
                  <div className="postbutton"><div>글쓰러가기</div> <Link Link to ="/buypost"><img src='\img\right.png'></img></Link></div>
                  </div>
              <div className="buytitle">
                  <div className='category' ><ul><li>생활 용품</li><li>주방 용품</li><li>식품</li><li>뷰티</li><li>OTT</li></ul>
                  </div>
                  </div>
              <div className="listcontainer">
                  {
                      buylist.slice(start, end).map((list) => {
                          return(
                              <Items key={list.id}
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
                  <div className="buyword">찾으시는게 없으신가요?</div>
                  <div className="postbutton"><div>글쓰러가기</div> <img src='\img\right.png'></img></div>
                  </div>
                  <nav style={{ listStyleType: "none", display: "flex" }}>
        {pageNumber.map((num) => (
          <li key={num} onClick={() => setCurrentPage(num)}>
            <button>{num}</button>
          </li>
        ))}
      </nav>  
          </div>
      )
}
export default Buy;