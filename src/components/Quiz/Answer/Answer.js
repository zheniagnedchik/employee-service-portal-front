import React from "react";

import "./Answer.css";
import classnames from "classnames";

function Answer(props) {
  return (
    <div>
      <ul
        className={classnames("listAnswerContain", { reverse: !props.reverse })}
      >
        {props.answers.map((e) =>
          e.map((answer) => (
            <li key={answer.id} className="listAnswer">
              <button
                disabled={props.checked}
                className={
                  props.checked === false
                    ? "test"
                    : answer.result === false
                    ? "false"
                    : answer.result === true
                    ? "true"
                    : answer.result === "carrent"
                    ? "current"
                    : "answer"
                }
              >
                <label className="radioContainer custom-radio">
                  <input
                    type="radio"
                    onClick={() => props.selectAnswer(answer, e)}
                    disabled={props.checked}
                    className={
                      answer.result === true
                        ? "correctInput "
                        : answer.result === false
                        ? "incorrectInput "
                        : ""
                    }
                  />

                  <span />
                  <div>{answer.answer}</div>
                </label>
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Answer;
