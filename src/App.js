import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

import './App.css'

function App() {
  // const url = 'https://zenquotes.io/api/quotes'

  const [quote, setQuote] = useState({})
  const [callGetQuote, setCallGetQuote] = useState(false)

  const api_url = 'http://api.quotable.io/random'

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
      <div className='quote-box' id='quote-box'>
        {/* <h1 className='bigquote'>"</h1> */}
        <h1 id='text'>"{quote.content}"</h1>
        <h3 id='author'>{quote.author}</h3>
        <div className='controls'>
          {' '}
          <button id='new-quote' onClick={getQuote}>
            New quote
          </button>
          <a
            title='Tweet this quote'
            id='tweet-quote'
            href='https://twitter.com/intent/tweet'
          >
            <i className='fa-brands fa-twitter-square'></i>
          </a>
        </div>
      </div>
      <footer>Copyright 2022</footer>
    </div>
  )
}

export default App
