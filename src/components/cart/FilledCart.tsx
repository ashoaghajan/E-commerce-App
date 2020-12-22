import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem';
import { emptyTheCart } from '../../store/actions/shopActions';

export interface FilledCartProps {
    classes: Record<"toolbar" | "title" | "emptyButton" | "checkoutButton" | "link" | "cardDetails", string>,
    cart: Cart
}
 
const FilledCart: React.SFC<FilledCartProps> = ({ classes, cart }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    return ( 
        <>
        <Grid container spacing={3}>
            {cart.line_items.map(item => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item}/>
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h4'>
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'
                    onClick={() => dispatch(emptyTheCart())}>
                    Empty Cart
                </Button>
                <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'
                    onClick={() => history.push('/checkout')}>
                    Checkout
                </Button>
            </div>
        </div>
        </>
     );
}
 
export default FilledCart;
