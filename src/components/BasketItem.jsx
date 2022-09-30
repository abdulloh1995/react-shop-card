import React from 'react';

const BasketItem = (props) => {
    const {id, name, price, quantity, full_background} = props
    return (
        <li className="collection-item avatar basket-item">
            <img src={full_background} alt={name} className="circle"/>
            <span className="title">{name} x{quantity} = {price}<b>$</b></span>
            <span className="secondary-content">
                <i className="material-icons trash">delete</i>
            </span>
        </li>
    );
};

export default BasketItem;