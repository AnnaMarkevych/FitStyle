import {SideBarNutritions} from "./SideBarNutritions";
import * as React from "react";
import {useState} from "react";
import {getNutritionIngr} from "../../api";

function Calorietable(){
    const [ingridient, setIngridient] = useState('');
    const [ingridientData, setIngridientData] = useState({});

    const handleInputChange = (event) => {
        setIngridient(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {

            getNutritionIngr(ingridient).then( data => {
                setIngridientData(data);
            })


        }
    };

    return <div>
        <div className='title-result'>Enter your ingridient:</div>
        <div className="input-field col s4">
            <input id="ingr" value={ingridient} type="text"  className="validate" onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            <label htmlFor="ingr">Ingridient</label>
        </div>
        <div className='btn-row calculator'>
            <a className="btn-small deep-orange lighten-2">
                <i className='material-icons left'>sync</i>calculate</a>
        </div>

        <div className='nutrition-facts'>
            <div className='nutrition-header'>Nutrition Facts</div>
            <table className='nutrition-table'>
                <thead>
                <tr>
                    <th colSpan="3" className='nutrition-subheader'>Amount Per Serving 100g</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th colSpan="2" className='nutrition-calories'><b>Calories</b></th>
                    <td className="nutrition-calories nutrition-value"><b>
                        {!ingridientData.calories ? 0 : (ingridientData.totalNutrients.ENERC_KCAL.quantity).toFixed(2)+' '+ingridientData.totalNutrients.ENERC_KCAL.unit}
                    </b></td>
                </tr>

                <tr>
                    <th colSpan="2" className='title-fact'> Total Weight</th>
                    <td className='nutrition-value'>{!ingridientData.totalWeight ? 0 : ingridientData.totalWeight+' g'}</td>
                </tr>
                <tr>
                    <th colSpan="2"> Total Fat</th>
                    <td className='nutrition-value'><b>
                        {!ingridientData.totalNutrients ? 0 : (ingridientData.totalNutrients.FAT.quantity).toFixed(2)+' '+ingridientData.totalNutrients.FAT.unit }
                    </b></td>
                </tr>
                <tr>
                    <td className="blank-cell"></td>
                    <th className='title-fact'>Saturated fat</th>
                    <td className='nutrition-value'>
                        {!ingridientData.totalNutrients ? 0 : (ingridientData.totalNutrients.FASAT.quantity).toFixed(2)+' '+ingridientData.totalNutrients.FASAT.unit }
                    </td>
                </tr>
                <tr>
                    <td className="blank-cell"></td>
                    <th className='title-fact'>Monounsaturated fat</th>
                    <td className='nutrition-value'>
                        {!ingridientData.totalNutrients ? 0 : (ingridientData.totalNutrients.FAMS.quantity).toFixed(2)+' '+ingridientData.totalNutrients.FAMS.unit }
                    </td>
                </tr>
                <tr>
                    <td className="blank-cell"></td>
                    <th className='title-fact'>Polyunsaturated fat</th>
                    <td className='nutrition-value'>
                        {!ingridientData.totalNutrients ? 0 : (ingridientData.totalNutrients.FAPU.quantity).toFixed(2)+' '+ingridientData.totalNutrients.FAPU.unit }
                    </td>
                </tr>
                <tr>
                    <th colSpan="2"> Carbohydrates</th>
                    <td className='nutrition-value'><b>
                        {!ingridientData.totalNutrients ? 0 : (ingridientData.totalNutrients.CHOCDF.quantity).toFixed(2)+' '+ingridientData.totalNutrients.CHOCDF.unit }
                    </b></td>
                </tr>
                <tr>
                    <td className="blank-cell"></td>
                    <th className='title-fact'>Total fiber</th>
                    <td className='nutrition-value'>
                        {!ingridientData.totalNutrients ? 0 : (ingridientData.totalNutrients.FIBTG.quantity).toFixed(2)+' '+ingridientData.totalNutrients.FIBTG.unit }
                    </td>
                </tr>
                    <tr>
                        <td className="blank-cell"></td>
                        <th className='title-fact'>Total sugar</th>
                        <td className='nutrition-value'>
                            {!ingridientData.totalNutrients ? 0 : (ingridientData.totalNutrients.SUGAR.quantity).toFixed(2)+' '+ingridientData.totalNutrients.SUGAR.unit }
                        </td>
                    </tr>
                <tr>
                    <th colSpan="2"> Ptotein</th>
                    <td className='nutrition-value'><b>
                        {!ingridientData.totalNutrients ? 0 : (ingridientData.totalNutrients.PROCNT.quantity).toFixed(2)+' '+ingridientData.totalNutrients.PROCNT.unit }
                    </b></td>
                </tr>
                </tbody>
            </table>
            </div>
    </div>
}
export {Calorietable}