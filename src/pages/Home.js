import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ModalJoin from "../components/ModalJoin";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="home">
      <Header />
      <Hero openModalHandler={openModalHandler} />
      <Footer home />
      {openModal && <ModalJoin openModalHandler={openModalHandler} />}
    </div>
  );
};

export default Home;
