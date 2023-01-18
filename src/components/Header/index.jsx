import React from 'react'
// import './header.scss'
import FirstView from '../../asset/photo/first view.jpg'
import phonephoto from '../../asset/photo/phone.svg'
import firstviewsp from '../../asset/photo/firstviewsp.jpg'


const returnTop = () => {
  window.scrollTo({
    top: 6200,
    behavior: "smooth",
  });
};
function index() {
  return (
    <header>
      <h1>
        <div className='firstview'><img src={FirstView} alt='江ノ島マリーナBBQサイト' /></div>
        <div className='firstviewsp'><img src={firstviewsp} alt="江ノ島マリーナBBQサイト" /></div>
      </h1>

      <button className='yoyaku' onClick={returnTop}><a href='#'>予約する</a></button>
      <button className='phone' onClick={returnTop}><a href='#'><img src={phonephoto} alt='phone' /></a></button>
    </header>
  )
}

export default index;
