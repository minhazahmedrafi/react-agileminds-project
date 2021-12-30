import React from "react";
import "./home.scss";
import BricFounders from "../../components/bricFounders/BricFounders";
import BricSlider from "../../components/bricSlider/BricSlider";
import CorpoLogos from "../../components/corpoLogos/CorpoLogos";
import Corporation from "../../components/corporation/Corporation";
import Famous from "../../components/famous/Famous";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Map from "../../components/map/Map";
import Overview from "../../components/overview/Overview";
import RenataLTD from "../../components/renataLTD/RenataLTD";
import Singleperson from "../../components/singleperson/Singleperson";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <Header />
        <Corporation />
        <CorpoLogos />
        <BricFounders />
        <RenataLTD />
        <Singleperson />
        <BricSlider />
        <Overview />
        <Famous />
        <Map />
        <Footer />
      </div>
    </>
  );
};

export default Home;
