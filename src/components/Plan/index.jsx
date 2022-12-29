import React from 'react'

const plan = () => {
  return (
<>
<section>
    <h2>Plan</h2>
    <p>利用時間は3つの中から選べます</p>
    <p>※1日3組まで、1日最大10〜20名</p>
    <dl>
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
</section>

</>
  )
}

export default plan