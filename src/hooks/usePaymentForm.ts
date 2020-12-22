import { useSelector, useDispatch } from 'react-redux';
import { changeStep, refreshCart, resetToken } from '../store/actions/shopActions';
import { captureCheckout } from '../store/actions/shippingActions';
import { CardElement } from '@stripe/react-stripe-js';
import { Stripe, StripeElements } from '@stripe/stripe-js'

export const usePaymentForm = () => {

    const checkoutToken = useSelector((state: RootState) => state.shop.checkoutToken);
    const shippingData = useSelector((state: RootState) => state.shipping.shippingData);
    const dispatch = useDispatch();


    const goStepBack = () => {
        dispatch(changeStep(0));
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, elements: StripeElements | null, stripe: Stripe | null) => {
        e.preventDefault();
        if(!elements || !stripe){
            return
        }
        else{
            const cardElement = elements.getElement(CardElement);
            const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement! });

            if(error){
                console.log(error)
            }
            else{
                const { firstName, lastName, email, address1, city, subdivision, zip, country, option } = shippingData;
                const orderData = {
                    list_items: checkoutToken.live.line_items,
                    customer: { 
                        firstname: firstName, 
                        lastname: lastName, 
                        email },
                    shipping: { 
                        name: 'Primary', 
                        street: address1, 
                        town_city: city, 
                        county_state: subdivision, 
                        postal_zip_code: zip,
                        country
                    },
                    fulfillment: { shipping_method: option },
                    payment: { 
                        gateway: 'stripe',
                        stripe: {
                            payment_method_id: paymentMethod!.id
                        }
                    }
                }
                dispatch(captureCheckout(checkoutToken.id, orderData));
                dispatch(refreshCart());
                dispatch(changeStep(2));
                dispatch(resetToken());
            }
        }
    }

    return { checkoutToken, goStepBack, handleSubmit }
}