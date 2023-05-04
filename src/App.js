import { useState } from 'react';
import './App.css';
import { GrClearOption } from "react-icons/gr";

function App() {
  const [temp, setTemp] = useState(19)
  const [fahrenheit, setFahrenheit] = useState("")
  const [change, setChange] = useState(false)
  const [status, setStatus] = useState(false)

  function increaseTemp() {
    setTemp(temp + 1)
    setFahrenheit(fahrenheit + 1)
  }

  function decreaseTemp() {
    setTemp(temp - 1)
    setFahrenheit(fahrenheit - 1)
  }

  function changeToFahrenheit() {
    setFahrenheit((temp * 9 / 5) + 32)
    setChange(true)
    setStatus(true)
  }

  function changeToCelcius() {
    setTemp((fahrenheit - 32) * 5 / 9)
    setChange(false)
    setStatus(false)
  }

  function reset() {
    setTemp(19)
    setFahrenheit(66.2)
    console.log("hi")
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='box'>
          <div className='temp__wrapper'>
            {change ?
              <div className='temp'>{fahrenheit.toFixed(1)}°F</div> :
              <div className='temp'>{temp.toFixed(1)}°C</div>
            }
            <GrClearOption className='reset__button' onClick={reset}/>
          </div>
          <div className='buttons__wrapper'>
            <div className='buttons' onClick={increaseTemp}>+</div>
            <div className='buttons' onClick={decreaseTemp}>-</div>
          </div>
          <div className='change__buttons__wrapper'>
            {status ?
              <div className="change__button--wrapper"><button className='change__button' onClick={changeToCelcius}>Change to celcius!</button></div>
              :
              <div className="change__button--wrapper"> <button className='change__button' onClick={changeToFahrenheit}>Change to Fahrenheit!</button></div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
