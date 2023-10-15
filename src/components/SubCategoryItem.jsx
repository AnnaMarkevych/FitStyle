import {Link} from  'react-router-dom';

function SubCategoryItem(props) {
    const {idFilterCategory, titleFilterCategory, urlFilerCategory, descriptionFilter, program, trainer} = props;
    // const titleUrl = titleFilterCategory.toLowerCase();

    return <Link to={`${titleFilterCategory}`}>
            <div className='card'>
                <div className="card-image">
                    <img src={'/assets/images/categories/' +(urlFilerCategory) + '.jpg'} alt='category'/>
                </div>
                <span className="card-title">{program}</span>

                {trainer === undefined ? <span className="card-title">{titleFilterCategory}</span> :
                    <div className='border'>
                        <span>{titleFilterCategory.split(" ").slice(0, 2).join(" ")}</span>
                    </div>
                }
            </div>

    </Link>
    
}

export {SubCategoryItem}