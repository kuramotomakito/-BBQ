import React from 'react'
import backtop from '../../asset/photo/backtop.svg'
const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Footer = () => {
  return (
    <footer>
      <p>Copyright © Enoshima Marina BBQ</p>
      <button className='backtop' onClick={returnTop}><a href='#'><img src={backtop} alt="ページトップに戻る" /></a></button>

    </footer>
  )
}

export default Footer