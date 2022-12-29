import React from 'react'


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
      <section>
        <h2>Situetion</h2>
        <section>
          <h3>Season</h3>
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