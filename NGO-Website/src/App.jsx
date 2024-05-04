import "./App.css";
import Login from "./Pages/Login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login username="demon.com" password="pass"/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
