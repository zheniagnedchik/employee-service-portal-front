import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [appState, setAppState] = useState({question:[]});
  useEffect(() => {
    const apiUrl = 'https://portal-employee-service.herokuapp.com/interview';
    axios.get(apiUrl).then((resp) => {
      const question = resp.data;
      setAppState({test:question});
    });
  }, [setAppState]);
  console.log(appState)
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
