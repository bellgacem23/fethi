import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignInPage from './components/SignInPage';
import DashboardPage from './pages/DashboardPage';
import Courses from './pages/Courses';
import Exercises from './pages/Exercises';
import Exams from './pages/Exams';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profileImage, setProfileImage] = useState('./components/profil.jpg');
  const [credentials, setCredentials] = useState({
    admin: { email: 'admin', password: 'admin123' },
    student: { email: 'etudiant', password: 'isimm' },
  });
  const [currentProfile, setCurrentProfile] = useState({
    email: 'etudiant',
    password: 'isimm',
  });

  const handleLogin = (email, password) => {
    const user = credentials[email === credentials.admin.email ? 'admin' : 'student'];
    if (user && email === user.email && password === user.password) {
      setIsAdmin(email === credentials.admin.email);
      setIsAuthenticated(true);
      setCurrentProfile({ email, password });
    } else {
      alert("Invalid credentials");
      setIsAdmin(false);
      setIsAuthenticated(false);
    }
  };

  const handleUpdateProfileImage = (newImage) => {
    setProfileImage(newImage);
  };

  const handleUpdateCredentials = (newEmail, newPassword) => {
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [isAdmin ? 'admin' : 'student']: { email: newEmail, password: newPassword }
    }));
    setCurrentProfile({ email: newEmail, password: newPassword });
  };

  return (
    <Router>
      <MyNavbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={!isAuthenticated ? <SignInPage handleLogin={handleLogin} /> : <Navigate to="/" />}
        />
        {isAuthenticated && (
          <>
            <Route path="/dashboard" element={isAdmin ? (
              <DashboardPage
                profileImage={profileImage}
                onUpdateProfileImage={handleUpdateProfileImage}
                onUpdateCredentials={handleUpdateCredentials}
              />
            ) : <Navigate to="/" />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/exams" element={<Exams />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
