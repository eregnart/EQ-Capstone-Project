import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginView from './views/LoginView';
import DashboardView from './views/DashboardView';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView/>}/>
        <Route path="/dashboard" element={<DashboardView />} />
      </Routes>
    </Router>
  )
}

export default App;
