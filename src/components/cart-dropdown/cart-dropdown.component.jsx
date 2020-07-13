
import React from 'react';

import {CartDropdownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      { cartItems.length ? 
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
        <EmptyMessage>Your cart is empty</EmptyMessage>
      }
    </CartItemsContainer>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>
        Go to checkout
      </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
