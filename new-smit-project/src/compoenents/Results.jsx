import React from 'react'
import { useSelector } from 'react-redux'

function Results() {
  const score = useSelector((state) => state.result.result.scoring);
  console.log(score)
  return (
    <>
      <div className='box'>
        <h1>Results</h1>
        <h2>Your Score is {score}/5</h2>
      </div>
    </>
  )
}

export default Results
