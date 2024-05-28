import { React } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './Components/CommonComponents/NavbarComponent/Navbar';
import { routes } from './Routes/routes';

function App() {
  return (
      <Router>
        <Navbar routes={routes} />
        <Routes>
          {routes.map((link) => (
            (link.path === '/')
              ? <Route exact path={link.path} element={link.element} key={link.id} />
              : <Route path={link.path} element={link.element} key={link.id} />
          ))}
        </Routes>
      </Router>
  );
}

export default App;