import { useEffect, useState } from "react"

function CoinTracker() {
  const API = 'https://api.coinpaprika.com/v1/tickers'

  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      setCoins(data)
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <h1>The Coins!
        {!loading? `(${coins.length})`:null}
      </h1>
      {loading? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin) =>
          (<option key={coin.id}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </option>)
        )}
      </select>
    </div>
  )
}

export default CoinTracker