import {getNutritionIngr, getCatalogNutrition} from "../api";
import {useEffect, useState} from 'react';
import * as React from "react";
import Tabs from "../components/Nutrition/Tabs";
import {BreadCrumbs} from "../components/BreadCrumbs";

function Nutrition() {
    const [catalogNutrition, setCatalogNutrition] = useState([]);


    useEffect( ()=> {
        getCatalogNutrition().then(data => {
            setCatalogNutrition(data);
        })
    }, []);




    return <div className='container'>
        <BreadCrumbs />
            {<Tabs catalogNutrition={catalogNutrition}/>}
        <img className='nutrition-back' src="/assets/images/categories/fon3.jpg" alt=""/>

    </div>

}
export {Nutrition};

