import React from 'react'
const json = `[
  {
  "dt":"こだわりのオープンテラス",
  "dd1":"海岸に位置する江ノ島マリーナのこだわりの",
  "dd2":"オープンテラスで大人なBBQを楽しんでみませんか？",
    "src":"",
    "alt":"サンカフェのテラス"},
{
  "dt":"豊富な食材！豊富な飲み放題！",
  "dd1":"海岸に位置する江ノ島マリーナのこだわりの",
  "dd2":"オープンテラスで大人なBBQを楽しんでみませんか？",
  "src":"",
  "alt":"サンカフェの食材"},
  {
  "dt":"道具の持ち込みは不要！",
  "dd1":"本格的なBBQ用グリル機材から、調味料まで",
  "dd2":"無料で貸し出しておりますので、手軽に行えます。",
  "src":"",
  "alt":"サンカフェのBBQ機材"}
]`;
const charm = JSON.parse(json);
function Service() {

    return (
        <>
            <section>
                <section>
                    <h3>Sun Cafe Paradise</h3>
                    <img src="" alt="サンカフェのテラス" />
                    <p>神奈川県藤沢市の江ノ島にある<br />
                        海と自然を愛し、人々が自由に心から楽しみ、くつろぎ、<br />
                        本来の自分に戻れる場所を作りたいという<br />
                        想いから誕生したのが「江ノ島マリーナ」です。</p>
                </section>
                <section>
                    <h3>江ノ島マリーナのバーベキューの魅力</h3>
                    {
                        charm.map((item, index) => {
                            return (
                                <>
                                    <div>
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
                </section>
            </section>
        </>
    )
}

export default Service;