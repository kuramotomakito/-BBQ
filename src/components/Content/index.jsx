import React from 'react'
import banner1 from '../../asset/photo/banner2.jpg'
import banner2 from '../../asset/photo/banner1.jpg'
import banner3 from '../../asset/photo/banner3.jpg'


const Content = () => {
    return (
        <section className='content'>
            <h2><b>C</b>ontent</h2>
            <h3>完全予約制</h3>
            <p>お問い合わせはフォームまたはお電話をご利用ください</p>
            <div><a href='https://www.enoshimamarina.jp/for_foreigners/'>お問い合わせフォームへ</a></div>
            <p><strong>0466-54-7442</strong></p>
            <p>受付時間: 9:00~18:00</p>
            <ul className='tyui'>
                <li>※先着順となりますので、お早めにお電話にてお申し込みください。</li>
                <li>※ご利用希望日の3日前までにご予約をお願いします。</li>
            </ul>
            <ul className='banner'>
                <li><a href='https://www.instagram.com/enoshimamarina/'><img src={banner1} alt='Instagramはこちら' /></a></li>
                <li><a href='https://www.enoshimamarina.jp/cruise/'><img src={banner2} alt='江ノ島マリーナクルーズやってます' /></a></li>
                <li><a href='https://www.instagram.com/explore/tags/%E6%B1%9F%E3%83%8E%E5%B3%B6%E3%83%9E%E3%83%AA%E3%83%BC%E3%83%8A/'><img src={banner3} alt='#江ノ島マリーナで投稿しよう' /></a></li>
            </ul>
            <div>
                <a href='https://www.enoshimamarina.jp/'>江ノ島マリーナ公式HPはこちら</a></div>
        </section>)
}

export default Content