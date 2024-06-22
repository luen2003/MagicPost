import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Header from './component/Header'
import Homepage from './Homepage';
import Login from './Login';
import Search from './Search';

function App() {
  return (  
    <>
    <Router>
    <Routes>
      <Route path='/' Component={Homepage}/>
      <Route path='/login' Component={Login}/>
      <Route path='/search' Component={Search}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
