import React from 'react'
import './checkoutProduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProduct({ id, image, price, rating, title }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the items from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }


    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image'
                src={image}
                alt=""
            />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'></p>
                <small>$</small>
                <strong>{price}</strong>

                <div className='checkoutProduct__rating'>
                    {/* if we have rating of 5 than array will allocate space for 5 star and fill
                    map will helps mapping the rating with the number,i */}
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>
                    Remove from basket
                </button>

            </div>

        </div>
    )
}

export default CheckoutProduct
