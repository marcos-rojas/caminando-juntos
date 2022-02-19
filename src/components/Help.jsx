import React from "react";
import '../assets/help.css'

function Help() {

    return (
        <div className="help--section">
            <div className="help--content">
                <h2 className="help--text">
                    APADRINA UNA MASCOTA
                </h2>
                <p>¡AYÚDANOS A LLEVAR ALIMENTOS, VACUNAS Y DONACIONES A LOS ALBERGUES!</p>
                <a href="/" className="help--link">¡Entérate más aquí!</a>
            </div>
            <figure className="help--img-container">
                <img src="./src/assets/help--gallery.png" alt="Pets gallery"
                    className="help--img" />
            </figure>
        </div>
    );
}

export default Help;