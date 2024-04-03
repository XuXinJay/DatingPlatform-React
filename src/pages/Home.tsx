import React from "react";
import Main from "../components/Home/Main.tsx";
import Footer from "../components/Home/Footer.tsx";
import Header from "../components/Home/Header.tsx";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
