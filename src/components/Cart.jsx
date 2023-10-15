function Cart(props) {
    const {quantity = 0, handleBasketShow=Function.prototype} = props;
    return (
        <div className='cart'
        onClick={handleBasketShow}>
            <i className="material-icons">local_mall</i>
            {quantity ? <span className='cart-quantity #ff5722 deep-orange'>{quantity}</span> : null}
        </div>

    )
}

export {Cart};