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
import PostManage from './PostManage';
import PostEdit from './PostEdit';
import { AuthProvider } from './contexts/AuthContext';
import ChatLayout from './component/ChatLayout'
import WithPrivateRoute from './utils/WithPrivateRoute';
import UserEditScreen from './component/UserEditScreen';
import UserListScreen from './component/UserListScreen';

function App() {
  return (  
    <>
    <AuthProvider>
    <Router>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/posts/:id'element={<Post/>} />
      <Route path='/search/:keyword' element={<LatestPosts/>}  />
      <Route path='/search' element={<Search/>} exact />
      <Route path='/admin/postlist' element={<PostManage/>} exact />
      <Route path='/admin/post/:id/edit' element={<PostEdit/>} />
      <Route
            exact
            path="/chat"
            element={
              <WithPrivateRoute>
              <ChatLayout />
              </WithPrivateRoute>
            }
          />
              <Route path='/admin/userlist' element={<UserListScreen/>} />
              <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} />

    </Routes>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
