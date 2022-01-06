import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/form/Form';
import Navbar from './components/navbar/Navbar';
import Provider from './context/Provider';
import Blogs from './components/blog/Blogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/form/Login';
import { useEffect } from 'react';

function App() {
 
  return (
    <div className="App">
     
      <Provider>
        <BrowserRouter>
            <Navbar/>
        <Routes>
          <Route path={'/form'}  element={<Form/>} />
          <Route path={'/'}  element={<Blogs/>} />
        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
