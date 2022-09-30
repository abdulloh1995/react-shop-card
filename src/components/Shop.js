import React, {useEffect, useState} from 'react';
import {API_URL, API_KEY} from "./config";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Cart from "./Cart";
import BasketList from "./BasketList";

const Shop = () => {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex < 0) {
            const newitem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newitem])
        }else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                }else {
                    return item
                }
            })

            setOrder(newOrder)
        }


    }

    const handleBasketShow = () => {
        setIsBasketShow(!isBasketShow)
    }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(response => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured)
                setLoading(false)
            })
    }, []);

    return (
        <div className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? <Loader/> : <GoodList goods={goods} addToBasket={addToBasket} />}
            {isBasketShow && <BasketList order={order}handleBasketShow={handleBasketShow}/>}
        </div>
    );
};

export default Shop;