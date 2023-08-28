import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import getElementRandomArray from './utils/getRandomElementArray'

function App() {

  const phraseRandom = getElementRandomArray(phrases)
  const numberRandom = getElementRandomArray([1,2,3,4])

  const [quote, setQuote] = useState(phraseRandom)
  const [numberBg, setNumberBg] = useState(numberRandom)

  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`
  }

  return (
    <>
      <div className='container' style={bgStyle}>
          <h1 className='container__title'>Galleta de la fortuna</h1>
          <Quote
            phrase = {quote}
          />
          <BtnQuote
            setQuote = {setQuote}
            quote = {quote}
            phrases = {phrases}
            setNumberBg = {setNumberBg}
            numberBg = {numberBg}
          />
      </div>
    </>
  )
}

export default App
