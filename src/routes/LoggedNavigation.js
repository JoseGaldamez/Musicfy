import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Artists, Artist, Album, Albums, Profile } from "../pages";

export const LoggedNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
