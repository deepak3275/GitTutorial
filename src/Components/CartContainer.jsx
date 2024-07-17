import React from 'react'
import CartItem from './CartItem';
import { useGlobalContext } from './CartContext';
import cartItem from '../Cartdata';
import { TbBackground } from 'react-icons/tb';

const CartContainer = () => {
    console.log(useGlobalContext,"useGlobalContext")
    const { cart, clearCart, totalCost } = useGlobalContext();

    const cartArray = Array.from(cart.entries());

    if (cartArray.length === 0) {
        return (
            <section className='carts'>
                {/* cart header */}
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'> is currently empty </h4>
                </header>
            </section>
        );
    }

    return (
        <section className='carts'>
            {/* cart header */}
            <header>
                <h2>your bag</h2>
            </header>
            {/* cart items */}
            <div>
                {cartArray.map((cartItem) => {
                    const [id, item] = cartItem;
                    return <CartItem key={id} {...item} />;
                })}
            </div>
            {/* cart footer */}
            < div className='footer'>
                <hr />
                <div>
                    <h5 className='cart-total'>
                        Total <span>${totalCost.toFixed(2)}</span>
                    </h5>
                </div>
                <button
                    className='btn btn-hipster'
                    onClick={clearCart}>
                    clear cart
                </button>
            </ div>
        </section>
    )
}

export default CartContainer
