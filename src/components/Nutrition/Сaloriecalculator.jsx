import * as React from "react";
import {useEffect, useState} from "react";
import {Counter} from "./Counter";

function Caloriecalculator(){
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [activity, setActivity] = useState('');

    const [bmr, setBmr] = useState('');
    const [bmi,setBmi] = useState('');


    const index1Man = 88.36;
    const index2Man = 13.4;
    const index3Man = 4.8;
    const index4Man = 5.7;

    const index1Woman = 447.6;
    const index2Woman = 9.2;
    const index3Woman = 3.1;
    const index4Woman = 4.3;

    const handleInputSexChange = (event) => {
        setSex(event.target.value);
        setBmr('');
    };
    const handleInputAgeChange = (event) => {
        setAge(event.target.value);
        setBmr('');
    };
    const handleInputWeightChange = (event) => {
        setWeight(event.target.value);
        setBmr('');
        setBmi('');
    };
    const handleInputHeightChange = (event) => {
        setHeight(event.target.value);
        setBmr('');
        setBmi('');
    };
    const handleInputActivityChange = (event) => {
        setActivity(event.target.value);
        setBmr('');
    };
    const countRes = (sex,age,weight,height, activity) => {
        if (age <= 99 && age >= 1 &&
            weight <= 200 && weight >= 1 &&
            height <= 250 && height >= 60 &&
            activity !== '') {
            if (sex === 'male'){
                setBmr(Math.round((index1Man+(index2Man*Number(weight))+(index3Man*Number(height))-(index4Man*Number(age)))*Number(activity)));

            } else if (sex === 'female') {
                setBmr(Math.round((index1Woman+(index2Woman*Number(weight))+(index3Woman*Number(height))-(index4Woman*Number(age)))*Number(activity)))
            }

            setBmi(( (Number(weight)) / ( (Number(height)/100)^2 ) ).toFixed(2));

        } else {
            setBmr('Your entered data is wrong!');
        }

    };

    const clearFields = (sex,age,weight,height, activity) => {
        setSex('');
        document.querySelector('#male').checked = false;
        document.querySelector('#female').checked = false;

        setAge('');
        document.querySelector('#age').value = '';
        setHeight('');
        document.querySelector('#height').value = '';
        setWeight('0');
        document.querySelector('#weight').value = '';
        setActivity();
        document.querySelector('#option-start').selected = true;
        setBmr('');
        setBmi('')

    };



    return <div>
        <div className='title-result'>Calculate your daily calorie intake</div>
        <div className="form-calculator">
                <form className="col s12">
                    <div className='row input-title'>Indicate your gender</div>
                    <div className="row">
                        <div className='input-sex'>
                            <input value='male' className='group1' name="sex" type="radio" id="male" onChange={handleInputSexChange}/>
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className='input-sex'>
                            <input value='female' className='group1' name="sex" type="radio" id="female" onChange={handleInputSexChange}/>
                            <label htmlFor="female">Female</label>
                        </div>

                    </div>
                    <div className='row input-title'>Enter your details</div>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="age" type="text"  className="validate" onChange={handleInputAgeChange}/>
                            <label htmlFor="age">Age</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="height" type="text"  className="validate" onChange={handleInputHeightChange}/>
                                <label htmlFor="height">Height,sm</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="weight" type="text"  className="validate" onChange={handleInputWeightChange}/>
                            <label htmlFor="weight">Weight, kg</label>
                        </div>
                    </div>
                    <div className="input-field col s12">
                        <select id='select' onChange={handleInputActivityChange}>
                            <option value='0' id='option-start' disabled selected>Physical activity</option>
                            <option value="1">Basic (complete calm)</option>
                            <option value="1.2">Low (sedentary lifestyle)</option>
                            <option value="1.375"> Small (1-3 times a week light training)</option>
                            <option value="1.725"> Medium (moderate training 3-5 times a week)</option>
                            <option value="1.9">High (intensive training 5-7 times a week)</option>
                        </select>
                    </div>
                    <div className='btn-row calculator'>
                        <a className="btn-small deep-orange lighten-2"
                           onClick={() => countRes(sex,age,weight,height,activity)}>
                            <i className='material-icons left'>sync</i>calculate</a>
                        <a className="btn-small transparent red-text"
                           onClick={() => clearFields(sex,age,weight,height,activity)}>
                            <i className='material-icons left'>close</i>clear fields</a>
                    </div>
                </form>
        </div>
        <div className="result">
            <div className="result-row">
                <div className='title-result'>Your daily calorie intake:</div>
                {bmr === 'Your entered data is wrong!' ? <div className='result-wrong'>{bmr}</div> :
                    bmr > 0 ?  <Counter bmr={bmr} /> : null}
            </div>
            <div className="result-row">
                <div className="title-result">Body mass index (BMI):</div>
                <div className="title-result" id='bmi'>{bmi}</div>
            </div>
            <div className='nutrition-facts'>
                <table className='nutrition-table'>
                    <tbody>
                    <tr>
                        <th colSpan="2" className='nutrition-calories'><b>Description BMI</b></th>
                        <td className="nutrition-calories nutrition-value"><b>BMI</b></td>
                    </tr>
                    <tr>
                        <td className="blank-cell"></td>
                        <th className='title-fact'>Severe underweight</th>
                        <td className='nutrition-value'>&lt;16</td>
                    </tr>
                    <tr>
                        <td className="blank-cell"></td>
                        <th className='title-fact'>Underweight</th>
                        <td className='nutrition-value'>16-18.5</td>
                    </tr>
                    <tr>
                        <td className="blank-cell"></td>
                        <th className='title-fact'>Norm</th>
                        <td className='nutrition-value'>18.6-25</td>
                    </tr>
                    <tr>
                        <td className="blank-cell"></td>
                        <th className='title-fact'>Overweight</th>
                        <td className='nutrition-value'>25.1-30</td>
                    </tr>
                    <tr>
                        <td className="blank-cell"></td>
                        <th className='title-fact'>Obesity of the first degree</th>
                        <td className='nutrition-value'>30.1-35</td>
                    </tr>
                    <tr>
                        <td className="blank-cell"></td>
                        <th className='title-fact'>Obesity of the second degree</th>
                        <td className='nutrition-value'>35.1-40</td>
                    </tr>
                    <tr>
                        <td className="blank-cell"></td>
                        <th className='title-fact'>Obesity of the third degree</th>
                        <td className='nutrition-value'>&gt;40.1</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>

    </div>
}
export {Caloriecalculator}