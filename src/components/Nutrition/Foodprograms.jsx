import * as React from "react";
import {useState, useEffect} from 'react';
import {Link} from  'react-router-dom';
import {getNutritionK, getNutritionP, getNutritionM, getNutritionO,
    getNutritionF, getNutritionJ} from "../../api";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {Accordion} from "./Accordion";
import {NutritionPlan} from "./NutritionPlan";
import {Sale} from "../Sale";

function Foodprograms(){
    let foodProgramData = {};
    foodProgramData.nuties = {
        k:[],
        p:[],
        m:[],
        o:[],
        f:[],
        j:[],
    };
    foodProgramData.data = [];
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [goal, setGoal] = useState('');
    const [diet, setDiet] = useState('');
    const [res, setRes] = useState('');
    const [isCorrectData, setIsCorrectData] = useState(false);

    const [nutritionK, setNutritionK] = useState([]);
    const [nutritionP, setNutritionP] = useState([]);
    const [nutritionM, setNutritionM] = useState([]);
    const [nutritionO, setNutritionO] = useState([]);
    const [nutritionF, setNutritionF] = useState([]);
    const [nutritionJ, setNutritionJ] = useState([]);

    const [foodData, setFoodData] = useState({});

    const handleInputSexChange = (event) => {
        setSex(event.target.value);
        // setFoodProgramData(sex);
    };
    const handleInputAgeChange = (event) => {
        setAge(event.target.value);
    };
    const handleInputWeightChange = (event) => {
        setWeight(event.target.value);
    };
    const handleInputHeightChange = (event) => {
        setHeight(event.target.value);
    };
    const handleInputGoalChange = (event) => {
        setGoal(event.target.value);
    };
    const handleInputDietChange = (event) => {
        setDiet(event.target.value);
    };

    const nutritionKHandler = (nK) => {
        setNutritionK(nK);
    };
    const nutritionPHandler = (nP) => {
        setNutritionP(nP);
    };
    const nutritionMHandler = (nM) => {
        setNutritionM(nM);
    };
    const nutritionOHandler = (nO) => {
        setNutritionO(nO);
    };
    const nutritionFHandler = (nF) => {
        setNutritionF(nF);
    };
    const nutritionJHandler = (nJ) => {
        setNutritionJ(nJ);
    };

    useEffect( ()=> {
        getNutritionK().then(data => {
            let group = data.map((item)=>{
                return {
                    id: item.id,
                    checked: false,
                    label: item.label,
                    portion: item.portion,
                    units: item.units,
                    carbohydrates: item.carbohydrates,
                    proteins: item.proteins,
                    fats: item.fats,
                    calories: item.calories
                }
            });
            setNutritionK(group);
        })
    }, []);
    useEffect( ()=> {
        getNutritionP().then(data => {
            let group = data.map((item)=>{
                return {
                    id: item.id,
                    checked: false,
                    label: item.label,
                    portion: item.portion,
                    units: item.units,
                    carbohydrates: item.carbohydrates,
                    proteins: item.proteins,
                    fats: item.fats,
                    calories: item.calories
                }
            });
            setNutritionP(group);
        })
    }, []);
    useEffect( ()=> {
        getNutritionM().then(data => {
            let group = data.map((item)=>{
                return {
                    id: item.id,
                    checked: false,
                    label: item.label,
                    portion: item.portion,
                    units: item.units,
                    carbohydrates: item.carbohydrates,
                    proteins: item.proteins,
                    fats: item.fats,
                    calories: item.calories
                }
            });
            setNutritionM(group);
        })
    }, []);
    useEffect( ()=> {
        getNutritionO().then(data => {
            let group = data.map((item)=>{
                return {
                    id: item.id,
                    checked: false,
                    label: item.label,
                    portion: item.portion,
                    units: item.units,
                    carbohydrates: item.carbohydrates,
                    proteins: item.proteins,
                    fats: item.fats,
                    calories: item.calories
                }
            });
            setNutritionO(group);
        })
    }, []);
    useEffect( ()=> {
        getNutritionF().then(data => {
            let group = data.map((item)=>{
                return {
                    id: item.id,
                    checked: false,
                    label: item.label,
                    portion: item.portion,
                    units: item.units,
                    carbohydrates: item.carbohydrates,
                    proteins: item.proteins,
                    fats: item.fats,
                    calories: item.calories
                }
            });
            setNutritionF(group);
        })
    }, []);
    useEffect( ()=> {
        getNutritionJ().then(data => {
            let group = data.map((item)=>{
                return {
                    id: item.id,
                    checked: false,
                    label: item.label,
                    portion: item.portion,
                    units: item.units,
                    carbohydrates: item.carbohydrates,
                    proteins: item.proteins,
                    fats: item.fats,
                    calories: item.calories
                }
            });
            setNutritionJ(group);
        })
    }, []);

    const checkCountChecked = () => {
        let nutritionArr = [
            {
                groupName: "k",
                nutrition : nutritionK
            },
            {
                groupName: "p",
                nutrition : nutritionP
            },
            {
                groupName: "m",
                nutrition : nutritionM
            },
            {
                groupName: "o",
                nutrition : nutritionO
            },
            {
                groupName: "f",
                nutrition : nutritionF
            },
            {
                groupName: "j",
                nutrition : nutritionJ
            }
        ];

        // console.log(nutritionArr);
        let countArr = [];
        nutritionArr.map((group) => {
            let count = 0;
            group.nutrition.map((checkbox) => {
                if (checkbox.checked) {
                    count++;
                    foodProgramData.nuties[group.groupName].push(checkbox);
                }
            });
            countArr.push(count);
        }
        );


        // console.log(countArr);
        // console.log(foodProgramData);

        return countArr.every(count => count >= 9);
    };

    const countRes = (sex,age,weight,height,goal,diet ) => {

        let checkNutrition = checkCountChecked();

        if (age <= 99 && age >= 1 &&
            weight <= 200 && weight >= 1 &&
            height <= 250 && height >= 60 &&
            goal !== '' && diet !== '' && checkNutrition === true) {
            if (sex === 'male'){
                setRes('data is correct for male');
                setIsCorrectData(true);

            } else if (sex === 'female') {
                setRes('data is correct for female');
                setIsCorrectData(true);
            }

        } else {
            setRes('Your entered data is wrong!');
        }

        foodProgramData.data =
            {sex: sex,
            age : age,
            height: height,
            weight: weight,
            goal: goal,
            diet: diet};
        setFoodData(foodProgramData);

    };


    return <div >
        {!isCorrectData ? <div>
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
                        <select id='selectG' onChange={handleInputGoalChange}>
                            <option value='0' id='option-start' disabled selected>Choose your goal</option>
                            <option value="1200">Lose weight (low-calorie diet)</option>
                            <option value="1500">Maintain weight (balanced diet)</option>
                            <option value="2200">Gain weight (high-calorie diet)</option>
                        </select>
                    </div>
                    <div className="input-field col s12">
                        <select id='selectD' onChange={handleInputDietChange}>
                            <option value='0' id='option-start' disabled selected>Choose a diet type</option>
                            <option value="1">High-carbohydrate diet (low-protein diet)</option>
                            <option value="2">High-protein diet (low-carbohydrate diet)</option>
                            <option value="3">Keto-diet(high-fat diet)</option>
                            <option value="4" disabled>Vegetarian diet</option>
                        </select>
                    </div>

                    <Accordion nutritionK={nutritionK}
                               nutritionKHandler={nutritionKHandler}
                               nutritionP={nutritionP}
                               nutritionPHandler={nutritionPHandler}
                               nutritionM={nutritionM}
                               nutritionMHandler={nutritionMHandler}
                               nutritionO={nutritionO}
                               nutritionOHandler={nutritionOHandler}
                               nutritionF={nutritionF}
                               nutritionFHandler={nutritionFHandler}
                               nutritionJ={nutritionJ}
                               nutritionJHandler={nutritionJHandler}
                    />

                    <div className='btn-row calculator'>
                            <a className="btn-small deep-orange lighten-2" onClick={() => countRes(sex,age,weight,height, goal, diet)}>
                            <i className='material-icons left'>sync</i>calculate</a>

                        <a className="btn-small transparent red-text">
                            <i className='material-icons left'>close</i>clear fields</a>
                    </div>

                </form>
            </div> </div> :
            <NutritionPlan diet={foodData.data.diet}
                           goal={foodData.data.goal}
                           foodData={foodData}
                           isCorrectData={isCorrectData}
                           setIsCorrectData={setIsCorrectData}
            />
        }


            {res === 'Your entered data is wrong!' ?
                <div className="result-row">
                    <div className='title-result'>Your result:</div>
                    <div className='result-wrong'>{res}</div>
                </div> : <div></div>
                    }
    </div>
}


export {Foodprograms}