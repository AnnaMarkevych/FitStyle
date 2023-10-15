import React from "react";
import {useState} from "react";
import {Caloriecalculator} from "./Сaloriecalculator";
import {Foodprograms} from "./Foodprograms";
import {Recipes} from "./Recipes";
import {Recipeanalyzer} from "./Recipeanalyzer";
import {Bodyanalyzer} from "./Bodyanalyzer";
import {Preloader} from "../Preloader";
import {Calorietable} from "./Сalorietable";
function Tabs({catalogNutrition = []}){
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return <div className="tabs">
        <ul>

            {catalogNutrition.map((tab, index) => (
                <li
                    key={index}
                    className={activeTab === index ? 'active' : '' }
                    onClick={() => handleTabClick(index)}
                >
                    {tab.titleCategory}
                </li>
            ))}
        </ul>
        <div className="tab-content">
            {activeTab === 0  ? <Caloriecalculator /> : null }
            {activeTab === 1  ? <Calorietable /> : null }
            {activeTab === 2  ? <Foodprograms /> : null }
            {activeTab === 3  ? <Recipes /> : null }
            {activeTab === 4  ? <Recipeanalyzer /> : null }
            {activeTab === 5  ? <Bodyanalyzer /> : null }
        </div>
    </div>

}

export default Tabs;