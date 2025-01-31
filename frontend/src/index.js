import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" for React 18+
import App from "./App";
import { UserProvider } from "./UserContext"; // Wrap the app with your context provider

// Create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);


/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Bus from './pages/Bus';
import Details from './pages/detailed_pg';


const App = () => (
  <Router>
    <Routes>
      <Route path="/buses" element={<Bus />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </Router>
);

export default App;
*/