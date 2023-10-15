import {CircleChart} from "./CircleChart";
import {TableNutritionPlan} from "./TableNutritionPlan";
import {useState} from 'react';
import html2pdf from 'html2pdf.js';

function NutritionPlan({goal, diet, foodData, isCorrectData, setIsCorrectData}) {
    const keysMeal = ['breakfast', 'firstSnack', 'lunch', 'secondSnack', 'dinner', 'total'];

    const subkeyNames = ['carbohudrates', 'proteins', 'fats', 'kcal'];
    const colors = ['#75c3da', '#f48780', '#f9c54b'];
    const legend = ['carbohudrates', 'proteins', 'fats'];

    const values1 = [
        [23, 15, 3, 200],
        [12, 8, 3, 100],
        [45, 30, 11, 400],
        [12, 8, 3, 100],
        [45, 30, 11, 400],
        [137, 91, 34, 1200]
    ];
    const values2 = [
        [34, 23, 8, 300],
        [23, 12, 6, 200],
        [45, 30, 11, 400],
        [23, 12, 6, 200],
        [45, 30, 11, 400],
        [170, 107, 42, 1500]
    ];
    const values3 = [
        [55, 20, 11, 400],
        [28, 10, 6, 200],
        [83, 30, 17, 600],
        [28, 10, 6, 200],
        [83, 30, 17, 600],
        [277, 100, 57, 2000]
    ];
    const values4 = [
        [15, 23, 6, 200],
        [8, 12, 3, 100],
        [30, 45, 11, 400],
        [8, 12, 3, 100],
        [30, 45, 11, 400],
        [91, 137, 34, 1200]
    ];
    const values5 = [
        [23, 34, 8, 300],
        [15, 23, 6, 200],
        [30, 45, 11, 400],
        [15, 23, 6, 200],
        [30, 45, 11, 400],
        [113, 170, 42, 1500]
    ];
    const values6 = [
        [55, 20, 11, 400],
        [28, 10, 6, 200],
        [83, 30, 17, 600],
        [28, 10, 6, 200],
        [83, 30, 17, 600],
        [227, 100, 57, 2000]
    ];
    const values7 = [
        [10, 20, 30, 350],
        [10, 5, 10, 150],
        [10, 20, 25, 345],
        [2, 2, 10, 100],
        [10, 20, 25, 345],
        [42, 67, 100, 1250]
    ];
    const values8 = [
        [10, 20, 40, 480],
        [10, 5, 10, 150],
        [10, 20, 35, 435],
        [2, 10, 10, 140],
        [10, 20, 25, 345],
        [42, 75, 120, 1550]
    ];
    const values9 = [
        [20, 20, 50, 610],
        [10, 5, 10, 150],
        [20, 20, 55, 655],
        [2, 10, 10, 140],
        [10, 20, 25, 345],
        [62, 75, 140, 1900]
    ];

    const goToBack = () => {
        setIsCorrectData(false);
    };

    const nutritionPlan1 = {
        breakfast: [
            {m: 1, k: 1},
            {p: 1, k: 1},
            {p: 1, f: 1},
            {m: 1, o: 1},
        ],
        snack1: [
            {m: 1},
            {f: 1, o: 0.5},
            {k: 1},
        ],
        lunch: [
            {k: 3, p: 1},
            {k: 2, p: 1, f: 1, j: 1},
            {k: 2, m: 1, p: 1},
            {k: 2, p: 1, o: 1},
            {k: 2, p: 1, j: 2},
            {k: 1, f: 2, j: 1, p: 1},
            {k: 1, f: 1, m: 1, p: 1},
            {k: 1, f: 1, p: 1, o: 1},
        ],
        snack2: [
            {m: 1},
            {f: 1, o: 0.5},
            {k: 1},
        ],
        dinner: [
            {k: 3, p: 1},
            {k: 2, p: 1, f: 1, j: 1},
            {k: 2, m: 1, p: 1},
            {k: 2, p: 1, o: 1},
            {k: 2, p: 1, j: 2},
            {k: 1, f: 2, j: 1, p: 1},
            {k: 1, f: 1, m: 1, p: 1},
            {k: 1, f: 1, p: 1, o: 1},
        ]
    };

    const nutritionPlan2 = {
        breakfast: [
            {k: 2, p: 1},
            {k: 2, m: 1},
            {k: 1, o: 1.5},
            {f: 1, m: 1, p: 1},
            {k: 1, P: 1, f: 1},
            {f: 1.5, m: 1, o: 1}
        ],
        snack1: [
            {m: 1, f: 1},
            {f: 1.5, o: 1},
            {m: 1, k: 1},
            {k: 1, o: 1},
            {k: 2}
        ],
        lunch: [
            {k: 3, p: 1},
            {k: 2, p: 1, f: 1, j: 1},
            {k: 2, m: 1, p: 1},
            {k: 2, p: 1, o: 1},
            {k: 2, p: 1, j: 2},
            {k: 1, f: 2, j: 1, p: 1},
            {k: 1, f: 1, m: 1, p: 1},
            {k: 1, f: 1, p: 1, o: 1},
        ],
        snack2: [
            {m: 1, f: 1},
            {f: 1.5, o: 1},
            {m: 1, k: 1},
            {k: 1, o: 1},
            {k: 2}
        ],
        dinner: [
            {k: 3, p: 1},
            {k: 2, p: 1, f: 1, j: 1},
            {k: 2, m: 1, p: 1},
            {k: 2, p: 1, o: 1},
            {k: 2, p: 1, j: 2},
            {k: 1, f: 2, j: 1, p: 1},
            {k: 1, f: 1, m: 1, p: 1},
            {k: 1, f: 1, p: 1, o: 1},
        ]
    };

    const nutritionPlan3 = {
        breakfast: [
            {k: 1, f: 1, m: 1, o: 1},
            {k: 2, f: 1.5, p: 1},
            {k: 2, m: 1, p: 1},
            {k: 2, p: 1, o: 1},
            {f: 2, m: 1, p: 1, o: 1},
            {k: 1, p: 2, j: 1},
            {f: 1, p: 1, o: 2},
            {f: 1.5, p: 2}
        ],
        snack1: [
            {k: 1, m: 1},
            {k: 1, o: 1},
            {f: 1, m: 1},
            {f: 1.5, o: 1},
            {f: 1, p: 1},
            {m: 1, o: 1},
            {o: 2}
        ],
        lunch: [
            {k: 4, f: 1, p: 1, j: 1},
            {k: 4, m: 1, p: 1, j: 1},
            {k: 4, p: 1, j: 1, o: 1},
            {k: 3, f: 1, p: 1, j: 1, o: 1},
            {k: 3, f: 1, m: 1, p: 1, j: 1},
            {k: 3, f: 1, m: 1, p: 1, o: 1},
            {k: 3, f: 1.5, m: 0.5, p: 1, j: 2},
            {k: 3, m: 0.5, p: 2, j: 1},
            {k: 3, f: 1.5, p: 1, o: 1.5},
            {k: 3, m: 2, p: 0.5, j: 2},
            {k: 2, f: 1, m: 1, p: 0.5, j: 2, o: 0.5},
            {k: 2, f: 2, m: 1, p: 1, j: 2},
            {k: 2, f: 1, m: 2, p: 0.5, j: 2},
            {k: 2, f: 2, p: 1.5, j: 2},
            {k: 2, m: 2, p: 1, j: 2},
            {k: 2, m: 1.5, p: 1.5, o: 1}
        ],
        snack2: [
            {k: 1, m: 1},
            {k: 1, o: 1},
            {f: 1, m: 1},
            {f: 1.5, o: 1},
            {f: 1, p: 1},
            {m: 1, o: 1},
            {o: 2}
        ],
        dinner: [
            {k: 4, f: 1, p: 1, j: 1},
            {k: 4, m: 1, p: 1, j: 1},
            {k: 4, p: 1, j: 1, o: 1},
            {k: 3, f: 1, p: 1, j: 1, o: 1},
            {k: 3, f: 1, m: 1, p: 1, j: 1},
            {k: 3, f: 1, m: 1, p: 1, o: 1},
            {k: 3, f: 1.5, m: 0.5, p: 1, j: 2},
            {k: 3, m: 0.5, p: 2, j: 1},
            {k: 3, f: 1.5, p: 1, o: 1.5},
            {k: 3, m: 2, p: 0.5, j: 2},
            {k: 2, f: 1, m: 1, p: 0.5, j: 2, o: 0.5},
            {k: 2, f: 2, m: 1, p: 1, j: 2},
            {k: 2, f: 1, m: 2, p: 0.5, j: 2},
            {k: 2, f: 2, p: 1.5, j: 2},
            {k: 2, m: 2, p: 1, j: 2},
            {k: 2, m: 1.5, p: 1.5, o: 1}
        ]
    };

    const nutritionPlan4 = {
        breakfast: [
            {p: 1, k: 1},
            {p: 1, f: 1},
            {m: 1, p: 1},
        ],
        snack1: [
            {m: 1},
            {o: 1}
        ],
        lunch: [
            {k: 2, p: 2},
            {k: 1, m: 1, p: 1, o: 1},
            {k: 1, p: 2, f: 1},
            {k: 1, p: 2, j: 1},
            {m: 1, p: 1, o: 2},
            {f: 2, p: 1, o: 2},
        ],
        snack2: [
            {m: 1},
            {o: 1}
        ],
        dinner: [
            {k: 2, p: 2},
            {k: 1, m: 1, p: 1, o: 1},
            {k: 1, p: 2, f: 1},
            {k: 1, p: 2, j: 1},
            {m: 1, p: 1, o: 2},
            {f: 2, p: 1, o: 2},
        ]
    };

    const nutritionPlan5 = {
        breakfast: [
            {k: 2, p: 2},
            {k: 1, f: 1, p: 1},
            {k: 1, m: 1, p: 1},
            {f: 2, p: 1, m: 1},
            {f: 1, p: 1, o: 1},
            {m: 1, p: 1, o: 1}
        ],
        snack1: [
            {k: 1, o: 1},
            {f: 1, p: 1},
            {m: 1, o: 1},
            {o: 2}
        ],
        lunch: [
            {k: 2, p: 2},
            {k: 1, m: 1, p: 1, o: 1},
            {k: 1, p: 2, f: 1},
            {k: 1, p: 2, j: 1},
            {m: 1, p: 1, o: 2},
            {f: 2, p: 1, o: 2},
        ],
        snack2: [
            {k: 1, o: 1},
            {f: 1, p: 1},
            {m: 1, o: 1},
            {o: 2}
        ],
        dinner: [
            {k: 2, p: 2},
            {k: 1, m: 1, p: 1, o: 1},
            {k: 1, p: 2, f: 1},
            {k: 1, p: 2, j: 1},
            {m: 1, p: 1, o: 2},
            {f: 2, p: 1, o: 2},
        ]
    };

    const nutritionPlan6 = {
        breakfast: [
            {k: 1, f: 1, m: 1, o: 1},
            {k: 2, f: 1.5, p: 1},
            {k: 2, m: 1, p: 1},
            {k: 2, p: 1, o: 1},
            {f: 2, m: 1, p: 1, o: 1},
            {k: 1, p: 2, j: 1},
            {f: 1.5, p: 2},
            {f: 1, p: 1, o: 2}
        ],
        snack1: [
            {k: 1, m: 1},
            {k: 1, o: 1},
            {f: 1, m: 1},
            {f: 1.5, o: 1},
            {f: 1, p: 1},
            {m: 1, o: 1},
            {o: 2}
        ],
        lunch: [
            {k: 4, f: 1, p: 1, j: 1},
            {k: 4, m: 1, p: 1, j: 1},
            {k: 4, p: 1, j: 1, o: 1},
            {k: 3, f: 1, p: 1, j: 1, o: 1},
            {k: 3, f: 1, m: 1, p: 1, j: 1},
            {k: 3, f: 1, m: 1, p: 1, o: 1},
            {k: 3, f: 1.5, m: 0.5, p: 1, j: 2},
            {k: 3, m: 0.5, p: 2, j: 1},
            {k: 3, f: 1.5, p: 1, o: 1.5},
            {k: 3, m: 2, p: 0.5, j: 2},
            {k: 2, f: 1, m: 1, p: 0.5, j: 2, o: 0.5},
            {k: 2, f: 2, m: 1, p: 1, j: 2},
            {k: 2, f: 1, m: 2, p: 0.5, j: 2},
            {k: 2, f: 2, p: 1.5, j: 2},
            {k: 2, m: 2, p: 1, j: 2},
            {k: 2, m: 1.5, p: 1.5, o: 1}
        ],
        snack2: [
            {k: 1, m: 1},
            {k: 1, o: 1},
            {f: 1, m: 1},
            {f: 1.5, o: 1},
            {f: 1, p: 1},
            {m: 1, o: 1},
            {o: 2}
        ],
        dinner: [
            {k: 4, f: 1, p: 1, j: 1},
            {k: 4, m: 1, p: 1, j: 1},
            {k: 4, p: 1, j: 1, o: 1},
            {k: 3, f: 1, p: 1, j: 1, o: 1},
            {k: 3, f: 1, m: 1, p: 1, j: 1},
            {k: 3, f: 1, m: 1, p: 1, o: 1},
            {k: 3, f: 1.5, m: 0.5, p: 1, j: 2},
            {k: 3, m: 0.5, p: 2, j: 1},
            {k: 3, f: 1.5, p: 1, o: 1.5},
            {k: 3, m: 2, p: 0.5, j: 2},
            {k: 2, f: 1, m: 1, p: 0.5, j: 2, o: 0.5},
            {k: 2, f: 2, m: 1, p: 1, j: 2},
            {k: 2, f: 1, m: 2, p: 0.5, j: 2},
            {k: 2, f: 2, p: 1.5, j: 2},
            {k: 2, m: 2, p: 1, j: 2},
            {k: 2, m: 1.5, p: 1.5, o: 1}
        ]
    };

    const nutritionPlan7 = {
        breakfast: [
            {k: 0.5, p: 1, j: 2, o: 2},
            {k: 1, j: 3, m: 1, o: 1},
            {f: 0.5, o: 2, p: 1, j: 1},
            {p: 1, j: 2, o: 1},
            {f: 1, j: 2, o: 2}
        ],
        snack1: [
            {j: 2},
            {o: 2}
        ],
        lunch: [
            {k: 0.5, p: 1, j: 1, o: 1},
            {k: 1, j: 2.5, m: 1, o: 1},
            {f: 0.5, o: 1, p: 0.5, j: 1},
            {p: 1, j: 1, o: 1},
            {m: 1, j: 1, o: 1}
        ],
        snack2: [
            {j: 1},
            {o: 1}
        ],
        dinner: [
            {k: 0.5, p: 1, j: 1, o: 1},
            {k: 1, j: 2.5, m: 1, o: 1},
            {f: 0.5, o: 1, p: 0.5, j: 1},
            {p: 1, j: 1, o: 1},
            {m: 1, j: 1, o: 1}
        ]
    };

    const nutritionPlan8 = {
        breakfast: [
            {k: 2, p: 1, j: 2, o: 4},
            {k: 1, j: 3, m: 2, o: 4},
            {f: 1, o: 4, p: 1.5, j: 2},
            {p: 1, j: 2, o: 4},
            {f: 1, j: 2, o: 4}
        ],
        snack1: [
            {j: 2},
            {o: 2}
        ],
        lunch: [
            {k: 0.5, p: 1, j: 1, o: 1},
            {k: 1, j: 2.5, m: 1, o: 1},
            {f: 0.5, o: 1, p: 0.5, j: 1},
            {p: 1, j: 1, o: 1},
            {m: 1, j: 1, o: 1}
        ],
        snack2: [
            {j: 2},
            {o: 2}
        ],
        dinner: [
            {k: 0.5, p: 1, j: 1, o: 1},
            {k: 1, j: 2.5, m: 1, o: 1},
            {f: 0.5, o: 1, p: 0.5, j: 1},
            {p: 1, j: 1, o: 1},
            {m: 1, j: 1, o: 1}
        ]
    };

    const nutritionPlan9 = {
        breakfast: [
            {k: 2, p: 2, j: 3, o: 4},
            {k: 2, j: 4, m: 2, o: 4},
            {f: 1, o: 4, p: 1.5, j: 2},
            {p: 1, j: 3, o: 4},
            {f: 1, j: 3, o: 4}
        ],
        snack1: [
            {j: 2},
            {o: 2}
        ],
        lunch: [
            {k: 0.5, p: 1, j: 1, o: 2},
            {k: 1, j: 2.5, m: 1, o: 2},
            {f: 0.5, o: 2, p: 0.5, j: 1},
            {p: 1, j: 1, o: 2},
            {m: 1, j: 1, o: 2}
        ],
        snack2: [
            {j: 2},
            {o: 2}
        ],
        dinner: [
            {k: 0.5, p: 1, j: 1, o: 2},
            {k: 1, j: 2.5, m: 1, o: 2},
            {f: 0.5, o: 2, p: 0.5, j: 1},
            {p: 1, j: 1, o: 2},
            {m: 1, j: 1, o: 2}
        ]
    };

    const createObjectOfObjects = (keys, values) => {
        return keys.reduce((acc, curr, keyIndex) => {
            acc[curr] = values[keyIndex].reduce((innerAcc, innerCurr, innerIndex) => {
                innerAcc[subkeyNames[innerIndex]] = innerCurr;
                return innerAcc;
            }, {});
            return acc;
        }, {});
    };

    let chartData = 'default';

    const createChartData = (values) => {
        chartData = values[5];
        // console.log(chartData)
    };

    let result = 'default';
    let dietName = 'default';
    let nutritionPlan = [];


    if (diet === '1') {
        if (goal === '1200') {
            result = createObjectOfObjects(keysMeal, values1);
            createChartData(values1);
            nutritionPlan = nutritionPlan1;
        } else if (goal === '1500') {
            result = createObjectOfObjects(keysMeal, values2);
            createChartData(values2);
            nutritionPlan = nutritionPlan2;
        } else if (goal === '2200') {
            result = createObjectOfObjects(keysMeal, values3);
            createChartData(values3);
            nutritionPlan = nutritionPlan3;
        }
        dietName = 'High-carbohydrate diet (low-protein diet)';
    }

    if (diet === '2') {
        if (goal === '1200') {
            result = createObjectOfObjects(keysMeal, values4);
            createChartData(values4);
            nutritionPlan = nutritionPlan4;
        } else if (goal === '1500') {
            result = createObjectOfObjects(keysMeal, values5);
            createChartData(values5);
            nutritionPlan = nutritionPlan5;
        } else if (goal === '2200') {
            result = createObjectOfObjects(keysMeal, values6);
            createChartData(values6);
            nutritionPlan = nutritionPlan6;
        }
        dietName = 'High-protein diet (low-carbohydrates diet)';
    }

    if (diet === '3') {
        if (goal === '1200') {
            result = createObjectOfObjects(keysMeal, values7);
            createChartData(values7);
            nutritionPlan = nutritionPlan7;
        } else if (goal === '1500') {
            result = createObjectOfObjects(keysMeal, values8);
            createChartData(values8);
            nutritionPlan = nutritionPlan8;
        } else if (goal === '2200') {
            result = createObjectOfObjects(keysMeal, values9);
            createChartData(values9);
            nutritionPlan = nutritionPlan9;
        }
        dietName = 'KETO diet (high-fat diet)';
    }

    const getRandomItem = (array) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };

    const [randomNutritionPlan, setRandomNutritionPlan] = useState({
        breakfast: {},
        snack1: {},
        lunch: {},
        snack2: {},
        dinner: {}
    });
    const [randomDiet, setRandomDiet] = useState({
        breakfast: {},
        snack1: {},
        lunch: {},
        snack2: {},
        dinner: {}
    });
    const [planCompleted, setPlanCompleted] = useState(false);
    const [weekPlanCompleted, setWeekPlanCompleted] = useState(false);
    const days = ['day1','day2','day3','day4','day5','day6','day7', 'day8'];
    const [weekPlan, setWeekPlan] = useState({});
    const [weekDiet, setWeekDiet] = useState({});

    const createRandomNutritionPlan = (nutritionPlan) => {
        let newRandomNutritionPlan = {};

        for (const key in nutritionPlan) {
            const randomItem = getRandomItem(nutritionPlan[key]);
            newRandomNutritionPlan[key] = randomItem;
        }

        return newRandomNutritionPlan;
    };

    const createRandomDiet = (nutritionPlan) => {
        const randomDiet = {};
        Object.keys(nutritionPlan).forEach((meal) => {
            randomDiet[meal] = {};
            Object.keys(nutritionPlan[meal]).forEach((key) => {
                randomDiet[meal][key] = getRandomItem(foodData.nuties[key]);
            });
        });

        return randomDiet
    };

    // console.log(randomNutritionPlan);


    const handleDownload = () => {
        const element = document.getElementById('divToDownload');
        html2pdf().from(element).save();
    };



    // for slider:
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Object.keys(weekPlan).length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Object.keys(weekPlan).length) % Object.keys(weekPlan).length);
    };


    return <div className='nutrition-res'>
            <div className='title-result'>{dietName}</div>
            <div className='title-result'>{goal} kcal</div>
            <div className='result-content'>
                <TableNutritionPlan result={result}/>
                <CircleChart chartData={chartData} colors={colors} legend={legend}/>
            </div>
            <div className='btn-row calculator'>
                <a className="btn-small deep-orange lighten-2" onClick={() => {
                    let randomNutritionPlan = createRandomNutritionPlan(nutritionPlan);
                    let randomDiet = createRandomDiet(randomNutritionPlan);

                    setRandomNutritionPlan(randomNutritionPlan);
                    setRandomDiet(randomDiet);

                    setWeekPlanCompleted(false);
                    setPlanCompleted(true);

                    console.log(randomNutritionPlan);
                    console.log(randomDiet);
                }}>
                    <i className='material-icons left'>sync</i>show  day plan
                </a>
                <a className="btn-small deep-orange lighten-2" onClick={() => {
                    let randomDiet = createRandomDiet(randomNutritionPlan);
                    setRandomDiet(randomDiet);
                    console.log(randomDiet);
                }}>
                    <i className='material-icons left'>sync</i>change nutrients
                </a>

                <a className="btn-small deep-orange lighten-2" onClick={() => {
                    setPlanCompleted(false);
                    console.log(planCompleted);

                    const newWeekPlan = {};
                    const newWeekDiet = {};
                    days.forEach(day => {
                        let randomNutritionPlan = createRandomNutritionPlan(nutritionPlan);
                        let randomDiet = createRandomDiet(randomNutritionPlan);

                        setRandomNutritionPlan(randomNutritionPlan);
                        setRandomDiet(randomDiet);

                        newWeekPlan[day] = randomNutritionPlan;
                        newWeekDiet[day] = randomDiet;
                    });

                    setWeekPlanCompleted(true);

                    setWeekPlan(newWeekPlan);
                    console.log(weekPlan);

                    setWeekDiet(newWeekDiet);
                    console.log(weekDiet);
                }}>
                    <i className='material-icons left'>sync</i>show week plan
                </a>

                <a className="btn-small deep-orange lighten-2" onClick={goToBack}>
                    <i className='material-icons left'>edit</i>edit data
                </a>
            </div>
            {planCompleted ?
                <div id="divToDownload">
                    <div className='title-result'>{dietName} {goal} kcal</div>
                    <div className='title-result'>ONE DAY DIET</div>
                    <div className='plan-res nutrition-facts'>
                        <div className='plan'>{Object.keys(randomNutritionPlan).map((meal) => (
                            <div key={meal}>
                                <div className='title'> {meal}</div>
                                <ul className='res-ul'>
                                    {Object.keys(randomNutritionPlan[meal]).map((key) => (
                                        <li key={key}>
                                            <b>Portion {key}:</b> {randomNutritionPlan[meal][key]}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}</div>
                        <div className='diet'>{Object.keys(randomDiet).map((meal) => (
                            <div key={meal}>
                                <div className='title transparent-title'>{meal}</div>
                                <ul className='res-ul'>
                                    {Object.keys(randomDiet[meal]).map((key) => (
                                        <li key={key}>
                                            <b>{key}:</b> {randomDiet[meal][key].label} (1
                                            portion: {randomDiet[meal][key].portion} {randomDiet[meal][key].units})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        </div>
                    </div>
                    <a className="btn-small deep-orange lighten-2" onClick={handleDownload}>
                        <i className='material-icons left'>download</i>download</a>
                </div>
                : <div></div>}

            {weekPlanCompleted ? <div id="divToDownload">
                    <div className='title-result'>{dietName} {goal} kcal</div>
                    <div className='title-result'>WEEK DIET</div>
                <div className='slider-wrap'>
                    {Object.keys(weekPlan).map((day, index) => (
                        <div key={index}
                             className={currentIndex === index ? 'active sliderday' : 'inactive sliderday'}>
                            <div className='title-row'>
                                <div className='title-result'>{day.toUpperCase()}</div>
                                <a className="btn-small deep-orange lighten-2" onClick={handleDownload}>
                                    <i className='material-icons left'>download</i>download</a>
                            </div>
                            <div className='btn-raw'>
                                <a className="btn-small deep-orange lighten-2 navigate-day" onClick={handlePrev}>
                                    <i className='material-icons'>navigate_before</i>
                                    <span>Day before</span></a>
                                <a className="btn-small deep-orange lighten-2 navigate-day" onClick={handleNext}>
                                    <span>Next day</span>
                                    <i className='material-icons'>navigate_next</i></a>
                            </div>

                            <div className='plan-res nutrition-facts'>
                                <div className='plan'>{Object.keys(weekPlan[day]).map((meal) => (
                                    <div key={meal}>
                                        <div className='title'> {meal}</div>
                                        <ul className='res-ul'>
                                            {Object.keys(weekPlan[day][meal]).map((key) => (
                                                <li key={key}>
                                                    <b>Portion {key}:</b> {weekPlan[day][meal][key]}
                                                </li>
                                            ))}
                                        </ul>

                                    </div>

                                ))}
                                </div>
                                <div className='diet'>{Object.keys(weekDiet[day]).map((meal) => (
                                <div key={meal}>
                                    <div className='title transparent-title'>{meal}</div>
                                    <ul className='res-ul'>
                                        {Object.keys(weekDiet[day][meal]).map((key) => (
                                            <li key={key}>
                                                <b>{key}:</b> {weekDiet[day][meal][key].label} (1
                                                portion: {weekDiet[day][meal][key].portion} {weekDiet[day][meal][key].units})
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            </div>
                            </div>
                    </div>
                ))}

                </div>
                </div>
            : <div></div>}

        </div>
    }

export {NutritionPlan};