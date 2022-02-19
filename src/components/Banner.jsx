import React from "react";
import '../assets/banner.css'

function Banner() {

    return (
        <div className="banner--section">
            <div className="banner--content">
                <h2 className="banner--text">AYÚDANOS <span>A DARLES UN HOGAR </span>
                    ¡ELLOS NECESITAN DE TI!
                </h2>
                <a href="/" className="banner--link">Ver nuestras mascotas</a>
            </div>
            <figure className="banner--img-container">
                <img src="./src/assets/banner-gallery.png" alt="Pets gallery"
                    className="banner--img" />
            </figure>
        </div>
    );
}

export default Banner;