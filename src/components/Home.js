import React, { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {

  let seconds = 15
  const [random, setRandom] = useState([])
  const [timerDisplay, setTimerDisplay] = useState('')

  const getRandom = async () => {
    try {
      const { data } = await axios.get('https://api.trivia.willfry.co.uk/questions?&limit=1')
      setRandom(data)
    } catch (error) {
      console.log(error)
    }
  }
  // getRandom pulls a single random quesation from API and saves to state

  useEffect(() => {
    getRandom()
    createTimer()
    setInterval(() => {
      setRandom([''])
      getRandom()
      seconds = 15
      setTimerDisplay('')
    }, 15000);
  }, [])
  // Waits for first render and runs getRandom & createTimer
  // Also runs a setInterval for every 15 seconds that clears the state and pulls a new question

  const createTimer = () => {
    setInterval(() => {
      seconds -= 1
      if (seconds < 11) {
        setTimerDisplay(seconds)
      }
    }, 1000)
  }
  // Uses a setInterval to increment time every second
  // Has condtional to check if seconds is less than 11 to set it to state
  // This will start the user display of the couter at 10 seconds remaining 

  const showAnswer = () => {
    document.querySelector('.hidden').style.display = 'block'
    document.querySelector('.show-answer').style.display = 'none'
  }
  // This toggles the display of the hidden answer 

  return (
    <>
      <h3 className='home-header'>Test Your Knowledge!</h3>
      <div className='home-display'>
        {random.map((ran) => {
          return (
            <div id={ran.id} key={ran.id}>
              <div className='question' >{ran.question}</div>
              <div className='hidden'>{ran.correctAnswer}</div>
              <div onClick={showAnswer} className='show-answer'>Reveal Answer</div>
            </div>

          )
        })}
      </div>
      <div className='timer-display' id={timerDisplay}>{timerDisplay}</div>
    </>
  )
}

export default Home