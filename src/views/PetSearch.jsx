import React from "react";
import FilterSection from '../components/FilterSection'
import PetListGallery from '../components/PetListGallery'

function PetSearch() {
    return (
        <div >
            <h1>Conoce a nuestras mascotas</h1>
            <div className="petSearch--section">
                <FilterSection />
                <PetListGallery />
            </div>
        </div>
    );
}

export default PetSearch;