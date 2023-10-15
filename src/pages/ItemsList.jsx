import {Item} from "./Item";
import {useState} from "react";
import {Pagination} from "../components/Pagination";
import {BreadCrumbs} from "../components/BreadCrumbs";

function ItemsList(props) {
    const currentItem = props.items.slice(props.firstItemIndex, props.lastItemIndex);


    return <div className="container">
        <BreadCrumbs />
        <div className='cards'>
        {currentItem.map (el =>
            (<Item key={el.id} {...el}
                   addToBasket={props.addToBasket}
                   addToFavorite={props.addToFavorite}
                   getSize={props.getSize}
                   isSize={props.isSize}
                   selectedSize={props.selectedSize}
                   isFavorite={props.isFavorite}
                   removeFromFavorite={props.removeFromFavorite}
                   />))}
    </div>
        <Pagination itemsPerPage={props.itemsPerPage}
                    totalItems={props.items.length}
                    paginate={props.paginate}
        />

    </div>

}
export {ItemsList}