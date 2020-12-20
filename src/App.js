import QuizMain from './components/Quiz/QuizMain';
import PersonalMain from './components/PersonalArea/PersonalMain/PersonalMain'
import Rating from './components/Rating/RangeMain'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={PersonalMain}></Route>
          <Route  path="/quiz" component={QuizMain}></Route>
          <Route path="/rating" component={Rating}></Route>
      
      <QuizMain />
        </Switch>
    

      </Router>
    
    </div>
  );
}

export default App;
