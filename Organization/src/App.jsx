
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Navigation from './Navigation';
import OrgRegPage from './OrgRegPage';

const appStyle = {
  body: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    lineHeight: '1.5',
    fontWeight: '400',
    colorScheme: 'light dark',
    color: 'white',
    backgroundColor: 'white',
    minHeight: '100vh',
    margin: '0'
  },
  h1: {
    fontSize: '3.2em',
    lineHeight: '1.1'
  }
};

function App() {
  return (
    <Router>
      <div style={appStyle.body}>
        <h1 style={appStyle.h1}>App</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/register" element={<OrgRegPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
