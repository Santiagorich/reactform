import './app.scss';
import LandingPage from './content/LandingPage/landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
<Router>
      <div className='App'>
      <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      </Routes>
      </div>
    </Router>  
    );
}

export default App;
