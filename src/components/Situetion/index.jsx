// import React from 'react'
import React, { useRef, useState } from "react";
// Import Swiper React components
// import "../../asset/scss/main.css";
import "../../asset/scss/main.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, EffectFade } from "swiper";
// import required modules

import spring from '../../asset/photo/Spring.png'
import summer from '../../asset/photo/Summer.png'
import autumn from '../../asset/photo/Autumn.png'
import winter from '../../asset/photo/Winter.png'

import company1 from '../../asset/photo/company1.png'
// import company2 from '../../asset/photo/company2.png'
import company3 from '../../asset/photo/company3.png'
import company4 from '../../asset/photo/company4.png'

import wave from '../../asset/photo/nami.svg'
const json = `{
"season":[{"name":"Spring","h5":"お花見をBBQで賑やかに!","plan":"プレミアム","time":"10:00~14:00","point":"暖かくなってきた昼から楽しもう！","hash1":"旬の食材を食材を焼いて楽しむ","hash2":"種類豊富なカクテルでカクテルで昼から乾杯しよう!","src":"${spring}","alt":"春"},
  {"name":"Summer","h5":"BBQといえば夏!海を眺めながら楽しもう！","plan":"3時間食べ飲み放題","time":"14:30~17:30","point":"夜はクルーズ船でゆったりしても◉","hash1":"本格BBQ","hash2":"王人数でに賑やかなBBQに!","src":"${summer}","alt":"夏"},
  {"name":"Autumn","h5":"食欲の秋!旬の食材で大人なBBQ","plan":"3時間食べ飲み放題","time":"18:00~21:00","point":"食べ放題で旬の食材を食べ尽くそう!","hash1":"旬の食材を焼いて楽しむ","hash2":"夜のライトアップで大人なBBQ","src":"${autumn}","alt":"秋"},
  {"name":"Winter","h5":"寒い冬こそBBQで楽しく暖まろう!","plan":"スタンダード","time":"14:30~17:30","point":"冬ならではの綺麗な夕日を見よう!","hash1":"旬の食材を焼いて楽しむ","hash2":"ふゆに冬にしか見れない澄んだ空と海を見よう!","src":"${winter}","alt":"冬"}],
"party":[{"id":"Company","name":"Company","h5":"会社のパーティーにBBQをプラス!","plan":"3時間食べ飲み放題","time":"14:30~17:30","point":"お昼から飲んで心の距離を近づけよう!","hash1":"チームで中を深める","hash2":"大人数で賑やかなBBQに!","src":"${company1}","alt":"春"},
  {"id":"Woman","name":"Woman's","h5":"女子会をBBQで贅沢に","plan":"スタンダード","time":"14:30~17:30","point":"お手軽な金額で楽しんじゃおう!","hash1":"旬の食材を焼いて楽しむ","hash2":"種類豊富なカクテルで昼から乾杯しよう!","src":"${company3}","alt":"春"},
  {"id":"Family","name":"Family","h5":"準備なし!家族で手ぶらBBQ","plan":"スタンダード","time":"14:30~17:30","point":"ゆっくり身支度して、あとは手ぶらでGO!","hash1":"機材も食材も全部お任せ！","hash2":"リーズナブルなBBQ","src":"${company4}","alt":"春"}]
}`;
const Situ = JSON.parse(json);

const Situetion = () => {
  return (
    <>
      <section className='situetion'>
        <h2><b>S</b>ituetion</h2>
        <section>
          <h3><b>S</b>eason</h3>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, EffectFade]}
            effect="fade"
            className="mySwiper">
            {Situ.season.map((item, index) => {
              return (
                <>
                  <SwiperSlide className="seasonslide" id={item.name}>
                    <div className="slideimg">
                      <img src={item.src} alt={item.alt} />
                      <img src={wave} alt="波" className="wave" />
                    </div>
                    <div className="slidetext">
                      <h4>{item.name}</h4>
                      <h5>{item.h5}</h5>
                      <dl>
                        <div>
                          <dt>プラン・・・</dt>
                          <dd>{item.plan}</dd>
                        </div>
                        <div>
                          <dt>時間帯・・・</dt>
                          <dd>{item.time}</dd>
                        </div>
                      </dl>
                      <dl className="point"><div><dt>Point:</dt><dd>{item.point}</dd></div></dl>
                      <ul>
                        <li>#{item.hash1}</li>
                        <li>#{item.hash2}</li>
                      </ul>
                    </div>
                  </SwiperSlide>
                </>
              )
            })}
          </Swiper>
        </section>
        <section>
          <h3><b>P</b>arty</h3>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, EffectFade]}
            effect="fade"
            className="mySwiper">
            {Situ.party.map((item, index) => {
              return (
                <>
                  <SwiperSlide className="partyslide" id={item.id}>
                    <div className="slideimg">
                      <img src={item.src} alt={item.alt} />
                      <img src={wave} alt="波" className="wave" />
                    </div>
                    <div className="slidetext">
                      <h4>{item.name}</h4>
                      <h5>{item.h5}</h5>
                      <dl>
                        <div>
                          <dt>プラン・・・</dt>
                          <dd>{item.plan}</dd></div>
                        <div>
                          <dt>時間帯・・・</dt>
                          <dd>{item.time}</dd></div>
                      </dl>
                      <dl className="point"><div><dt>Point:</dt><dd>{item.point}</dd></div></dl>
                      <ul>
                        <li>#{item.hash1}</li>
                        <li>#{item.hash2}</li>
                      </ul>
                    </div>

                  </SwiperSlide>
                </>
              )
            })}
          </Swiper>


        </section>
      </section>

    </>
  )
}

export default Situetion;