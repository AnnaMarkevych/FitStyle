import * as React from "react";
import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {getItemById} from "../api";
import {Preloader} from "../components/Preloader";
import M from 'materialize-css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {BreadCrumbs} from "../components/BreadCrumbs";

const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
];


function ItemPage(props) {
    const {
        handleBasketShow = Function.prototype, addToBasket = Function.prototype,
        getSize, isSize, selectedSize
    } = props;

    const {id} = useParams();
    const [item, setItem] = useState({});
    const [srcSelectPhoto, setSrcSelectPhoto] = React.useState();
    // const [size, setSize] = useState(false);
    M.AutoInit();

    function selectPhoto(e) {
        setSrcSelectPhoto(e.currentTarget.src);
    }


    useEffect(() => {
        getItemById(id).then(data => {
            setItem(data);
        });
    }, [id]);

    const settings = {
        dots: true,
        arrows: true,
        infinite: true, // Перелистывание по кругу
        speed: 500,
        slidesToShow: 1, // Показываем только одну картинку
        slidesToScroll: 1,
    };
    // Проверяем, что item существует и имеет productPhotos
    if (!item || !item.productPhotos) {
        return null; // Можете вернуть что-то другое или заглушку вместо null
    }



    const imageSlides = Object.values(item.productPhotos).map((value, index) => (
        <div key={index}>
            <img src={'/assets/images/categories/' + value + '.jpg'} alt={`Image ${value}`}
                 style={{ width: '100%', height: 'auto' }} />
        </div>
    ));

        return <div className='container'>
            <BreadCrumbs />

            {!item.id ? <Preloader/> : (
                <div>
                    <div className='product-info'>
                        <div className='product-details mobile'>
                            <div className='product-title'>{item.title} {item.id}</div>
                            <div className='product-price'>{item.price} $</div>
                        </div>
                        <div className='product-photos'>
                            {Object.values(item.productPhotos).map((value) => (
                                <img key={id + (value)} onClick={selectPhoto}
                                    // onMouseOver={selectPhoto}
                                     src={`/assets/images/categories/${value}.jpg`}
                                     width='145'/>
                            ))}</div>

                        <div className='product-photos mobile'>
                            <Slider {...settings}>
                                {imageSlides}
                            </Slider>

                        </div>
                        <div className='selected-photo materialboxed mobile'>

                            {srcSelectPhoto ? <img src={srcSelectPhoto}/> :
                                <img src={'/assets/images/categories/' + (item.productPhotos.photoItem1) + '.jpg'}
                                     alt="photo1"/>
                            }</div>

                        <div className='product-details'>
                            <div className='product-title'>{item.title} {item.id}</div>
                            <div className='product-price'>{item.price} $</div>
                            <div className='title-size'>
                                {isSize ? <a className="modal-trigger" href="#modal-size">Select size ?</a> :
                                    <a className='modal-trigger red-text' href="#modal-size">Select size ?</a>
                                }</div>
                            <div className='product-sizes'>
                                {Object.keys(item.sizes).map((key) => (
                                    item.sizes[key] ?
                                        <div key={id + key}
                                             className="radio"
                                             onClick={() => {
                                                 getSize(key);
                                                 item.size = selectedSize
                                             }
                                             }>
                                            <input className="custom-radio" type="radio" id={key} name="color"
                                                   value="indigo"/>
                                            <label htmlFor={key}>{key}</label>
                                        </div>
                                        :
                                        <div key={id + key} className="radio">
                                            <input className="custom-radio" type="radio" id={key} name="color"
                                                   value="brown"
                                                   disabled="disabled"/>
                                            <label htmlFor={key}>{key}</label>
                                        </div>
                                ))}</div>
                            <div className='btn-row'>
                                {isSize ?
                                    <a className="light-green btn-small"
                                       onClick={() => addToBasket(
                                           item
                                       )}>
                                        <i className="material-icons left">local_grocery_store</i>
                                        Add to cart</a>
                                    :
                                    <a className="grey lighten-2 btn-small disabled"><i
                                        className="material-icons left">local_grocery_store</i>Add to cart</a>
                                }
                            </div>
                            <div className='btn-row'>
                                <a className="btn-click grey lighten-5 btn-small"
                                   onClick={handleBasketShow}
                                ><i className="material-icons left">local_phone</i>Buy in click</a>
                            </div>

                        </div>
                    </div>
                    <div id="modal-size" className="modal">
                        <div className="modal-content">
                            <img src={'/assets/images/categories/size.jpg'} alt="size"/>
                        </div>
                        <div className="modal-footer">
                            <a className="modal-close waves-effect waves-green btn-flat">OK</a>
                        </div>
                    </div>

                    <div className='product-description'>
                        <p className='title-des'>Description</p>
                        <ul className='descriptionDetails'>
                            {Object.keys(item.descriptionDetails).map((key) => (
                                <li key={id + key}><span>{key}: </span>{item.descriptionDetails[key]}</li>

                            ))}
                        </ul>


                    </div>
                </div>
            )
            }
        </div>

}
export {ItemPage}