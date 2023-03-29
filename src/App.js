import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from './Component/Add';
import Edit from './Component/Edit';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route exact path="/Create"  element={<Add />} />
          <Route exact path="/edit"  element={<Edit />} />
          <Route exact path="*"  element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
