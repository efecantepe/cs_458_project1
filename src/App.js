import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage'; // Assuming this is the component for the main page
import LoginForm from './LoginForm'; // Assuming this is the component for the login form


function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/mainPage" element={<MainPage></MainPage>} />
          <Route path="/" element={<LoginForm></LoginForm>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
