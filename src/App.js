import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ViewComplaint from './components/ViewComplaint';
import ViewReport from './components/ViewReport';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/Dashboard" render={(props) => <Dashboard {...props} />} /> */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/view-complaints" element={<ViewComplaint />} />
          <Route path="/view-reports" element={<ViewReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;