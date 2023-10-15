import {API_URL_CATALOGSHOP, API_URL, APP_POINT, API_URL_CATALOGNUTRITION, API_URL_PROGRAMS, API_URL_TRAINERS,
    API_URL_FOODSPROGRAMS, API_URL_NUTRITION_K, API_URL_NUTRITION_P, API_URL_NUTRITION_O,
API_URL_NUTRITION_M, API_URL_NUTRITION_F, API_URL_NUTRITION_J} from "./config";

const getAllCategories = async () => {
    const response = await fetch(API_URL_CATALOGSHOP);
    return await response.json();
};

const getCatalogNutrition = async () => {
    const response = await fetch(API_URL_CATALOGNUTRITION);
    return await response.json();
};

const getFoodsPrograms = async () => {
    const response = await fetch(API_URL_FOODSPROGRAMS);
    return await response.json();
};

const getCatalogPrograms = async () => {
    const response = await fetch(API_URL_PROGRAMS);
    return await response.json();
};

const getCatalogTrainers = async () => {
    const response = await fetch(API_URL_TRAINERS);
    return await response.json();
};

const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + 'filtercat/' + catName + '.json');
    return await response.json();
};

const getItemById = async (itemId) => {
    const response = await fetch(API_URL + 'filtercat/' + itemId + '.json');
    return await response.json();
};

const getNutritionIngr = async (inrg) => {
    const response = await  fetch(APP_POINT+inrg);
    return await response.json();
};

const getNutritionK = async () => {
    const response = await fetch(API_URL_NUTRITION_K);
    return await response.json();
};

const getNutritionP = async () => {
    const response = await fetch(API_URL_NUTRITION_P);
    return await response.json();
};

const getNutritionM = async () => {
    const response = await fetch(API_URL_NUTRITION_M);
    return await response.json();
};

const getNutritionO = async () => {
    const response = await fetch(API_URL_NUTRITION_O);
    return await response.json();
};

const getNutritionF = async () => {
    const response = await fetch(API_URL_NUTRITION_F);
    return await response.json();
};

const getNutritionJ = async () => {
    const response = await fetch(API_URL_NUTRITION_J);
    return await response.json();
};

const getProgramsTrainer = async (direction) => {
    const response = await fetch(API_URL_PROGRAMS+direction);
    return await response.json();
};







export {getAllCategories, getFilteredCategory, getItemById, getNutritionIngr,
    getCatalogNutrition, getFoodsPrograms, getCatalogPrograms, getCatalogTrainers,
    getNutritionK, getNutritionP,  getNutritionM, getNutritionO, getNutritionF, getNutritionJ,
    getProgramsTrainer};