import React from "react";

const Hero = ({ openModalHandler }) => {
  return (
    <div className="container">
      <div className="hero">
        <p className="hero-title">Mint Your Kirin NFT</p>
        <p>
          Your Kirin NFT grants you a browser-based wallet that freely connects
          all of your social networks. <br />
          <br /> Gamers who've enjoyed chatting with friends while playing
          online games can now enter any Web3 game as a group and play, talk,
          and earn - together! We expect dozens of metaverses will prosper,
          offering gamers an exciting variety of worlds... but only one
          metaverse will transport you to ALL of them, with your squad in tow,
          via the Kirin Browser Wallet. <br />
          <br /> Our public team has been coding on the blockchain since the
          early days of crypto, and our project is backed by one of California's
          largest real estate developers. <br />
          <br /> Kirin is a new dynasty.
        </p>
        <p className="hero-create-btn">Create Avatar</p>
        <p className="hero-join-waitlist" onClick={openModalHandler}>
          Join Waitlist
        </p>
      </div>
    </div>
  );
};

export default Hero;
