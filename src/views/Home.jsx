import React from "react";
import Banner from '../components/Banner'
import About from '../components/About'
import Help from '../components/Help'

function Home() {

    return (
        <div className="home--section">
          <Banner />
          <About />
          <Help />
        </div>
    );
}

export default Home;