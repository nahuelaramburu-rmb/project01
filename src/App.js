<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
>>>>>>> 9979a6080d76191de9b46bf12a42944fb41f7586

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
<<<<<<< HEAD
        <Form />
=======
>>>>>>> 9979a6080d76191de9b46bf12a42944fb41f7586
      </Router>
    </div>
  );
}

export default App;
