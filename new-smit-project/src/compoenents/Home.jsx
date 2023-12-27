import { useState, useEffect, useRef } from 'react'
import { data } from './Question'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { IncreaseScore } from './CreateSlice'
//useEffect
//1. initial:component shuru hote hi koi kaam krwana e.g= Api call krwana
//2. updation
//3. unmount
// useEffect(()=>
// },[]) khali array ka mtlb k ye bs ek baar chlegaa
// [] = dependency list
//initial stage kb chle chlega : first render k baad
function App() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [lock, setLock] = useState(false)
    const [time, setTime] = useState(10)
    const questionLength = currentIndex !== data.length - 1
    const dispatch = useDispatch()

    const check = (e, ans) => {
        if (lock === false) {
            if (data[currentIndex].ans === ans) {
                e.target.classList.add("correct");
                dispatch(IncreaseScore(1))
                setLock(true)
            } else {
                e.target.classList.add("wrong")
                setLock(true)
            }
        }

    }
    const next = () => {
        if (lock === true) {
            setCurrentIndex(currentIndex + 1)
            setLock(false)

            option_array.map((option) => {
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
            })
            setTime(10);
        }
    }
    const option1 = useRef(null)
    const option2 = useRef(null)
    const option3 = useRef(null)
    const option4 = useRef(null)
    const option_array = [option1, option2, option3, option4]

    const result = useNavigate()

    useEffect(() => {
        const countdown = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);


        return () => clearInterval(countdown);
    }, []);

    useEffect(() => {
        if (time === 0) {
            if (currentIndex === data.length - 1) {
                // Handle reaching the end of questions here
                result('/result');
            } else {
                setCurrentIndex(prevIndex => prevIndex + 1);
                setLock(false);
    
                option_array.forEach(option => {
                    if (option.current) {
                        option.current.classList.remove('wrong');
                        option.current.classList.remove('correct');
                    }
                });
                setTime(10);
            }
        }
    }, [time, currentIndex, result]);
    


    return (
        <>

            <div className='container'>
                <div> <p>Timer 00:{time < 10 ? `0${time}` : time}</p></div>
                <div className='question'>
                    <h1>{currentIndex + 1} : {data[currentIndex]?.question ?? 'Not Found'}</h1>
                </div>
                <br /><br />
                <ul>
                    <li ref={option1} onClick={(e) => { check(e, 1) }}>{data[currentIndex]?.option1}</li>
                    <li ref={option2} onClick={(e) => { check(e, 2) }}>{data[currentIndex]?.option2}</li>
                    <li ref={option3} onClick={(e) => { check(e, 3) }}>{data[currentIndex]?.option3}</li>
                    <li ref={option4} onClick={(e) => { check(e, 4) }}>{data[currentIndex]?.option4}</li>
                </ul>

                {questionLength ? <button onClick={next}>Next</button> :
                    <button onClick={() => { result('/result') }}>Result</button>}
                <p>{currentIndex + 1} of {data.length}</p>
            </div>


        </>
    )
}


export default App
