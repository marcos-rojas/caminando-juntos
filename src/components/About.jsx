import React from "react";
import '../assets/about.css'

function About() {

    return (
        <div className="about--section">
            <div className="about--content">
                <h2>¿QUIÉNES SOMOS Y PORQUE EXISTIMOS?</h2>
                <p>Somos una asociación sin fines de lucro que busca construir un mundo mejor
                    para los perros y gatos a través de iniciativas sostenibles.
                </p>
                <div>
                    <h3>¿Porqué adoptar con nosotros?</h3>
                    <ul className="qualities--list">
                        <li><span className="check icon">&#10003;</span> <p>Adopción responsable</p> <span className="plus icon">&#43;</span></li>
                        <li><span className="check icon">&#10003;</span> <p>Vacunas completas</p> <span className="plus icon">&#43;</span></li>
                        <li><span className="check icon">&#10003;</span> <p>Albergues certificados</p> <span className="plus icon">&#43;</span></li>
                    </ul>
                </div>
            </div>
            <div className="history">
                <figure>
                    <img src="./src/assets/lucas-story-png.png" alt="Pets gallery"
                        className="dog--img" />
                </figure>
            </div>

        </div>
    );
}

export default About;