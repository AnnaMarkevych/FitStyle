import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {getFilteredCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {ItemsList} from "./ItemsList";
import {Cart} from '../components/Cart';
import * as React from "react";
import {BreadCrumbs} from "../components/BreadCrumbs";

function ProgramList() {
    const {name} = useParams();
    const [items, setItems] = useState([]);

    useEffect( ()=> {
        getFilteredCategory(name).then( data => {
            setItems(data);
        })
    }, [name]);

    return <div className='container'>
        <BreadCrumbs />
            { !items.length ? <Preloader /> : <div className='cards'>
                    {items.map (el => (
                        <div className='card card-item'>
                            <video src={'/assets/videos/' +(el.url) + '.mp4'} controls autoplay></video>
                        </div>
                    ))}

            </div>}
        </div>


}
export {ProgramList}