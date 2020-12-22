import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { Grid } from '@material-ui/core';
import useStyles from '../../styles/productsStyles'

export interface ProductsProps {

}
 
const Products: React.SFC<ProductsProps> = () => {
    
    const products = useSelector((state: RootState) => state.shop.products);
    const classes = useStyles();

    return ( 
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.length ? products.map((product: any) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                )) : <h5>Loading...</h5>}
            </Grid>
        </main>
     );
}
 
export default Products;
