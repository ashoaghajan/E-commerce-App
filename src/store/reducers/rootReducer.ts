import { combineReducers } from 'redux';
import { shopReducer } from './shopReducer';
import { shippingReducer } from './shippingReducer';

export const rootReducer = combineReducers({
    shop: shopReducer,
    shipping: shippingReducer
})