import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Check from './components/Chceck/Check';
import Email from './components/Email/Email';
import { toast, ToastContainer } from "react-toastify";
import PhoneNum from './components/PhonNumber/PhoneNum';
import RegisterUser from './components/Rejister/RegisterUser';
import LoginUser from './components/Login/LoginUser';
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Card from './components/Card/Card'


function App() {
  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<RegisterUser/>}/>
        <Route path='/login' element={<LoginUser/>} />
        <Route path='/Check' element={<Check/>} />
        <Route path='/Card' element={<Card/>} />
        <Route path='/Email' element={<Email/>} />
        <Route path='/phone' element={<PhoneNum/>} />

        {/* <Route path='/Login' element={<Login/>} /> */}

      </Routes>
    </>
  );
}

export default App;
