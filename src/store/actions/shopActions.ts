import { commerce } from '../../lib/commerce';
import { emptyToken } from '../../global/globalVariables';


export const getProducts = () => async(dispatch: Dispatch) => {
    try{
        const { data } = await commerce.products.list();
        dispatch({ type:'GET_PRODUCTS', data });
    }
    catch(err){
        console.log(err.message);
    }
  }

export const getCart = () => async(dispatch: Dispatch) => {
    try{
        const cart = await commerce.cart.retrieve();
        dispatch({ type:'GET_CART', data: cart });
    }
    catch(err){
        console.log(err.message);
    }
}

export const addToCart = (productId: string, quantity: number) => async(dispatch: Dispatch) => {
    try{
        const { cart } = await commerce.cart.add(productId, quantity);
        dispatch({ type:'SET_CART', data: cart });
    }
    catch(err){
        console.log(err.message);
    }
}

export const updateCartQtw = (productId: string, quantity: number) => async(dispatch: Dispatch) => {
    try{
        const { cart } = await commerce.cart.update(productId, { quantity });
        dispatch({ type:'SET_CART', data: cart });
    }
    catch(err){
        console.log(err.message);
    }
}

export const removeFromCart = (productId: string) => async(dispatch: Dispatch) => {
    try{
        const { cart } = await commerce.cart.remove(productId);
        dispatch({ type:'SET_CART', data: cart });
    }
    catch(err){
        console.log(err.message);
    }
}

export const emptyTheCart = () => async(dispatch: Dispatch) => {
    try{
        const { cart } = await commerce.cart.empty();
        dispatch({ type:'SET_CART', data: cart });
    }
    catch(err){
        console.log(err.message);
    }
}

export const refreshCart = () => async(dispatch: Dispatch) => {
    try{
        const cart = await commerce.cart.refresh();
        dispatch({ type:'SET_CART', data: cart });
    }
    catch(err){
        console.log(err.message);
    }
}

export const getTocken = (cartId: string) => async(dispatch: Dispatch) => {
    try{
        const tocken = await commerce.checkout.generateToken(cartId, { type: 'cart' });
        dispatch({ type:'SET_TOCKEN', data: tocken });
    }
    catch(err){
        console.log(err.message);
    }
}

export const resetToken = () => (dispatch: Dispatch) => {
    dispatch({ type:'SET_TOCKEN', data: emptyToken });
}

export const changeStep = (step: number) => (dispatch: Dispatch) => {
    dispatch({ type:'SET_ACTIVE_STEP', data: step });
}