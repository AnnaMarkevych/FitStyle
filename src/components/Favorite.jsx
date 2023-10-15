import * as React from "react";

function Favorite(props) {
    const {quantity = 0} = props;
    return (
        <div>{quantity ? <i className="material-icons">favorite</i> :
            <i className="material-icons">favorite_border</i>
        }

            {quantity ? <span className='favorite-quantity #ff5722 deep-orange'>{quantity}</span> : null}
        </div>

    )
}

export {Favorite};