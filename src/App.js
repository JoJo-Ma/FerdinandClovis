import './App.css';
import Home from './Home'
import All from './All'


import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/all" element={<All />}/>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
