import * as React from "react";
import {useEffect, useState, useRef} from 'react'
import {Link, useParams} from 'react-router-dom';
import {BreadCrumbs} from "../components/BreadCrumbs";
import {getItemById} from "../api";
import {Preloader} from "../components/Preloader";
import M from 'materialize-css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {SubCategoryItem} from '../components/SubCategoryItem';


function TrainerPage() {
    const {id} = useParams();
    const [item, setItem] = useState({});

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex === 2 ? 0 : prevIndex + 1);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? 2 : prevIndex - 1);
    };
    useEffect(() => {
        getItemById(id).then(data => {
            setItem(data);
        });
    }, [id]);

    const [startIndex, setStartIndex] = useState(0);

    const prevSlide = () => {
        setStartIndex((prevStartIndex) =>
            prevStartIndex === 0 ? item.allProgramsTraining.length - 3 : prevStartIndex - 1
        );
    };

    const nextSlide = () => {
        setStartIndex((prevStartIndex) =>
            prevStartIndex >= item.allProgramsTraining.length - 3 ? 0 : prevStartIndex + 1
        );
    };

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

    // console.log(item.productPhotos);

    const imageSlides = Object.values(item.productPhotos).map((value, index) => (
        <div key={index + value}>
            <img src={'/assets/images/categories/' + value + '.jpg'} alt={`Image ${value}`}
                 style={{ width: '100%', height: 'auto' }} />
        </div>
    ));



    return <div className='container'>
        <BreadCrumbs />
        {!item.id ? <Preloader/> : ( <div>
            <div className='info-content'>
                <div className='info-block'>
                    <div className='trainer-title'>{item.title}</div>
                    <div className='stat-name'>{item.directions}</div>
                    <div className='trainer-stat'>
                        <div className='stat-block'>
                            <div className='stat-amount'>{item.programsAmount}</div>
                            <div className='stat-name'>Programs</div>
                        </div>
                        <div className='stat-block'>
                            <div className='stat-amount'>{item.trainingsAmount}</div>
                            <div className='stat-name'>Trainings</div>
                        </div>
                        <div className='stat-block'>
                            <div className='stat-amount'>{item.trainingnow}</div>
                            <div className='stat-name'>Persons are training now</div>
                        </div>
                    </div>
                    <a href="#programs" className='light-green btn-large start-training'>
                        <i className='material-icons left'>directions_run</i>Start training
                    </a>

                </div>
                <div className='selected-photo'>
                    <Slider {...settings}>
                        {imageSlides}
                    </Slider>

                </div>
            </div>

            <div className='info-about'>
                <div className='about-title'> About Trainer</div>
                <div className='about-info'>
                    <video src={'/assets/videos/' + (item.urlAbout) + '.mp4'} controls></video>
                    <div className='about-description'>{item.about}</div>
                </div>
                <div id="programs" className='about-title'>Programs with {item.title}</div>
                <div className="slider-programs">
                    <div className="slider-container">
                        {item.allProgramsTraining.slice(startIndex, startIndex + 3).map((card, index) => (
                            <SubCategoryItem key={card.idFilterCategory} {...card}/>
                        ))}
                    </div>
                    <a className='btn-small deep-orange lighten-2 prev-button' onClick={prevSlide}>
                        <i className='material-icons'>navigate_before</i>
                    </a>
                    <a className='btn-small deep-orange lighten-2 next-button' onClick={nextSlide}>
                        <i className='material-icons'>navigate_next</i>
                    </a>
                </div>

            </div>
        </div>)}

    </div>
}

export {TrainerPage};

