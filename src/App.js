import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/form/Form';
import Navbar from './components/navbar/Navbar';
import Provider from './context/Provider';
import Blogs from './components/blog/Blogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/blog/Details';
import Login from './components/Auth/Login';
import User from './components/Auth/User';

function App() {
 
  return (
        <BrowserRouter>

            <Provider>
              <Navbar/>
              <Routes>
                <Route path={'/form'}  element={<Form/>} />
                <Route path={'/'}  element={<Blogs/>} />
                <Route path={'/details/:id'}  element={<Details/>} />
                <Route path={'/login'}  element={<Login/>} />
                <Route path={'/user'}  element={<User/>} />
              </Routes>
            </Provider>
  
        </BrowserRouter>
  );
}

export default App;
