import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/home";
import Layout from "./views/layout";
import PetSearch from "./views/PetSearch";
import './App.css'
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/mascotas" element={<PetSearch />} />
          </Route>
        </Routes>
      </div>
    </UserContextProvider>
  );
};

export default App;