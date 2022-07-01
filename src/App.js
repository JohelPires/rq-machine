import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import './App.css'

function App() {
  // const url = 'https://zenquotes.io/api/quotes'

  const [quote, setQuote] = useState({})
  const [callGetQuote, setCallGetQuote] = useState(false)
  const [theColor, setTheColor] = useState('orangered')
  const colors = [
    'blueviolet',
    'brown',
    'cadetblue',
    'dodgerblue',
    'chocolate',
    'coral',
    'darkcyan',
    'cornflowerblue',
    'darkorange',
    'darkslateblue',
    'darkslategray',
    'forestgreen',
    'firebrick',
    'olive',
    'rebeccapurble',
    'slateblue',
    'teal',
  ]

  const api_url = 'https://api.quotable.io/random'

  // useEffect(() => {
  //   async function getapi(url) {
  //     const response = await fetch(url, { cache: 'no-store' })
  //     var data = await response.json()
  //     setQuote(data)
  //   }
  //   getapi(api_url)
  // }, [])

  function getQuote() {
    setCallGetQuote((prev) => !prev)
    const randomNum = Math.floor(Math.random() * colors.length)
    setTheColor(colors[randomNum])
  }

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data)
      })
  }, [callGetQuote])

  return (
    <div className='App'>
      <Helmet>
        <style>{`body { background-color: ${theColor}; color: ${theColor}} #tweet-quote { color: ${theColor};} #new-quote { background-color: ${theColor}}`}</style>
      </Helmet>
      <div className='quote-box' id='quote-box'>
        {/* <h1 className='bigquote'>"</h1> */}
        <h1 id='text'>
          <em>"{quote.content}"</em>
        </h1>
        <h3 id='author'>{quote.author}</h3>
        <div className='controls'>
          <a
            title='Tweet this quote'
            id='tweet-quote'
            href='https://twitter.com/intent/tweet'
          >
            <i className='fa-brands fa-twitter'></i>
          </a>
          <button id='new-quote' onClick={getQuote}>
            New quote
          </button>
        </div>
      </div>
      <footer>Copyright 2022</footer>
    </div>
  )
}

export default App
