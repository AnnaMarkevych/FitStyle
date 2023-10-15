import * as React from "react";
import {Calorietable} from "./Сalorietable";

function SideBarNutritions({catalogNutrition = []}) {

    return <div>
        <div className="row">
            <div className="col s12">
                <ul className="tabs">
                    <li className="tab col"><a className="active" href="src/components#caloriecalculator">Сalorie calculator</a></li>
                    <li className="tab col"><a href="src/components#calorietable">Сalorie Table</a></li>
                    <li className="tab col disabled"><a href="src/components#foodprograms">Food Programs</a></li>
                    <li className="tab col"><a href="src/components#recipes">Recipes</a></li>
                    <li className="tab col"><a href="src/components#recipeanalyzer">Recipe analyzer</a></li>
                    <li className="tab col"><a href="src/components#bodyanalyzer">Body Analyzer</a></li>

                </ul>
            </div>
            <div id="caloriecalculator" className="col s12"><Calorietable /></div>
            <div id="calorietable" className="col s12">Сalorie Table</div>
            <div id="foodprograms" className="col s12">Food Programs</div>
            <div id="recipes" className="col s12">Recipes</div>
            <div id="recipeanalyzer" className="col s12">Recipe analyzer</div>
            <div id="bodyanalyzer" className="col s12">Body Analyzer</div>
        </div>

    </div>

}
 export {SideBarNutritions}