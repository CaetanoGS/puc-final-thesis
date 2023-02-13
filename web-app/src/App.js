import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/signup' element={<Register/>} />
          <Route path='/' element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}
