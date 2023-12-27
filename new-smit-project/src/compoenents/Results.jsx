import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { ScoreZero } from './CreateSlice';
import { Link } from 'react-router-dom';


function Results() {
  const score = useSelector((state) => state.result.result.scoring);
  const dispatch = useDispatch();
  const zeroScore=()=>{
    dispatch(ScoreZero())
  }
  console.log(score)
  return (
    <>
      <div className='box'>
        <h1>Results</h1>
        <h2>Your Score is {score}/5</h2>

        <Link to="/"><button onClick={zeroScore} > Restart</button></Link>
      </div>
    </>
  )
}

export default Results
