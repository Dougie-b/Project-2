import React, { useState, useEffect } from 'react'
import axios from 'axios'

const List = () => {

  // const [dataItems, setDataItems] = useState([])
  const [questions, setQuestions] = useState([])
  const [catogories, setCatogories] = useState([])
  const [filQuestions, setFilQuestions] = useState([])

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const { data } = await axios.get('https://api.trivia.willfry.co.uk/questions?&limit=50')
        setQuestions(data)
      } catch (error) {
        console.log(error)
      }
    }
    getQuestions()
  }, [])
  // useEffect wait for render to run getQuestions 
  // getQuestions makes pull request from API for 50 questions and saves to dataItems state 

  useEffect(() => {
    getCatogories()
  }, [questions])
  // useEffect Waits for questions to have loaded before running getCatogories

  // !useEffect(() => {
  //   !let arr3 = []
  //  ! dataItems.forEach(d => {
  //     !if (!arr3.includes(d)) {
  //      ! arr3.push(d)
  //    ! }
  //   !});
  //   !setQuestions(arr3)
  //! }, [dataItems])
  // useEffect was an attempt at filtereing duplicate questions from the API
  // Wait for original state to have loaded before running a forEach loop and checking whther an occurance of the same
  // question was already in an array to then push it and save that array to a new state 

  function getCatogories() {
    let arr = []
    questions.forEach(q => {
      if (!arr.includes(q.category)) {
        arr.push(q.category)
      }
    })
    setCatogories(arr)
  }
  // getCatogories is for getting the categories for our select options. Uses a forEach loop to check whether same instance of 
  // category wasn't already present in a new array to push it and then save that array to catogories state

  const filter = (e) => {
    const value = e.target.value
    const arr2 = questions.filter((q) => q.category === value)
    setFilQuestions(arr2)
  }
  // filter is for which category has been selected from select. It saves the value as the target elements value and checks that 
  // in a filter against every elements category within the questions state and saves to array. That array is then set to setFilQuestions state

  const numberShow = (e) => {
    const value = e.target.value
    if (value > 4 && value < 9) {
      const arr4 = questions.slice(0, 5)
      setQuestions(arr4)
    } else if (value > 9 && value < 19) {
      const arr4 = questions.slice(0, 10)
      setQuestions(arr4)
    } else if (value > 19 && value < 29) {
      const arr4 = questions.slice(0, 20)
      setQuestions(arr4)
    } else if (value > 29) {
      const arr4 = questions.slice(0, 30)
      setQuestions(arr4)
    } else {
      setQuestions(dataItems)
    }
  }
  // numberShow is for filtering amount of questions displayed. Does not function perfectly but uses conditions to 
  // check value of select options against numbers to return a sliced array from the questions state and set that as questions

  return (
    <>
      <div className='list-top'>
        <div className="list-headers">
          <h1>Question List</h1>
          <h2>Refresh for 50 new ones</h2>
        </div>
        <div onChange={numberShow} className='filter-section'>
          <select className='numbers'>
            <option value="">all</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <select onChange={filter}>
            <option defaultValue=''>-All Categories-</option>
            {catogories.map((cat, i) => {
              return (
                <option key={i} defaultValue={cat}>{cat}</option>
              )
            })}
          </select>
        </div>
      </div>
      <div className="questions-container">
        {
          (filQuestions.length ? filQuestions : questions).map((q, index) => {
            return (
              <div key={index} className='question-display'>
                <div className='question'>{q.question}</div>
                <div className='answer'>{q.correctAnswer}</div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default List