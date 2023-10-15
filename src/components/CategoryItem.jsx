import {Link} from  'react-router-dom';


function  CategoryItem(props) {
    const {idCategory, trainers, titleCategory, urlCategory, trainingDirections} = props;
    // const titleUrl = titleCategory.toLowerCase();
    function keepFirstTwoWords(str) {
        const words = str.split(" "); // Разбиваем строку на массив слов
        const firstTwoWords = words.slice(0, 2); // Получаем первые два слова
        return firstTwoWords.join(" "); // Объединяем первые два слова обратно в строку
    }

    return <Link to={`${titleCategory}`}>
                <div className='card'>
                <div className="card-image">
                    <img src={'/assets/images/categories/' +(urlCategory) + '.jpg'} alt='category'/>
                </div>
                <span className="card-title">{titleCategory}</span>

                    {trainers === undefined ? <span></span> : <div className='border'>
                            {trainers.map((trainer) => ( <Link className='link' key={trainer} to={`${titleCategory}/${trainer}`}>{trainer.split(" ").slice(0, 2).join(" ")}</Link>
                        ))}</div>
                    }
                    {trainingDirections === undefined ? <span></span> : <div className='border'>
                            {trainingDirections.map((direction) => ( <Link className='link' key={trainingDirections} to={`${direction}/${titleCategory}%20${direction}`}>{direction}</Link>

                            ))}
                    </div>}

            </div>
    </Link>
}

export {CategoryItem}
