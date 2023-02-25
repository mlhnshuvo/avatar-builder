import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import TakePic from "../pages/TakePic";
import ChooseGender from "../pages/ChooseGender";
import AvatarCreator from "../pages/AvatarCreator";
import GetStarted from "../pages/GetStarted";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="takepicture" element={<TakePic />} />
        <Route path="choosegender" element={<ChooseGender />} />
        <Route path="avatarcreator" element={<AvatarCreator />} />
        <Route path="getstarted" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
