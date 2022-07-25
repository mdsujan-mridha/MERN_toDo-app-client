import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import ToDo from './component/ToDo/ToDo';
import Registration from './component/Registration/Registration';
import DashBoard from './component/DashBoard/DashBoard';
import RequireAuth from './component/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='todo' element={<RequireAuth>
          <ToDo></ToDo>
        </RequireAuth>}></Route>
        <Route path='registration' element={<Registration></Registration>}></Route>
        <Route path='dashboard' element={<DashBoard></DashBoard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
