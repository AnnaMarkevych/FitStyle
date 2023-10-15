function TableNutritionPlan({result}){
    return <table className='container'>
        <tbody>
            <tr>
                <th>Meal</th>
                <th>Carbohudrates</th>
                <th>Proteins</th>
                <th>Fats</th>
                <th>kcal</th>
            </tr>
            <tr>
                <th>Breakfast</th>
                <td>{result.breakfast.carbohudrates}</td>
                <td>{result.breakfast.proteins}</td>
                <td>{result.breakfast.fats}</td>
                <th>{result.breakfast.kcal}</th>
            </tr>
            <tr>
                <th>First snack</th>
                <td>{result.firstSnack.carbohudrates}</td>
                <td>{result.firstSnack.proteins}</td>
                <td>{result.firstSnack.fats}</td>
                <th>{result.firstSnack.kcal}</th>
            </tr>
            <tr>
                <th>Lunch</th>
                <td>{result.lunch.carbohudrates}</td>
                <td>{result.lunch.proteins}</td>
                <td>{result.lunch.fats}</td>
                <th>{result.lunch.kcal}</th>
            </tr>
            <tr>
                <th>Second snack</th>
                <td>{result.secondSnack.carbohudrates}</td>
                <td>{result.secondSnack.proteins}</td>
                <td>{result.secondSnack.fats}</td>
                <th>{result.secondSnack.kcal}</th>
            </tr>
            <tr>
                <th>Dinner</th>
                <td>{result.dinner.carbohudrates}</td>
                <td>{result.dinner.proteins}</td>
                <td>{result.dinner.fats}</td>
                <th>{result.dinner.kcal}</th>
            </tr>
            <tr>
                <th>Total</th>
                <th>{result.total.carbohudrates}</th>
                <th>{result.total.proteins}</th>
                <th>{result.total.fats}</th>
                <th>{result.total.kcal}</th>
            </tr>
        </tbody>
    </table>
}
export {TableNutritionPlan}