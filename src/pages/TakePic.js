import React from "react";
import Sidebar from "../components/Sidebar";
import TakePicCompo from "../components/TakePic";

const TakePic = () => {
  return (
    <div>
      <Sidebar>
        <TakePicCompo />
      </Sidebar>
    </div>
  );
};

export default TakePic;
