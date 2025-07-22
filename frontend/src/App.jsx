// import { Box, useColorModeValue } from "@chakra-ui/react";
// import { Route, Routes } from "react-router-dom";
// //import './App.css';

// import CreatePage from "./pages/CreatePage";
// import HomePage from "./pages/HomePage";
// import Navbar from "./components/Navbar";

// function App() {
// 	return (
// 		<Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
// 			<Navbar />
// 			<Routes>
// 				<Route path='/' element={<HomePage />} />
// 				<Route path='/create' element={<CreatePage />} />
// 			</Routes>
// 		</Box>
// 	);
// }

// export default App;

import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import Home from './pages/HomePage';
import Create from './pages/CreatePage';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<PrivateRoute element={<Home/>} />} />
        <Route path='/create' element={<PrivateRoute element={<Create />} />} />
      </Routes>
    </div>
  );
}

export default App;