import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bus from "./pages/Bus";
import Flight from "./pages/Flight";
import UserProfile from "./pages/UserProfile";
import TrainApp from "./pages/Train";
import Login from "./pages/Login";
import TransportDetails from "./pages/detailed_pg";
import ProtectedRoute from "./component/ProtectedRoute";
import { AuthProvider } from "./component/AuthContext";
import { UserProvider } from "./UserContext"; 

function App() {
  return (
    <AuthProvider>
      <UserProvider> {/* Wrap your app with UserProvider */}
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Bus />} />

            {/* Protected Routes */}
            <Route
              path="/flights"
              element={
                <ProtectedRoute>
                  <Flight />
                </ProtectedRoute>
              }
            />
            <Route
              path="/trains"
              element={
                <ProtectedRoute>
                  <TrainApp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-profile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/details"
              element={
                <ProtectedRoute>
                  <TransportDetails />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
