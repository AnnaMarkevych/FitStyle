function Overlay(props) {
    const {handleBasketShow = Function.prototype} = props;
    return <div className='overlay' onClick={handleBasketShow}>

    </div>
}

export {Overlay}
