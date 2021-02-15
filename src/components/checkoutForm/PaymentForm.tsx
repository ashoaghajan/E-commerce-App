import React from 'react';
import Review from './Review';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import { usePaymentForm } from '../../hooks/usePaymentForm';

export interface PaymentFormProps {
    
}

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!);
 

const PaymentForm: React.SFC<PaymentFormProps> = () => {

    const { checkoutToken, goStepBack, handleSubmit } = usePaymentForm();

    return ( 
        <>
            <Review />
            <Divider />
            <Typography variant='h6' gutterBottom style={{ margin: '20px 0' }}>Payment Method (use 424242... for testing)</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => ( 
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br/> <br/>
                            <div style={{ display:'flex', justifyContent: 'space-between' }}>
                                <Button variant='outlined' onClick={goStepBack}>Back</Button>
                                <Button type='submit' variant='contained' disabled={!stripe} color='primary'>
                                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
     );
}
 
export default PaymentForm;