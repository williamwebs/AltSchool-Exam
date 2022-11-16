import React from "react";
import { Routes, Route } from "react-router-dom";

import { About, Home, Users, _404, ErrorBoundary, Login } from "./pages";

function App() {
  // throw Error("oops");
  return (
    <React.Fragment>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<_404 />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
