import {Link} from  'react-router-dom';
import {Sale} from "../components/Sale";
import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom/index";
// import {useParams} from 'react-router-dom';

function Item(props) {
    const {id, title, url, urlHover, price, sale, sizes, addToBasket = Function.prototype,
        addToFavorite = Function.prototype, isFavorite = Function.prototype, removeFromFavorite = Function.prototype,
        getSize, selectedSize} = props;
    const [isSizeItemSelected, setIsSizeItemSelected] = useState(false);
    const [isAddToFavorite, setIsAddToFavorite] = useState(false);

    function addFavorite() {
        if (!isAddToFavorite) {
            setIsAddToFavorite(true);
        } else {
            setIsAddToFavorite(false);
        }
    }


    return <div className='card card-item'>

                <div className="card-image">
                    <Link to={`${id}`}>
                    <img src={'/assets/images/categories/' +(url) + '.jpg'} alt='item'
                     onMouseOver={e => (e.currentTarget.src = '/assets/images/categories/' +(urlHover) + '.jpg')}
                     onMouseOut={e => (e.currentTarget.src = '/assets/images/categories/' +(url) + '.jpg')}
                />
                    </Link>
                </div>
                <Sale sale={sale}/>
        <div className='favorite' onClick={addFavorite}>
            {!isFavorite(id)  ?
                <i className="material-icons" onClick={() => {
                    addToFavorite({
                        id,
                        title,
                        price,
                        url,
                        sizes,
                        urlHover,
                        sale});
                }}>favorite_border</i>
                :
                <i className="material-icons" onClick={() => {
                removeFromFavorite(id)}
                }>favorite</i>
            }


        </div>

        <div className='card-title'>{title}</div>
        <div className='control-panel'>
                <span className="card-title red-text">{price}$</span>
            <div
                className='product-sizes'>
                {Object.keys(sizes).map((key) => (
                    sizes[key] ?
                        <div key={(id)+(key)} className="radio" onClick={() => {getSize(key);
                            setIsSizeItemSelected(true)}}>
                            <input className="custom-radio" type="radio" id={(id)+(key)} name="color" value="indigo"/>
                            <label htmlFor={(id)+(key)}>{key}</label>
                        </div>
                        :
                        <div key={(id)+(key)} className="radio">
                            <input className="custom-radio" type="radio" id={(id)+(key)} name="color" value="brown"
                                   disabled="disabled"/>
                            <label htmlFor={(id)+(key)}>{key}</label>
                        </div>
                ))}</div>
            <div className='btn-basket'>
                {isSizeItemSelected ?
                    <a id={(id)+'basket'}
                        onClick={() => addToBasket(
                            {
                                id,
                                title,
                                "size":selectedSize,
                                price,
                                url}
                        )}
                        className='btn-small'><i className="tiny material-icons">shopping_cart</i>
                    </a>
                    :
                    <a className="grey lighten-2 btn-small disabled" id={(id)+'basket'}>
                        <i className="tiny material-icons">shopping_cart</i></a>
                }
            </div>

        </div>

            </div>





}
 export {Item}