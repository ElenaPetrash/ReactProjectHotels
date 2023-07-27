import React from "react";

import Bookings from "./Bookings";
import "./App.css";

import Heading from "./components/heading";
import CardInfoCity from "./components/cardsInfoTowns";
import Footer from "./components/footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading/>
      <CardInfoCity/>
      <Bookings />
      <Restaurant/>
      <Footer/>
    </div>
  );
};

export default App;
