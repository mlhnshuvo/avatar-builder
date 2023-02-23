import React, { useEffect, useState } from "react";
import AvatarImg from "../assets/images/woman.png";

const AvatarCreator = () => {
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    setShowImg(false);
    setTimeout(() => {
      setShowImg(true);
    }, 2000);
  }, []);

  return (
    <div>
      {showImg ? (
        <img src={AvatarImg} alt="" className="avatar-img" />
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default AvatarCreator;
