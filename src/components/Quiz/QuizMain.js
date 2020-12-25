import React, { useState, useEffect } from "react";
import QuestionTitle from "./QuestionTitle/QuestionTitle";
import Answer from "./Answer/Answer";
import NextQuestion from "./ButtonContainer/ButtonContainer";
import Header from "./Header/Header";
import StatusBar from "./StatusBar/StatusBar";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import CloseTest from "./CloseTest/CloseTest";
import CorrectTest from "./CorrectTest/CorrectTest";
import CorrectStatusBar from "./correctStatusBar/CorrectStatusBar";
import axios from "axios";

function QuizMain() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [appStates, setAppState] = useState({ appState: [] });
  const [numberQuestions, setNumberQuestion] = useState(0);
  const [answerList, setAnswerlist] = useState([]);
  const [checked, setChecked] = useState(false);
  const [truAnswer, setTruAnswer] = useState(true);
  const [timer, setTimer] = useState(true);
  const [count, setCount] = useState(5);
  const [score, setScore] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [closeTest, setClosetest] = useState(false);

  const [pus, setPush] = useState({
    Test: "ok",
  });
  console.log(pus);
  useEffect(() => {
    if (timer === false) {
      const startTimer = setInterval(() => {
        setCount((val) => val - 1);
      }, 1000);
      if (count === 0) {
        if (answerList.result === false) {
          setAnswerlist((answerList.result = "FALSE"));
        }

        setChecked(false);
        setTimer(true);
        clearInterval(startTimer);
        setReverse(!reverse);
      }
      return () => clearInterval(startTimer);
    }
  }, [count, timer]);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://portal-employee-service.herokuapp.com/interview"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setAppState({ appState: result });
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const questions = appStates.appState.filter((question, i) => {
    if (i === numberQuestions) {
      return question;
    }
  });
  const answer = questions.map((ans) => ans.listAnswerDto);

  function nextQuestion() {
    setChecked(false);
    setNumberQuestion(numberQuestions + 1);
    setTruAnswer(true);
  }
  console.log(reverse);
  function selectAnswer(answer, e) {
    setChecked(true);

    setAnswerlist(answer);

    if (answer.result === "FALSE") {
      setCount(5);
      setTimer(false);
      answer.result = false;
    }

    if (answer.result === "TRUE") {
      answer.result = true;
    }
    if (answer.result === true) {
      setTruAnswer(false);
      setScore(score + 1);
    }
    if (answer.result === "carrent") {
      answer.result = true;
      setTruAnswer(false);
      setScore(score + 1);
    }
    if (answer.result === false) {
      e.map((currentAnswer) => {
        if (currentAnswer.result === "TRUE") {
          currentAnswer.result = "carrent";
        }
      });
    }
  }
  function backToQuestion() {
    setCount(0);
  }

  function Close() {
    setClosetest(true);
  }
  function ProcessedTest() {
    setClosetest(false);
  }

  return (
    <div>
      <Header />
      <HeaderTitle timer={timer} />
      {score === 3 ? (
        <CorrectStatusBar />
      ) : (
        <StatusBar
          numberQuestions={numberQuestions}
          count={count}
          timer={timer}
        />
      )}

      <QuestionTitle questions={questions} />
      <Answer
        answers={answer}
        selectAnswer={selectAnswer}
        checked={checked}
        reverse={reverse}
      />
      <NextQuestion
        nextQuestion={nextQuestion}
        truAnswer={truAnswer}
        BackToQuestion
        checked={checked}
        backToQuestion={backToQuestion}
        timer={timer}
        Close={Close}
      />

      {closeTest ? <CloseTest ProcessedTest={ProcessedTest} /> : ""}
      {score === 3 ? <CorrectTest /> : ""}
    </div>
  );
}

export default QuizMain;
