import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from '../../styles/productStyles'
import { addToCart } from '../../store/actions/shopActions';

export interface ProductProps {
    product: Product,
}
 
const Product: React.SFC<ProductProps> = ({ product }) => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const handleAddToCart = () => {
        dispatch(addToCart(product.id, 1));
    }

    return ( 
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Chart' onClick={handleAddToCart}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
     );
}
 
export default Product;
