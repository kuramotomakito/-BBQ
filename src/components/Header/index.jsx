import React from 'react'
// import './header.scss'
import FirstView from '../../asset/photo/cruise 1.png'
import phonephoto from '../../asset/photo/phone.svg'
import firstviewsp from '../../asset/photo/cruisesp.png'
import logo from '../../asset/photo/logo.svg'


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
        <div className='logo'><img src={logo} alt='江ノ島マリーナBBQサイト' /></div>
        <div className='catchcopy'><p><b className='enosima'>江ノ島</b>でちょっとかわった<b className='BBQ'>BBQ</b>を</p></div>
      </h1>

      <button className='yoyaku' onClick={returnTop}><a href='#'>予約する</a></button>
      <button className='phone' onClick={returnTop}><a href='#'><img src={phonephoto} alt='phone' /></a></button>
    </header>
  )
}

export default index;
