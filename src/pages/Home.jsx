import * as React from "react";
import {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {CheckboxList} from '../components/CheckboxList';

function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
    };
    return <div className='baner'>
            <img className='baner1200'src="/assets/images/categories/baner1.jpg" alt="baner" />
            <img className='baner992' src="/assets/images/categories/baner992.jpg" alt="baner" />
            <img className='baner768' src="/assets/images/categories/baner768.jpg" alt="baner" />
            <img className='baner360' src="/assets/images/categories/baner360.jpg" alt="baner" />
        <div className='motivation-raw'>Start now!</div>
        <CheckboxList />

    </div>

}
export {Home};