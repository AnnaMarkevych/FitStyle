import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {getFilteredCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {SubCategoryList} from "../components/SubCategoryList";
import * as React from "react";
// import {useHistory} from 'react-router-dom'

function Category() {
    const {name} = useParams();
    const [subCategories, setSubCategories] = useState([]);
    // const {goBack} = useHistory();

    useEffect( ()=> {
        getFilteredCategory(name).then( data => {
            setSubCategories(data);
        })
        }, [name]);


    return <div>
            { !subCategories.length ? <Preloader /> : <SubCategoryList subCategories={subCategories} />}
        </div>
}
 export {Category}