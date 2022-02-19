import React from "react";
import PetCarousel from './PetCarousel'
import '../assets/css/petGallery.css'
function PetListGallery() {

    return (
        <div className="petList--section">
            <PetCarousel/>
            <PetCarousel/>
            <PetCarousel/>
            <PetCarousel/>
            <PetCarousel/>
            <PetCarousel/>
        </div>
    );
}

export default PetListGallery;