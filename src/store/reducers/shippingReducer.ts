import { emptyOrder } from '../../global/globalVariables';
const initState = {
    countries: [],
    country: '',
    subdivisions: [],
    subdivision: '',
    options: [],
    option: '',
    shippingData: {
        firstName: '',
        lastName: '',
        address1: '',
        email: '',
        city: '',
        zip: '',
        country: '', 
        subdivision: '', 
        option: ''
    },
    order: emptyOrder,
    error: ''
}

export const shippingReducer = (state: ShippingState = initState, action: Action) => {
    switch(action.type){
        case 'SET_COUNTRIES':
            return{
                ...state,
                countries: action.data
            }
        case 'SET_COUNTRY':   
            return{
                ...state,
                country: action.data
            }
        case 'SET_SUBDIVISIONS':
            return{
                ...state,
                subdivisions: action.data
            }
        case 'SET_SUBDIVISION':   
            return{
                ...state,
                subdivision: action.data
            }
        case 'SET_OPTIONS':
            return{
                ...state,
                options: action.data
            }
        case 'SET_OPTION':   
            return{
                ...state,
                option: action.data
            }
        case 'SET_SHIPPING_DATA':   
            return{
                ...state,
                shippingData: action.data
            }
        case 'SET_ORDER':   
            return{
                ...state,
                order: action.data
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.data
            }    
        default:
            return state      
    }
}