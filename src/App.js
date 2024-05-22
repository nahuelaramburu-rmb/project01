import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Form from './components/Form/Form';

function App() {
  return (
    <div>
    <Router>
      <Header />  
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Form />
      </Router>
    </div>
  );
}

export default App;
