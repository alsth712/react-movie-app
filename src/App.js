import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myBudget, setMyBudget] = useState();
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); // json(=즉, coin) 정보를 얻었을 때 json의 값을 setCoins
        setLoading(false); // 로딩이 전부 되었으므로
      });
  }, []);
  const onChange = (event) => setMyBudget(event.target.value);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      $
      <input
        type="number"
        value={myBudget}
        onChange={onChange}
        placeholder="Write your budget in USD"
      />
      <br />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              {myBudget
                ? `   | 💰 Your Budget : ${myBudget / coin.quotes.USD.price} ${
                    coin.name
                  } 💰`
                : ""}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
