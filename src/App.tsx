import Aside from './components/Aside/Aside'
import BigText from './components/BigText'
import Bitcoin from './components/CryptoCurrency/Bitcoin'
import Ethereum from './components/CryptoCurrency/Ethereum'
import Litecoin from './components/CryptoCurrency/Litecoin'
import Footer from './components/Footer/Footer'
import Statistics from './components/Statistics'

function App() {

  return (
    <>
      <Bitcoin />
      <Ethereum />
      <Litecoin />
      <main>
        <article className="left-side">
          <BigText />
          <p className='call-to-action'>Subscribe to our channel to learn more</p>
          <Statistics />
          <button className="join-btn">JOIN WHATSAPP</button>
        </article>
        <Aside />
      </main>
      <Footer />
    </>
  )
}

export default App
