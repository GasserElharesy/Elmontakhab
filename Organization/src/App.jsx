import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Navigation from './Navigation';
import OrgRegPage from './OrgRegPage';


function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/register" element={<OrgRegPage />} />
        </Routes>
      </Router>
    
  );
}

export default App;
