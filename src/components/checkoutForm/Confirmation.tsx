import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeStep } from '../../store/actions/shopActions';
import { resetOrder } from '../../store/actions/shippingActions';
import { Typography, Divider, Button, CircularProgress } from '@material-ui/core';

export interface ConfirmationProps {
    classes: Record<"appBar" | "button" | "layout" | "spinner" | "toolbar" | "paper" | "stepper" | "buttons" | "divider", string>
}
 
const Confirmation: React.SFC<ConfirmationProps> = ({ classes }) => {

    const { order, error } = useSelector((state: RootState) => state.shipping);
    const dispatch = useDispatch();
    const history = useHistory();


    const backToHome = () => {
        history.push('/');
        dispatch(changeStep(0));
        dispatch(resetOrder());
    }


    let Confirmation = order.customer.firstname ? (
        <>
            <div>
            {order.customer.firstname && <Typography variant='h5'>Thanks you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>} 
                <Divider className={classes.divider}/>
                <Typography variant='subtitle2'>Order ref: {order.customer_reference}</Typography>
            </div>
            <br/>
            <Button variant='outlined' type='button' onClick={backToHome}>Back To Home</Button>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );

    if(error){
      Confirmation = (
        <>
            <Typography variant='h5'>Oops: {error}</Typography>
            <br/>
            <Button onClick={backToHome} variant='outlined' type='button'>Back To Home</Button>
        </>
      )
    }

    return ( Confirmation );
}
 
export default Confirmation;
