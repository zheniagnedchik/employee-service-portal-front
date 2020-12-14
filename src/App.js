import React, {useEffect, useState, useMemo} from 'react';
import axios from 'axios'
import './App.css';

function App() {

    const [appState, setAppState] = useState([]);

    useEffect(() => {
        axios.get('"https://portal-employee-service.herokuapp.com/interview').then((resp) => {
            //осуществить проверку входных данных перед записью в стейт
            setAppState(resp.data);
        });
    }, []);

    useEffect(() => {
        console.log(appState)
    }, [appState]);


    return (
        <div className="App">
            <pre style={{"text-align": "left"}}>
                {JSON.stringify(appState, "", 4)}
            </pre>
        </div>
    );
}

export default App;
