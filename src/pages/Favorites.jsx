import {Item} from "./Item";
import {useState} from "react";
import {Sale} from "../components/Sale";
import {Pagination} from "../components/Pagination";
import {Link} from "react-router-dom";
import * as React from "react";
function Favorites(props) {
    const {orderFav} = props;
    const currentItem = orderFav.slice(props.firstItemIndex, props.lastItemIndex);

    console.log(orderFav);

    return <div>
        <div className='cards'>
            {currentItem.map (el =>
                (<Item key={el.id} {...el}
                       addToBasket={props.addToBasket}
                       getSize={props.getSize}
                       isSize={props.isSize}
                       selectedSize={props.selectedSize}
                       isFavorite={props.isFavorite}
                       removeFromFavorite={props.removeFromFavorite}
                />))}
        </div>
        <Pagination itemsPerPage={props.itemsPerPage}
                    totalItems={orderFav.length}
                    paginate={props.paginate}
        />
    </div>
}
export {Favorites}