
import './App.css';

import Counters from './counters';
import Form from './form';
import Leaderboard from './leaderboard';

function App() {
  return (
    <div className="App">

     <h1>ScoreKeeper App</h1>

     <Counters />

     <Form />

     <Leaderboard />

    </div>
  );
}

export default App;
