import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CityView from './view/CityView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/city/:cityId" element={<CityView />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
