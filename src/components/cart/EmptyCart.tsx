import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export interface EmptyCartProps {
    classes: Record<"toolbar" | "title" | "emptyButton" | "checkoutButton" | "link" | "cardDetails", string>
}
 
const EmptyCart: React.SFC<EmptyCartProps> = ({ classes }) => {
    return ( 
        <Typography variant='subtitle1'>You have no items in the shopping cart,
            <Link to='/' className={classes.link}> start adding some!</Link>
        </Typography>
     );
}
 
export default EmptyCart;