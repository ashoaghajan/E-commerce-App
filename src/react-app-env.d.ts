/// <reference types="react-scripts" />

// Shop Types
type Product =  {
    id: string;
    name: string;
    description: string;
    price: {
        formatted_with_symbol: string
    };
    media: {
        source: string
    }
}

type CartItem =  {
    id: string;
    name: string;
    quantity: number
    price: {
        formatted_with_symbol: string
    };
    line_total:{
        formatted_with_symbol: string
    }
    media: {
        source: string
    }
}

type Cart = {
    id: string,
    total_items: number,
    total_unique_items: number,
    line_items: CartItem[],
    subtotal: {
        formatted_with_symbol: string 
    }
}

type ShopState = {
    products: Product[],
    cart: Cart,
    checkoutToken: {
        id: string,
        live: {
            line_items: CartItem[],
            subtotal: {
                formatted_with_symbol: string 
            }
        }
    },
    activeStep: number
}

type ShopActions = {
    type: 'GET_PRODUCTS',
    data: Product[]
} | {
    type: 'GET_CART',
    data: Cart
} | {
    type: 'SET_CART',
    data: Cart
} | {
    type: 'SET_TOCKEN'
    data: any
} | {
    type: 'SET_ACTIVE_STEP',
    data: number
}


// FormTypes

type OptionItem = {
    id: string,
    label: any
}

type ShippingOptionItem = {
    id: string,
    description: string
    price: {
        formatted_with_symbol: string 
    }
}

type ShippingData = {
    firstName: string,
    lastName: string,
    address1: string,
    email: string,
    city: string,
    zip: string,
    country: string, 
    subdivision: string, 
    option: string
}

type Order = {
    customer_reference: string
    customer:{
        firstname: string,
        lastname: string
    }
}

type ShippingState = {
    countries: OptionItem[],
    country: string,
    subdivisions: OptionItem[],
    subdivision: string,
    options: OptionItem[],
    option: string,
    shippingData: ShippingData,
    order: Order,
    error: string
}

type ShippingActions = {
    type: 'SET_COUNTRIES',
    data: OptionItem[]
} | {
    type: 'SET_COUNTRY',
    data: string
} | {
    type: 'SET_SUBDIVISIONS',
    data: OptionItem[]
} | {
    type: 'SET_SUBDIVISION'
    data: string
} | {
    type: 'SET_OPTIONS',
    data: OptionItem[],
} | {
    type: 'SET_OPTION'
    data: string
} | {
    type: 'SET_SHIPPING_DATA'
    data: ShippingData
} | {
    type: 'SET_ORDER',
    data: any
} | {
    type: 'SET_ERROR',
    data: string
}


// Global Types
type RootState = {
    shop: ShopState,
    shipping: ShippingState
}

type Action = ShopActions | ShippingActions

type Dispatch = (action: Action) => any
