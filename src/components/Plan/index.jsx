import React from 'react'
import frame3hour from '../../asset/photo/sanzikan.svg'
import frame from '../../asset/photo/stanprem.svg'
import framedrink from '../../asset/photo/backdrink.svg'
import alcoholphoto from '../../asset/photo/alcohol.jpg'
import SoftDrinkPhoto from '../../asset/photo/softdrink.jpg'
import meetphoto from '../../asset/photo/meet.jpg'
import appetphoto from '../../asset/photo/vegetable.jpg'
const json = `[{"name":"threehour","h4":"3時間食べ放題プラン","prise":"8,000","meets":["牛カルビ","豚ロース","豚バラ","鶏もも開き(カット)","鶏ささみ"],"appetizer":["フランクフルト","カット野菜3種(カボチャ・人参・ピーマン)","ソース焼きそば"],"backsrc":"${frame3hour}","backalt":"囲い"},
{"name":"standard","h4":"Standard","prise":"5,000","meets":["牛カルビ  200g","豚ロース  200g","豚バラ  200g","鶏もも開き(カット)  200g","鶏ささみ  200g"],"appetizer":["フランクフルト  4本","カット野菜3種  各4切(カボチャ・人参・ピーマン)","ソース焼きそば(麺2玉+粉ソース)"],"backsrc":"${frame}","backalt":"囲い"},
{"name":"premium","h4":"Premium","prise":"7,000","meets":["牛カルビ  200g","豚ロース  200g","豚バラ  200g","鶏もも開き(カット)  200g","鶏ささみ  200g"],"appetizer":["フランクフルト  4本","カット野菜3種  各4切(カボチャ・人参・ピーマン)","パエリヤ(3~4人前)","スキレットで焼くパンケーキ","巨大なマシュマロ"],"backsrc":"${frame}","backalt":"囲い"}]`;
const jsonal = `[["生ビール","赤ワイン/白ワイン","カシスウーロン","ピーチウーロン","ジントニック","ピーチモーニ","ピーチグレープ"],["レゲエパンチ","ブルドック","モスコミュール","シャンディーガフ","ハイボール","コークハイ","梅酒ソーダ"]]`
const jsonsoft = `["コーラ","ジンジャーエール","オレンジジュース","グレープフルーツジュース","烏龍茶"]`;


const alcohol = JSON.parse(jsonal);
const softdrink = JSON.parse(jsonsoft);
const menu = JSON.parse(json);


const plan = () => {
    return (
        <>
            <section className='plan backgro'>
                <div className='plannai'>
                    <h2><b>P</b>lan</h2>

                    <p>利用時間は3つの中から選べます</p>
                    <p>※1日3組まで、1日最大10〜20名</p>
                    <dl className='time'>
                        <div className='lunch'>
                            <dt>Lunch</dt>
                            <dd>11:00〜14:00</dd></div>
                        <div className='afternoon'>
                            <dt>Afternoon</dt>
                            <dd>14:30〜17:30</dd></div>
                        <div className='dinner'>
                            <dt>Dinner</dt>
                            <dd>18:00〜21:00</dd>
                        </div>
                    </dl>
                    <section>
                        <h3 className='h3menu'>Menu</h3>
                        <div className='menugrid'>
                            {
                                menu.map((item, index) => {
                                    return (
                                        <>
                                            <div className={item.name}>
                                                <div className='h4set'>
                                                    <p className='new'>NEW!!</p>
                                                    <h4>{item.h4}</h4>
                                                </div>
                                                <h5>{item.prise}<b>yen</b></h5>
                                                {/* <div className='drinkflex'>
                                                    <img src={meetphoto} alt="肉" />
                                                    <img src={appetphoto} alt="野菜" />
                                                </div> */}
                                                <div className='menu'>
                                                    <div className='meetmenu'>
                                                        <img src={meetphoto} alt="肉" />
                                                        <dl>
                                                            <dt>焼肉</dt>
                                                            <dd><ul>

                                                                {item.meets.map((meet, index) => {
                                                                    return (
                                                                        <>
                                                                            <li>・{meet}</li>
                                                                        </>
                                                                    )
                                                                })}</ul></dd></dl></div>
                                                    <div className='appetmenu'>
                                                        <img src={appetphoto} alt="前菜" />

                                                        <dl>
                                                            <dt>前菜</dt>
                                                            <dd><ul>

                                                                {item.appetizer.map((appet, index) => {
                                                                    return (
                                                                        <>
                                                                            <li>・{appet}</li>
                                                                        </>
                                                                    )
                                                                })}</ul></dd></dl>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </section>
                    <section className='softalcohol'>
                        <h3>江ノ島マリーナでは飲み放題が無料でついてきます！</h3>
                        <div className='drinkmenu'>
                            <h4 className='h4'>Drinkmenu</h4>

                            <div className='alcoholmenu'>
                                <img src={alcoholphoto} alt="アルコール" />
                                <dl>
                                    <dt>アルコール</dt>
                                    <dd>
                                        {alcohol.map((al, index) => {
                                            return (
                                                <>
                                                    <ul>

                                                        {al.map((list, index) => {
                                                            return (
                                                                <>

                                                                    <li>・{list}</li>

                                                                </>

                                                            )
                                                        })}

                                                    </ul>
                                                </>
                                            )
                                        })}
                                    </dd></dl></div>
                            <div className='softmenu'>
                                <img src={SoftDrinkPhoto} alt="ソフトドリンク" />
                                <dl>
                                    <dt>ソフトドリンク</dt>
                                    <dd><ul>
                                        {softdrink.map((soft, index) => {
                                            return (<>
                                                <li>・{soft}</li>
                                            </>)
                                        })}
                                    </ul></dd>
                                </dl>
                            </div>

                            <div className='drinktyui'>
                                <p>他にも盛りだくさん！</p>
                                <h4>※注意事項</h4>
                                <ul>
                                    <li>・グループ全員対象となり、利用されない方との混在は不可です</li>
                                    <li>・遅れて合流した方もスタート時間は同時扱いになります</li>
                                    <li>・20歳未満の飲酒、車の運転する方の飲酒は法律により禁止されています</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </>
    )
}

export default plan