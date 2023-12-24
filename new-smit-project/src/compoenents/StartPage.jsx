import React from 'react'
import { Link } from 'react-router-dom'

function StartPage() {
  return (
    <div className='box'>
      <h1>Start Quiz</h1>
      <Link to={"/home"}><button>Click Here</button></Link>
    </div>
  )
}

export default StartPage
