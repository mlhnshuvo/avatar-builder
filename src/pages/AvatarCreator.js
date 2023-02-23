import React from "react";
import Sidebar from "../components/Sidebar";
import AvatarCreatorCom from "../components/AvatarCreator";

const AvatarCreator = () => {
  return (
    <div>
      <Sidebar avatar>
        <AvatarCreatorCom />
      </Sidebar>
    </div>
  );
};

export default AvatarCreator;
