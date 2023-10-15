import {useState, useEffect} from 'react';
import {getCatalogTrainers} from "../api";
import {Preloader} from "../components/Preloader";
import {CategoryList} from "../components/CategoryList";
import {Sale} from "../components/Sale";
import {BreadCrumbs} from "../components/BreadCrumbs";


function Trainers() {
    const [catalog, setCatalog] = useState([]);

    useEffect( ()=> {
        getCatalogTrainers().then(data => {
            setCatalog(data);
        })
    }, []);

    return <div className='container'>
        <BreadCrumbs />
        {!catalog.length ? (<Preloader />
        ) : (
            <CategoryList catalog={catalog} />
        )}

    </div>

}

export {Trainers};