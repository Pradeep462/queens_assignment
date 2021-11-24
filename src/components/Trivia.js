import React, { useEffect, useState } from 'react';
import './Trivia.css';

const Trivia = () => {
    const [data, setData] = useState([]);
    const [userAnswer, setUserAnswer] = useState('');
    const [isUserAnsRight, setIsUserAnsRight] = useState(false);
    const [isError, setIsError] = useState(false);


    const getData = async () => {
        const response = await fetch('https://jservice.io/api/random');
        const jsonresponse = await response.json();
        setData(jsonresponse);
        setIsUserAnsRight(false)
        setUserAnswer('')
        setIsError(false)
    }

    useEffect(() => {
        getData();
    }, []);

    const changeHandler = (e) => {
        setUserAnswer(e.target.value);
        setIsError(false)
    }

    const submitAnswer = () => {
        if (userAnswer == "") {
            setIsError(true);
            return;
        }
        setIsUserAnsRight(true);
        setTimeout(() => {
            getData();
        }, 2000)

    }

    return (
        <div className="p-3 container">

            {data && data.map((d) => {
                return <div key={d.id}>
                    <h3 className="m-5">{d.question}</h3>
                    <div className="form-group m-2 w-75 ms-5 ps-5 ">

                        <textarea className="form-control border border-primary" placeholder='Leave Your Answer Here' onChange={(e) => changeHandler(e)}></textarea>
                        <span className="text-danger">{isError ? "Please enter something*" : ""}</span>
                    </div>

                </div>

            })}
            {isUserAnsRight ? (data[0].answer == userAnswer ? <span className="btn btn-success mt-3 rounded">Your answer is correct</span> : <span className="btn btn-danger mt-3 rounded">Your Answer is incorrect</span>) : ""
            }
            <br />

            <button type="button" className="btn btn-primary mt-3 mb-3" onClick={submitAnswer} disabled={isUserAnsRight}>Submit Your Answer</button>
        </div>
    );
};

export default Trivia;