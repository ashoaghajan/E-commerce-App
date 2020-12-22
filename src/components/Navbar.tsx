import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart, ArrowBack } from '@material-ui/icons';
import useStyles from '../styles/navbarStyles';
import logo from '../assets/commerce.png';

export interface NavbarProps {
    
}

const Navbar: React.SFC<NavbarProps> = () => {

    const classes = useStyles();
    const cart = useSelector((state: RootState) => state.shop.cart);
    const history = useHistory();
    const location = useLocation();

    const inMainRoute = location.pathname === '/' ? true : false; 
    const inShoppingForm = location.pathname === '/cart' ? true : false; 


    const goToCart = () => {
        history.push('/cart');
    }

    const goToProducts = () => {
        history.push('/');
    }
    

    return ( 
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h5' className={classes.title} color='inherit'>
                        <img src={logo} alt="Commerce.js" height='25px' className={classes.image} />
                        Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    {inMainRoute && <div>
                        <IconButton aria-label='Show cart items' color='inherit' onClick={goToCart}>
                            <Badge badgeContent={cart.total_items} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>}
                    {inShoppingForm && <IconButton aria-label='Show cart items' color='inherit' onClick={goToProducts}>
                        <ArrowBack /> Back
                    </IconButton>}
                </Toolbar>
            </AppBar>
        </>
     );
}
 
export default Navbar;