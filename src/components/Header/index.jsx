import React from 'react'
// import './header.scss'
import FirstView from '../../asset/photo/first view.jpg'
function index() {
  return (
    <header>
    <h1><img src={FirstView} alt='江ノ島マリーナBBQサイト'/></h1>
    <button><a href='#'>予約する</a></button>
</header>
  )
}

export default index;
