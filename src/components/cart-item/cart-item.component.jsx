import './cart-item.styles.jsx';
import { CartItemContainer, Img, ItemDetailes, Name } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer >
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetailes >
                <Name >{name}</Name>
                <span className='price'>{quantity} * ${price}</span>

            </ItemDetailes>
        </CartItemContainer>
    )
}
export default CartItem;