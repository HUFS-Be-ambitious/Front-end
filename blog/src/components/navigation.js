import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./navigation.module.css"

function navigation(){
    return(
        <div>
        <div className={styles.Icons}>
             <Link to="/"><img className={styles.logo} src="img/IMAGE.png"></img></Link>
             <Link to="/loginpage"><img className={styles.login} src="img/Login.png"></img></Link>
             <Link to="/mypage"><img className={styles.perm} src="img/Perm identity.png"></img></Link>
             <Link to="/buyinfo"><img className={styles.shoppingcart} src="img/Shopping cart.png"></img></Link>
        </div>
        <div className={styles.searchbar}>
            <img className={styles.list} src="img/List.png"></img> 
            <input className={styles.검색창}></input> 
            <button className={styles.검색버튼}><img className={styles.search} src="img/Search.png"></img></button>
            <div className={styles.글씨}><span>&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/delivery" >배달</Link></span>
            <span>&nbsp;&nbsp;&nbsp;<Link to="/buy">공구</Link></span></div>
        </div>
        </div>

    );
}
export default navigation;