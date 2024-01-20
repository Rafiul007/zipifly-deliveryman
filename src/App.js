import Login from './Pages/LoginPage/Login.jsx';
import Signup from './Pages/SignupPage/Signup.jsx';
import Update from "./Pages/LoginPage/Update.jsx"
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/welcome' element={<Update />}/>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
