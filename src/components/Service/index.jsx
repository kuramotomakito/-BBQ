import React from 'react'
import serviceTerrace from '../../asset/photo/serviceTerrace.jpg'
import serviseFood from '../../asset/photo/serviceFood.jpg'
import servuseToul from '../../asset/photo/serviceToul.jpg'
import marina from '../../asset/photo/marina.jpg'
const json = `[
  {
  "dt":"こだわりのオープンテラス",
  "dd1":"海岸に位置する江ノ島マリーナのこだわりの",
  "dd2":"オープンテラスで大人なBBQを楽しんでみませんか？",
    "src":"${serviceTerrace}",
    "alt":"サンカフェのテラス"},
{
  "dt":"豊富な食材！豊富な飲み放題！",
  "dd1":"海岸に位置する江ノ島マリーナのこだわりの",
  "dd2":"オープンテラスで大人なBBQを楽しんでみませんか？",
  "src":"${serviseFood}",
  "alt":"サンカフェの食材"},
  {
  "dt":"道具の持ち込みは不要！",
  "dd1":"本格的なBBQ用グリル機材から、調味料まで",
  "dd2":"無料で貸し出しておりますので、手軽に行えます。",
  "src":"${servuseToul}",
  "alt":"サンカフェのBBQ機材"}
]`;
const charm = JSON.parse(json);
function Service() {

    return (
        <>
            <section className='servise'>
                <section className='suncafe'>
                    <h3><b>S</b>un<b>C</b>afe<b>P</b>aradise</h3>
                    <div className='SuncafeParadise'>
                    <img src={marina} alt="サンカフェのテラス" className='marinaSun'/>
                    <p>神奈川県藤沢市の江ノ島にある<br />
                        海と自然を愛し、人々が自由に心から楽しみ、くつろぎ、<br />
                        本来の自分に戻れる場所を作りたいという<br />
                        想いから誕生したのが「江ノ島マリーナ」です。</p></div>
                </section>
                <section className='suncafecharm'>
                    <h3>江ノ島マリーナのバーベキューの魅力</h3>
                    <div className='Features'>
                    {
                        
                        charm.map((item, index) => {
                            return (
                                <>
                                    <div className='feature'>
                                        <img src={item.src} alt={item.alt} />
                                        <dl>
                                            <dt>{item.dt}</dt>
                                            <dd>{item.dd1}<br/>{item.dd2}</dd>
                                        </dl>
                                    </div>
                                </>
                            )
                        })
                    }
                    </div>
                </section>
            </section>
        </>
    )
}

export default Service;