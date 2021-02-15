import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
    getCountries,
    setCountry,
    getSubdivisions,
    setSubdivision,
    getShippingOptions,
    setShippingOption,
    setShippingData
} from '../store/actions/shippingActions';
import { changeStep, resetToken, getTocken } from '../store/actions/shopActions';

export const useShoppingForm = () => {
        
    const methods = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const { checkoutToken, cart } = useSelector((state: RootState) => state.shop);
    const  {  countries, country, subdivisions, subdivision, options, option } = useSelector((state: RootState) => state.shipping);

    useEffect(() => {
        if(!checkoutToken.id){
            dispatch(getTocken(cart.id))
        }
    })

    useEffect(() => {
        if(checkoutToken.id){
            dispatch(getCountries(checkoutToken.id));
        }
        // eslint-disable-next-line
    },[checkoutToken.id]);

    useEffect(() => {
        if(country){
            dispatch(getSubdivisions(country));
        }
        // eslint-disable-next-line
    },[country]);

    useEffect(() => {
        if(subdivision && checkoutToken.id){
            dispatch(getShippingOptions(checkoutToken.id, country, subdivision));
        }
        // eslint-disable-next-line
    },[subdivision]);


    const selectCountry = (optionId: any) => {
        dispatch(setCountry(optionId));
    }

    const selectSubdivision = (optionId: any) => {
        dispatch(setSubdivision(optionId));
    }

    const selectShippingOptions = (optionId: any) => {
        dispatch(setShippingOption(optionId));
    }

    const goToCheckout = (data: any) => {
        dispatch(setShippingData({ ...data, country, subdivision, option }));
        dispatch(changeStep(1));
    }

    const backToCart = () => {
        history.push('/cart')
        dispatch(resetToken());
    }

    return { methods, countries, country, subdivisions, subdivision, options, option,
        selectCountry, selectSubdivision, selectShippingOptions, goToCheckout, backToCart }
}