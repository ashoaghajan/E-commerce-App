import { emptyToken } from '../../global/globalVariables';
const initState = {
    products: [],
    cart: {
        id: '',
        total_items: 0,
        total_unique_items: 0,
        line_items: [],
        subtotal: {
            formatted_with_symbol: ''
        }
    },
    checkoutToken: emptyToken,
    activeStep: 0
}

export const shopReducer = (state: ShopState = initState, action: Action) => {
    switch(action.type){
        case 'GET_PRODUCTS':
            return{
                ...state,
                products: action.data
            }
        case 'GET_CART':   
            return{
                ...state,
                cart: action.data
            }
        case 'SET_CART':    
            return{
                ...state,
                cart: action.data
            }  
        case 'SET_TOCKEN':    
            return{
                ...state,
                checkoutToken: action.data
            } 
        case 'SET_ACTIVE_STEP':    
            return{
                ...state,
                activeStep: action.data
            } 
        default:
            return state      
    }
}