import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './components/Register';
import Graph from './components/Graph';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/nav" element={<NavBar />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="graph" element={<Graph />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
