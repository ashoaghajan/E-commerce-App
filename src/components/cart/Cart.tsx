import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@material-ui/core';
import useStyles from '../../styles/cartStyles';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';

export interface CartProps {
    
}
 
const Cart: React.SFC<CartProps> = () => {

    const classes = useStyles();
    const cart = useSelector((state: RootState) => state.shop.cart);

    const Component = cart.line_items.length ? <FilledCart classes={classes} cart={cart}/> : <EmptyCart classes={classes} />;

    return ( 
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Card</Typography>
            {cart.id ? Component : <h5>Loading...</h5>}
        </Container>
     );
}
 
export default Cart;