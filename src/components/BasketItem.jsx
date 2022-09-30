import React from 'react';

const BasketItem = (props) => {
    const {id, name, price, quantity, full_background, incrementQuantity, decrementQuantity} = props
    return (<li className="collection-item avatar basket-item">
        <img src={full_background} alt={name} className="circle"/>
        <span className="title">{name} x{quantity} = {price * quantity}<b>$</b></span>
        <span className="secondary-content">
            <a className="waves-effect waves-light btn btn_click" onClick={() => incrementQuantity(id)}><i className="material-icons btn-inc">add</i></a>
            <a className="waves-effect waves-light btn btn_click" onClick={() => decrementQuantity(id)}><i className="material-icons">remove</i></a>
            <a className="waves-effect waves-light btn btn_click" onClick={() => props.removeFromBasket(id)}><i className="material-icons trash" >delete</i></a>

            </span>
    </li>);
};

export default BasketItem;