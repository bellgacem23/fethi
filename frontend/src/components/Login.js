import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Courses from './components/Courses';
import Exercises from './components/Exercises';
import Exams from './components/Exams';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
