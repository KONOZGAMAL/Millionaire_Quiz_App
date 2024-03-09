import { useEffect, useMemo, useState } from "react";
import DisplayQuestions from "./Components/DisplayQuestions";
import "./app.css";
import Start from "./Components/Start";
import Timer from "./Components/Timer";
import Button from "./Components/Button";
function App() {
  const [addClass, setAddClass] = useState(1);
  const [stopTimer, setStopTimer] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [display, setDisplay] = useState(true);
  const [userName, setUserName] = useState("");
  const resetQuiz = () => {
    setAddClass(1);
    setStopTimer(false);
    setEarned("$ 0");
    setDisplay(true);
    setUserName("");
  };

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, num: "$ 100" },
        { id: 2, num: "$ 200" },
        { id: 3, num: "$ 300" },
        { id: 4, num: "$ 500" },
        { id: 5, num: "$ 1.000" },
        { id: 6, num: "$ 2.000" },
        { id: 7, num: "$ 4.000" },
        { id: 8, num: "$ 8.000" },
        { id: 9, num: "$ 16.000" },
        { id: 10, num: "$ 32.000" },
        { id: 11, num: "$ 64.000" },
        { id: 12, num: "$ 125.000" },
        { id: 13, num: "$ 250.000" },
        { id: 14, num: "$ 500.000" },
        { id: 15, num: "$ 1.000.000" },
      ].reverse(),
    []
  );
  useEffect(() => {
    addClass > 1 &&
      setEarned(moneyPyramid.find((e) => e.id == addClass - 1).num);
  }, [addClass, moneyPyramid]);
  return (
    <div className="app">
      {display? (
        <Start setDisplay={setDisplay} setUserName={setUserName}/>
      ) : (
        <>
          <div className="the_questions">
            {stopTimer ? (
              <div>
              <h3> Ya ( {userName} ) You Earned {earned}</h3>
                <Button resetQuiz={resetQuiz}/>
              </div>
            ) : (
              <>
                <div className="count">
                <Timer setStopTimer={setStopTimer} addClass={addClass}/>
                </div>
                <div className="questions_main">
                  <DisplayQuestions
                    addClass={addClass}
                    setAddClass={setAddClass}
                    setStopTimer={setStopTimer}
                  />
                </div>
              </>
            )}
          </div>
          <div className="awards">
            <div className="main_award">
              <ul className="list">
                {moneyPyramid.map((element) => (
                  <li
                    key={element.id}
                    className={
                      addClass === element.id ? "item_list active" : "item_list"
                    }
                  >
                    <span className="item_id">{element.id}</span>
                    <span className="item_num">{element.num}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
