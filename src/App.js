import Signup from "./Pages/SignupPage/Signup.jsx";
import Update from "./Pages/LoginPage/Update.jsx";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ParcelAccepted from "./Pages/ParcelAccepted/ParcelAccepted.jsx";
import DisplayAllParcel from "./Pages/DisplayAllParcel/DisplayAllParcel.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Update />} />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/parcel/accepted" element={<ParcelAccepted />}></Route>
          <Route path="/parcel/all" element={<DisplayAllParcel />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
