import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // const url = 'https://zenquotes.io/api/quotes'

  const [quote, setQuote] = useState({})

  const api_url = 'http://api.quotable.io/random'

  useEffect(() => {
    async function getapi(url) {
      const response = await fetch(url, { cache: 'no-store' })
      var data = await response.json()
      setQuote(data)
    }

    getapi(api_url)
  }, [])

  return (
    <div className='App'>
      <div className='quote-box' id='quote-box'>
        <h1 id='text'>{quote.content}</h1>
        <h3 id='author'>{quote.author}</h3>
        <button id='new-quote'>New quote</button>
        <a id='tweet-quote' href=''>
          Tweet Quote
        </a>
      </div>
      <footer>Copyright 2022</footer>
    </div>
  )
}

export default App
