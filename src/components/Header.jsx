import {Link} from  'react-router-dom';
import {useState} from 'react';
import * as React from "react";
import {Cart} from './Cart';
import {Favorite} from "./Favorite";
import M from 'materialize-css';
import options from 'materialize-css';

function Header(props) {
    return <div>
    <nav className="deep-orange lighten-2">
        <div className="nav-wrapper">
            <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i></a>
            <Link to='/' className="brand-logo">
                <i className="material-icons">
                    <img src="/assets/images/logo.png" alt="logo"/>
                </i>FITSTYLE
            </Link>
            <ul id="nav-mobile" className='right hide-on-med-and-down'>
                <li><Link to='/trainers'>Trainers</Link></li>
                <li><Link to='/challenges'>Challenges</Link></li>
                <li><Link to='/programs'>Programs</Link></li>
                <li><Link to='/nutrition'>Nutrition</Link></li>
                <li><Link to='/store'>Store</Link></li>
                <li><Link to='/favorites'><Favorite quantity={props.orderFav.length}/></Link></li>
                <li> <Link to='#'><Cart quantity={props.order.length} handleBasketShow={props.handleBasketShow}/></Link></li>
            </ul>
        </div>
    </nav>
        <ul id="slide-out" className="sidenav">
            <li><Link to='/trainers' className='sidenav-close' id='trainers'>Trainers</Link></li>
            <li><Link to='/challenges' className='sidenav-close' id='challenges'>Challenges</Link></li>
            <li><Link to='/programs' className='sidenav-close' id='programs'>Programs</Link></li>
            <li><Link to='/nutrition' className='sidenav-close' id='nutrition'>Nutrition</Link></li>
            <li><Link to='/store' className='sidenav-close' id='store'>Store</Link></li>
            <li><Link to='/favorites' className='sidenav-close' id='favorite'><Favorite quantity={props.orderFav.length}/></Link></li>
            <li> <Link to='#' className='sidenav-close' id='cart'><Cart quantity={props.order.length} handleBasketShow={props.handleBasketShow}/></Link></li>
        </ul>
    </div>


}
 export {Header};