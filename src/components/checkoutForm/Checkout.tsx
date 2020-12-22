import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Stepper, Step, StepLabel, Typography, CssBaseline } from '@material-ui/core'
import useStyles  from '../../styles/checkoutStyles';
import ShoppingForm from '../shoppingForm/ShoppingForm';
import PaymentForm from './PaymentForm';
import { getTocken } from '../../store/actions/shopActions';
import Confirmation from './Confirmation';

export interface CheckoutProps {
    
}

const steps = ['Shipping address', 'Payment details'];
 
const Checkout: React.SFC<CheckoutProps> = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { cart, activeStep }= useSelector((state: RootState) => state.shop);


    useEffect(() => {
        if(cart.id){
            dispatch(getTocken(cart.id));
        }
        // eslint-disable-next-line
    },[]);


    const Form = activeStep === 0 ? <ShoppingForm /> : <PaymentForm />;

    return ( 
        <>
          <CssBaseline />
          <div className={classes.toolbar} />
          <main className={classes.layout}>
              <Paper className={classes.paper}>
                  <Typography variant='h4' align='center'>Checkout</Typography>
                  <Stepper activeStep={activeStep} className={classes.stepper}>
                      {steps.map(step => (
                          <Step key={step}>
                              <StepLabel>{step}</StepLabel>
                          </Step>
                      ))}
                  </Stepper>
                  {activeStep === steps.length ? <Confirmation classes={classes}/> : Form}
              </Paper>
          </main>
        </>
     );
}
 
export default Checkout;