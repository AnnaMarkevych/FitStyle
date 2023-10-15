import {useState, useEffect} from 'react';
import {getCatalogPrograms} from "../api";
import {Preloader} from "../components/Preloader";
import {CategoryList} from "../components/CategoryList";
import {Link, useParams} from 'react-router-dom';
import {BreadCrumbs} from "../components/BreadCrumbs";


function Programs() {
    const [catalog, setCatalog] = useState([]);

    useEffect( ()=> {
        getCatalogPrograms().then(data => {
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

export {Programs}
