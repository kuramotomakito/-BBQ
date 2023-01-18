import HeaderCom from './components/Header'
import Situetion from './components/Situetion'
import Service from './components/Service'
import Plan from './components/Plan'
import Attention from './components/Attention'
import Access from './components/Access'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <HeaderCom />
      <article>
        <main>
          <Service />
          <Situetion />
          <Plan />
          <Attention />
          <Access />
          <Content />
        </main>
      </article>
      <Footer />
    </>
  )
}

export default App
