import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import './style.scss'
import { useContext } from "react";
import { AuthContext } from "./context/authContext";


function App() {
  const {currentUser} = useContext(AuthContext)
      
  const ProtectUser = ({children})=>{
    if(!currentUser) {
      return <Navigate to="login"/>
    }
    return children
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={
            <ProtectUser>
              <Home/>
            </ProtectUser>
            } />
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
