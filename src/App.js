import logo from './logo.svg';
import './App.css';

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
