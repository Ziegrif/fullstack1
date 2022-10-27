import { useState } from 'react'
const Stats = (props) => {
  return (
    <div>
      <div><p> Good {props.good} </p></div>
      <div><p> Neutral {props.neutral} </p></div>
      <div><p> Bad {props.bad} </p></div>
      <div><p>All {props.bad+props.good+props.neutral}</p></div>
      <div><p>Average {((props.good-props.bad)/(props.bad+props.good+props.neutral))}</p></div>
      <div><p>Average positive {((props.good)/(props.bad+props.good+props.neutral))}%</p></div>
    </div>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [showStats, setShowStats] = useState(true)

  const handleClickGood = () => {
    setGood(good + 1)
    setShowStats(false)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setShowStats(false)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
    setShowStats(false)
  }
  


  return (
    <div>
      <h2>Stats</h2>
      {!showStats ? <Stats bad={bad} good={good} neutral={neutral} showStats={showStats}/> : null}
      <h2>Buttons</h2>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
    </div>
  )
}

export default App