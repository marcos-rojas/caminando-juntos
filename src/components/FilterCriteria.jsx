import React from "react";
import { useState } from "react";

function FilterSection({category}) {
    
    function toggleShowState(e){
        e.target.classList.toggle('show');
    }
    return (
        <div className="filter--container">
            <div className="filter-show-selector">
                <h3>{category}</h3>
                <div className="filter-icon" onClick={toggleShowState}>&#9650;</div>
            </div>
            <form action="" className="filter-form close">
                <div className="check-option">
                    <input type="checkbox" name="first-year-range" id="first-year-range" value="1" />
                    <label htmlFor="first-year-range">1-3 años</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" name="second-year-range" id="second-year-range" />
                    <label htmlFor="second-year-range">4-7 años</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" name="third-year-range" id="third-year-range" />
                    <label htmlFor="third-year-range">7 años a más</label>
                </div>
            </form>
        </div>
    )
}

export default FilterSection;