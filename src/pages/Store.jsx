import {useState, useEffect} from 'react';
import {getAllCategories} from "../api";
import {Preloader} from "../components/Preloader";
import {CategoryList} from "../components/CategoryList";
import {BreadCrumbs} from "../components/BreadCrumbs";


function Store() {
    const [catalog, setCatalog] = useState([]);

    useEffect( ()=> {
        getAllCategories().then(data => {
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
export {Store};