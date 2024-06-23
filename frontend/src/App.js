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
import Register from './Register';
import LatestPosts from './component/LatestPost';
import Post from './component/Post';
import SearchBar from './component/SearchBar';

function App() {
  return (  
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/posts/:id'element={<Post/>} />
      <Route path='/search/:keyword' element={<LatestPosts/>}  />
      <Route path='/search' element={<Search/>} exact />

    </Routes>
    </Router>
    </>
  );
}

export default App;
