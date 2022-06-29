import * as actionTypes from "./shopping-types";
import shopItemsData from "../../data/dataProduct"


const INITIAL_STATE = {
    products: shopItemsData,
    cart:[],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case actionTypes.ADD_TO_CART:
        const item = state.products.find((prod) => prod.id === action.payload.id);
        const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
        );
        return {
        ...state,
        cart: inCart
            ? state.cart.map((item) =>
                item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
            : [...state.cart, { ...item, qty: 1 }],
        };

    case actionTypes.REMOVE_FROM_CART:
        return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        };

    case actionTypes.ADJUST_QTY:
        return {
        ...state,
        cart: state.cart.map((item) =>
            item.id === action.payload.id
            ? { ...item, qty:  + action.payload.qty }
            : item
        ),
        };
    case actionTypes.LOAD_CURRENT_ITEM:
        return {
            ...state,
            currentItem: action.payload,
        };
    case actionTypes.ADD_DIMENSION_ITEM:
        console.log(action.payload.dimension)
    return {
        ...state,
        cart: state.cart.map((item) =>
            item.id === action.payload.id
            ? { ...item, dimension: `${action.payload.dimension}` }
            : item
        ),
        }
        case actionTypes.ADD_SUPPORT:
    return {
        ...state,
        cart: state.cart.map((item) =>
            item.id === action.payload.id
            ? { ...item, support: `${action.payload.support}` }
            : item
        ),
        }
    default:
        return state;}
};

export default shopReducer;
