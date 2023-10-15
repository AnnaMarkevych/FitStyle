import {BasketItem} from './BasketItem'

function BasketList(props) {
    const {order = [], handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype, incQuantity, decQuantity} = props;

    const totalSum = order.reduce((sum,el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return <ul className="collection basket-list">
        <li className="collection-item cart-title #ffab91 deep-orange lighten-3">
            <div>Cart</div>
            <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
        </li>
        {order.length ? order.map(item => (
            <BasketItem order={order} key={item.id+item.size} {...item}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}/>
        )) : <li className="collection-item">Your Cart is empty</li>}

        <li className="collection-item cart-footer">
            <div className='cart-footer-column'>
                <i className="material-icons">
                    <img src="/assets/images/logo.png" alt="logo"/>
                </i>FITSTYLE
            </div>
            <div className='cart-footer-column mobile'>
                <i className="material-icons">
                    <img src="/assets/images/logo.png" alt="logo"/>
                </i>
            </div>
            <div className='cart-footer-column'>
                <div className='title-mobile'>Total Sum:</div>
                <button className='btn-continue' onClick={handleBasketShow}>Continue Shopping</button>
            </div>
            <div className='cart-footer-column'>
                <div>{totalSum}</div>
                <button className='btn-checkout'>Checkout</button>
            </div>
         </li>

    </ul>

}
 export {BasketList};