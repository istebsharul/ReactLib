import { useState } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyinfo';
import { InputBox } from './components'


function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [converted, setConverted] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  let swapped = false;

  const swap = () => {
    if (!swapped) {
      setConverted(amount)
      setAmount(amount / currencyInfo[to])
      swapped = true
      console.log(swapped)
    } else {
      console.log("else")
      setAmount(converted)
      setConverted(amount)
      swapped = false
      console.log(swapped)
    }
  }


  const convert = () => {
    // console.log("Hello");
    setConverted(amount * currencyInfo[to])
  }



  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        // backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
                onCurrencyChange={(currency) => {
                  // alert("Currency Changed");
                  // console.log(currency);
                  setFrom(currency)
                }}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>


            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={converted}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  // alert("Currency Changed");
                  // console.log(currency);
                  setTo(currency)
                }}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
