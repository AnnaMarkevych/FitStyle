import {SubCategoryItem} from './SubCategoryItem';
import {BreadCrumbs} from "./BreadCrumbs";

function SubCategoryList({subCategories = []}) {
    // console.log(subCategories);

    return <div className='container'>
        <BreadCrumbs />
        <div className='cards'>
        {subCategories.map( el =>
            (<SubCategoryItem key={el.idFilterCategory} {...el}/> )
        )}

    </div>
    </div>
}

export {SubCategoryList}