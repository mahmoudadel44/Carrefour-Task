import React, { Component } from "react";
import "../src/css/bootstrap.min.css";
import './css/App.css'
import "../src/css/mainStyle.css"
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Services from './components/Services'
import Header from './components/Header'
import ImagesSlider from './components/ImagesSlider'
import Features from './components/Features'
import MarketsPictures from './components/markets_pictures'
import DealsSlider from './components/DealsSlider'
import Products from './components/Products'
import OurProductsSlider from './components/OurProductsSlider'
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Categories/>
        <Services/>
        <Header/>
        <ImagesSlider/>
        <Features/>
        <MarketsPictures/>
        <DealsSlider/>
        <Products/>
        <OurProductsSlider/>
        <Footer/>
      </div>
    );
  }
}

export default App;
