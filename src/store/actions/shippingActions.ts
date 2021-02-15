import { commerce } from '../../lib/commerce';
import { emptyOrder } from '../../global/globalVariables';
import { refreshCart, resetToken } from './shopActions';

export  const getCountries = (checkoutTokenId: string) => async(dispatch: Dispatch) => {
    try{
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        const countryList = Object.entries(countries).map(([code, name]) => ({ id: code, label: name }));

        dispatch({ type: 'SET_COUNTRIES', data: countryList});
        dispatch({ type: 'SET_COUNTRY', data: Object.keys(countries)[0]});
    }
    catch(err){
        console.log(err.message);
    }
}

export  const setCountry = (countryId: string) => (dispatch: Dispatch) => {
    dispatch({ type: 'SET_COUNTRY', data: countryId});
}


export  const getSubdivisions = (countryCode: string) => async(dispatch: Dispatch) => {
    try{
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
        const countryList = Object.entries(subdivisions).map(([code, name]) => ({ id: code, label: name }));

        dispatch({ type: 'SET_SUBDIVISIONS', data: countryList});
        dispatch({ type: 'SET_SUBDIVISION', data: Object.keys(subdivisions)[0]});
    }
    catch(err){
        console.log(err.message);
    }
}

export  const setSubdivision = (subdivisionId: string) => (dispatch: Dispatch) => {
    dispatch({ type: 'SET_SUBDIVISION', data: subdivisionId});
}


export const getShippingOptions = (checkoutTokenId: string, country: string, region: string = '') => async(dispatch: Dispatch) => {
    try{
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });
        const optionsList = options.map((option: ShippingOptionItem) => (
            { id: option.id, label: `${option.description} - (${option.price.formatted_with_symbol})` }
        ));

        optionsList.length && dispatch({ type: 'SET_OPTIONS', data: optionsList});
        options.length && dispatch({ type: 'SET_OPTION', data: options[0].id ? options[0].id : 'ship_0YnEoqWj6le7P6' });
    }
    catch(err){
        console.log(err.message);
    }
}

export  const setShippingOption = (optionId: string) => (dispatch: Dispatch) => {
    dispatch({ type: 'SET_OPTION', data: optionId});
}

export  const setShippingData = (data: any) => (dispatch: Dispatch) => {
    dispatch({ type: 'SET_SHIPPING_DATA', data: data});
}

export const captureCheckout = (checkoutTokenId: string, newOder: any, makeDispatch: Function) => async(dispatch: Dispatch) => {
    try{
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOder);
        makeDispatch(refreshCart());
        makeDispatch(resetToken());
        dispatch({ type: 'SET_ORDER', data: incomingOrder});
    }
    catch(err){
        dispatch({ type: 'SET_ERROR', data: err.data.error.message});
        console.log(err.message);
    }
}

export const resetOrder = () => (dispatch: Dispatch) => {
    dispatch({ type: 'SET_ORDER', data: emptyOrder});
    dispatch({ type: 'SET_ERROR', data: ''});
}