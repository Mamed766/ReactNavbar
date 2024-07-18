import React from "react";
import Header from "./featured/header/header.featured";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routers } from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routers &&
          routers.map((router, index) => (
            <Route path={router.path} element={router.element} />
          ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
