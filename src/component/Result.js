import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetAllAction } from "../Redux/question_reducer";
import { resetResultAction } from "../Redux/result_reducer";
import "./Result.css";
import ResultTable from "./ResultTable";
const Result = () => {
  const dispatch = useDispatch();
  
  const { questions : { queue }, result : { result, userId}}  = useSelector(state => state)
 const attempts_Number=(result)=>{
    return result.filter(r => r !== undefined).length;
}

/* if(isLoading){
  <progress className="progress w-56 h-56 rounded-full"></progress>
} */

const answers = [0, 1, 2, 1, 0];
const answer = answers.map(i=>i)
   const earnPoints_Number=(result, answer, point)=>{
    const value = result.map(i=>i)
    const currentValue=[...value];
    console.log(currentValue);
    
    return result?.map((element, i) => answer[i]=== element)?.filter(i => i)?.map(i => point)?.reduce((prev, curr) => prev + curr,0);
   
}

 const flagResult=(totalPoints, earnPoints)=>{
  return (totalPoints * 50 / 100) < earnPoints; 
}


   const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answer, 10);
  const flag = flagResult(totalPoints, earnPoints);

  useEffect(() => {
    console.log(earnPoints);
    console.log(flag);
  });
  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'>Daily Test-</span>
            </div>
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>{totalPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>{ queue.length || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>{attempts || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'>{earnPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Quiz Result</span>
                <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
            </div>
        </div>

        <div className="start">
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>

        <div className="container">
            {/* result table */}
            <ResultTable 
            attempts={attempts}
            earnPoints={earnPoints}
            flag={flag}
            ></ResultTable>
        </div>
    </div>
  );
};

export default Result;
