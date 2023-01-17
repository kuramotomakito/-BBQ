import React from 'react'
import index from '../Header';


const json = `[{"th":"車をご利用の場合","td":["圏央道藤沢ICより江ノ島方面へ約25分","国道467号線藤沢橋より江ノ島方面へ約20分","横浜横須賀道路逗子ICより逗葉道路経由、134号線を江ノ島方面へ約35分","※駐車場については周辺の公共駐車場・コインパーキングをご利用ください。"]},{"th":"電車をご利用の場合","td":["小田急片瀬江ノ島駅 徒歩12分","江ノ電江ノ島駅 徒歩16分","湘南モノレール湘南江の島駅 徒歩19分"]},{"th":"バスをご利用の場合","td":["藤沢駅より、江ノ電バス江ノ島行きで約15分"]}]`;
const table = JSON.parse(json);

const Access = () => {
    return (
        <section className='access'>
            <h2><b>A</b>ccess</h2>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512.179948205142!2d139.48020642549793!3d35.30374577695581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60184ee3e3635903%3A0xd025fa0157690637!2z5rGf44Gu5bO244Oe44Oq44O844OK!5e0!3m2!1sja!2sjp!4v1672658289096!5m2!1sja!2sjp" className='googlemap'></iframe>
                <dl>
                    {/* //style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  */}
                    <dt>江ノ島マリーナ</dt>
                    <dd><ul>
                        <li>〒251-0036</li>
                        <li>神奈川県藤沢市江ノ島1-2</li>
                        <li>TEL:0446-54-7442   0466-54-7449</li>
                        <li>営業時間: 9:00~18:00</li>
                        <li>定休日:火曜日</li>
                    </ul></dd>
                </dl>
            </div>

            <table>
                {table.map((item, index) => {
                    return (
                        <>
                            <tr>
                                <th>{item.th}</th>
                                <td><ul>{item.td.map((td, index) => {
                                    return (
                                        <>
                                            <li>{td}</li>
                                        </>
                                    )
                                })}</ul></td>
                            </tr>
                        </>
                    )
                })}
            </table>
            {/* <div className='table'>
                {table.map((item, index) => {
                    return (<>
                        <div className='tr'>
                            <label className='th'>{item.th}</label>
                            <div className='td'>
                                <ul>{item.td.map((td, index) => {
                                    return (
                                        <>
                                            <li>{td}</li>
                                        </>
                                    )
                                })}</ul>
                            </div>
                        </div>
                    </>)
                })}
            </div> */}
        </section>
    )
}

export default Access;