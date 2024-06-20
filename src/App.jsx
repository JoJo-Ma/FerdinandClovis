import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import All from './All';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function App() {
    return (
        <div className="App">
            <Router basename="/">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/all" element={<All />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
