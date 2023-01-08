import React from 'react'
import spring from '../../asset/photo/Spring.png'
import summmer from '../../asset/photo/Summer.png'
import autumn from '../../asset/photo/Autumn.png'
import winter from '../../asset/photo/Winter.png'

import company1 from '../../asset/photo/company1.png'
import company2 from '../../asset/photo/company2.png'
import company3 from '../../asset/photo/company3.png'
import company4 from '../../asset/photo/company4.png'

const json = `{
"season":[{"name":"Spring","h5":"","plan":"","time":"","point":"","hash1":"","hash2":""},
  {"name":"Summer","h5":"","plan":"","time":"","point":"","hash1":"","hash2":""},
  {"name":"Auturm","h5":"","plan":"","time":"","point":"","hash1":"","hash2":""},
  {"name":"Winter","h5":"","plan":"","time":"","point":"","hash1":"","hash2":""}],
"party":[{"name":"Company","h5":"","plan":"","time":"","point":"","hash1":"","hash2":""},
  {"name":"","h5":"","plan":"","time":"","point":"","hash1":"","hash2":""},
  {"name":"","h5":"","plan":"","time":"","point":"","hash1":"","hash2":""},
  {"name":"","h5":"","plan":"","time":"","point":"","hash1":"","hash2":""}]
}`;
const Situ = JSON.parse(json);

const Situetion = () => {
  return (
    <>
      <section className='situetion'>
        <h2><b>S</b>ituetion</h2>
        <section>
          <h3>Season</h3>
<img src={spring} alt="春" />
<img src={summmer} alt="夏" />
<img src={autumn} alt="秋" />
<img src={winter} alt="冬" />

          <button>←</button>
          <button>→</button>
          {Situ.season.map((item, index) => {
            return (
              <>
                <h4>{item.name}</h4>
                <h5>{item.h5}</h5>
                <ul>
                  <li>{item.plan}</li>
                  <li>{item.time}</li>
                </ul>
                <dl><dt>Point:</dt><dd>{item.point}</dd></dl>
                <ul>
                  <li>{item.hash1}</li>
                  <li>{item.hash2}</li>
                </ul>
              </>
            )
          })}
        </section>
        <section>
          <h3>Party</h3>
          <img src={company1} alt="company1" />
          <img src={company2} alt="company2" />
          <img src={company3} alt="company3" />
          <img src={company4} alt="company4" />

          <button>←</button>
          <button>→</button>

          {Situ.party.map((item, index) => {
            return (
              <>
                <h4>{item.name}</h4>
                <h5>{item.h5}</h5>
                <ul>
                  <li>{item.plan}</li>
                  <li>{item.time}</li>
                </ul>
                <dl><dt>Point:</dt><dd>{item.point}</dd></dl>
                <ul>
                  <li>{item.hash1}</li>
                  <li>{item.hash2}</li>
                </ul>
              </>
            )
          })}
        </section>
      </section>
    </>
  )
}

export default Situetion;