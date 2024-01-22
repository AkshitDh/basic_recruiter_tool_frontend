import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import AddCandidate from "./AddCandidate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/add_candidate" element={<AddCandidate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
