import { useEffect, useState } from "react";
import "../app.css";
import data from "./data.json";
import useSound from "use-sound";
import play_correct from "../assets/src_sounds_correct.mp3";
import play_wrong from "../assets/src_sounds_wrong.mp3";
export default function DisplayQuestions({addClass, setAddClass , setStopTimer }) {
  const [displayOneQuiz, setDisplayOneQuiz] = useState([]);
  const [classToCorrectAnswer, setClassToCorrectAnswer] = useState("answer");
  const [selectAnswer, setSelectAnswer] = useState(null);
   const [playC] = useSound(play_correct);
   const [playW] = useSound(play_wrong);
  useEffect(() => {
    setDisplayOneQuiz(() => data[addClass - 1]);
  },[addClass]);
  const delay = (duration,collBack)=>{
   setTimeout(() => {
    collBack()
   }, duration);
  }
  const handleClick = (pram)=>{
    setSelectAnswer(pram)
    delay(1000,()=>{
      setClassToCorrectAnswer(pram.correct?"answer correct":"answer wrong")
    })
    delay(2000,()=>{
      if(pram.correct){
        playC();
      }else{
        playW()
      }
    })
    delay(4000,()=>{
      setAddClass(pram.correct?addClass+1:setStopTimer(true))
    })
  }
  return (
    <div>
      <div className="quiz">{displayOneQuiz.question}</div>
      <ul className="questions_list">
     {
      displayOneQuiz.answers?.map((answer,index)=>(
        <li className={selectAnswer === answer?classToCorrectAnswer:"answer"}
         key={index}
         onClick={()=>handleClick(answer)}>{answer.text}</li>
     ))}
      </ul>
    </div>
  );
}
