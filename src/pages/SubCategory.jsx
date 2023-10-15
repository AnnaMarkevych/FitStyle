import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {getFilteredCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {ItemsList} from "./ItemsList";
import {Cart} from '../components/Cart';
import * as React from "react";
import {BreadCrumbs} from "../components/BreadCrumbs";

function SubCategory(props) {
    const {name} = useParams();
    const [items, setItems] = useState([]);


    useEffect( ()=> {
        getFilteredCategory(name).then( data => {
            setItems(data);
        })
    }, [name]);




    return <div>
            { !items.length ? <Preloader /> : <ItemsList items={items}
                                                         addToBasket={props.addToBasket}
                                                         addToFavorite={props.addToFavorite}
                                                         getSize={props.getSize}
                                                         isSize={props.isSize}
                                                         selectedSize={props.selectedSize}
                                                         isFavorite={props.isFavorite}
                                                         removeFromFavorite={props.removeFromFavorite}
                                                         firstItemIndex={props.firstItemIndex}
                                                         itemsPerPage={props.itemsPerPage}
                                                         lastItemIndex={props.lastItemIndex}
                                                         paginate={props.paginate}
                                                         />}
        </div>


}
export {SubCategory}