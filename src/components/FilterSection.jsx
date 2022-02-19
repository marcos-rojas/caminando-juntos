import React from "react";
import '../assets/filter.css'
import FilterCriteria from './FilterCriteria'

function FilterSection() {
    return (
        <div className="filter--section">
            <h2>Filtrar por</h2>
            <div className="form">
               <FilterCriteria category="Edad"/>   
               <FilterCriteria category="Tamaño"/>   
               <FilterCriteria category="Sexo"/>   
               <FilterCriteria category="Nivel de actividad"/>   
               <FilterCriteria category="Largo de pelo"/>   
               <FilterCriteria category="Ubicación"/>   
            </div>
        </div>
    );
}

export default FilterSection;