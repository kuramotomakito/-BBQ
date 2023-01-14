import React from 'react'

const json = `[{"Q":"飲み物や食材の持ち込みは可能ですか","A":"衛生管理上、食材の持ち込みは受け付けておりません。食材の追加は一人分のプランを追加注文していただく必要があります。"},{"Q":"キャンセルしたい場合いつまでに連絡すればいいですか","A":"前日の20:00までにお電話にてご連絡ください"},{"Q":"キャンセル料はありますか","A":"当日キャンセルの場合、お支払い料金の20%分のキャンセル料が発生いたします。"},{"Q":"当日の人数変更は可能ですか","A":"当日人数が増える場合は、最大3名様まで食材のご用意が可能です。当日人数が減ってしまう場合は1名様までキャンセル料なしでキャンセルが可能です。2名様以上減ってしまう場合は、人数分のお支払い金額の20%分のキャンセル料が発生いたします。"},{"Q":"年齢制限はありますか","A":"何歳からでも可能ですが、18歳未満の方のみでの利用は禁止です。"}]`;
const json2 = `[{"class":"goriyo","h4":"江ノ島マリーナのご利用について","li":["開始時間の30分前から受付可能ですので、早めの受付をお願いします。","当日ブース空きがある場合は当日延長が可能です。","終了時間は完全撤収時間のため、30分前には片付けをしていただきますようお願いしています。"]},{"class":"colona","h4":"新型コロナウイルス感染症対策について","li":["食事以外の会話ではマスクの着用をお願いいたします。","マスクの着用中でも、大声を出さないようお願いいたします。"]}]`
const question = JSON.parse(json);
const note = JSON.parse(json2);
const attention = () => {
    return (
        <section className='attention'>

            {/* <details class="c-accordion">
                <summary class="c-accordion_ttl">Q. テキスト </summary>
                <p class="c-accordion_txt">
                    hello  world
                </p>
            </details> */}





            <section>

                <h2><b>A</b>ttention</h2>
                <h3>よくある質問</h3>
                <div className='QandA'>
                    {question.map((item, index) => {
                        return (
                            <>
                                <details class="c-accordion">
                                    <summary class="c-accordion_ttl"><strong>Q</strong> <span>{item.Q}</span> </summary>
                                    <p class="c-accordion_txt">
                                        <strong>A</strong><span>{item.A}</span>
                                    </p>
                                </details>

                            </>
                        )
                    })}
                </div>
            </section>
            <section>
                <h3>注意事項</h3>
                {note.map((list, index) => {
                    return (
                        <>
                            <h4>{list.h4}</h4>
                            <ul className={list.class}>
                                {list.li.map((li, index) => {
                                    return (
                                        <>
                                            <li>{li}</li>
                                        </>
                                    )
                                })}
                            </ul>
                        </>
                    )
                })}
            </section>
        </section>
    )
}

export default attention;