import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from '../../styles/cartItemStyles';
import { updateCartQtw, removeFromCart } from '../../store/actions/shopActions';

export interface CartItemProps {
    item: CartItem
}
 
const CartItem: React.SFC<CartItemProps> = ({ item }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    return ( 
        <Card>
            <CardMedia image={item.media.source} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant='h4'>{item.name}</Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' 
                        onClick={() => dispatch(updateCartQtw(item.id, item.quantity - 1))}
                    >-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small' 
                        onClick={() => dispatch(updateCartQtw(item.id, item.quantity + 1))}
                    >+</Button>
                </div>
                <Button variant='contained' type='button' color='secondary'
                    onClick={() => dispatch(removeFromCart(item.id))}
                >Remove</Button>
            </CardActions>
        </Card>
     );
}
 
export default CartItem;