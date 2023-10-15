function BasketItem(props) {
    const {
        url,
        id,
        title,
        price,
        size,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const subTotal = price * quantity;


    return <li className="collection-item avatar">

        <img src={'/assets/images/categories/' +(url) + '.jpg'} alt="basket-item" className="circle"/>
        <div className='collection-item-column'>
            <p className="item-id">id {id}</p>
            <p className="item-title">{title}</p>
            <p className='item-column-name'>Price: {price}</p>
        </div>
        <div className='collection-item-column'>
            <p className='item-column-name'>Size</p>
            <div className='item-size'>{size}</div>
        </div>
        <div className='collection-item-column'>
            <p className='item-column-name'>Quantity</p>
            <div className='quantity-panel'>
                <button onClick={() => {decQuantity(id, size)}} className='count_down'>-</button>
                <input type="text" className='input-quantity' value={quantity}/>
                <button onClick={() => {incQuantity(id, size)}} className='count_up'>+</button>
            </div>
        </div>
        <div className='collection-item-column'>
            <p className='item-column-name'>SubTotal</p>
            <p className='item-subtotal'>{subTotal}</p>
        </div>
        <div  className="collection-item-column">
            <i onClick={() => removeFromBasket(id,size)} className="material-icons basket-item-delete deep-orange-text">close</i>
        </div>
    </li>
}


export {BasketItem}