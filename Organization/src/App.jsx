import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import LoginPage from "./Loginpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navigation />
              <LoginPage></LoginPage>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
