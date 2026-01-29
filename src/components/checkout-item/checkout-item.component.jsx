import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value } from './checkout-item.styles.jsx';
const CheckoutItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);

    return (
        <CheckoutItemContainer >
            <ImageContainer >
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan >{name}</BaseSpan>
            <Quantity >
                <Arrow className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value className='value'>{quantity}</Value>
                <Arrow className='arrow' onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan >{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>


        </CheckoutItemContainer>
    )

}
export default CheckoutItem