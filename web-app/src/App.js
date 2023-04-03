import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}
