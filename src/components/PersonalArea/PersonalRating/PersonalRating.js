import React, { useState, useEffect } from "react";
import "./PersonalRating.css";
import axios from "axios";

function PersonalRating() {
  const [departaments, setDepartaments] = useState({ departament: [] });
  const [peoples, setPeople] = useState({ people: [] });
  const [postDeps, SetPostDeps] = useState();

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://portal-employee-service.herokuapp.com/evaluation/department"
    )
      .then((res) => res.json())
      .then((result) => {
        setDepartaments({ departament: result });
      });
  }, []);

  const data = new Date();
  const d = (data.getFullYear(), data.getMonth() + 1, data.getDate());
  console.log(d);

  function postDep(e) {
    SetPostDeps(e);

    fetch(
      `https://cors-anywhere.herokuapp.com/portal-employee-service.herokuapp.com/evaluation/department/${e.department}`
    )
      .then((res) => res.json())
      .then((result) => {
        setPeople({ people: result });
      });
  }

  function postPeople(peopl) {
    const id = {
      valuingEmployeeId: 4,
      evaluateEmployeeId: peopl.id,
    };
    
    axios.post(
      `/путь к базе`,
      id
    );
  }

  return (
    <div className="PersonalRating">
      <h1>Departament</h1>

      <ul>
        {departaments.departament.map((e) => (
          <li>
            <button onClick={() => postDep(e)}>{e.department}</button>
          </li>
        ))}
      </ul>
      <h1>People</h1>
      <ul>
        {peoples.people.map((peopl) => (
          <li>
            <button onClick={() => postPeople(peopl)}>
              {peopl.lastName}
              {peopl.firstName}
              {peopl.patronymic}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalRating;
