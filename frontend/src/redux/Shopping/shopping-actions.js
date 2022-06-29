import * as actionTypes from './shopping-types'

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART ,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type:actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type:actionTypes.ADJUST_QTY,
        payload: {
            id:itemID,
            qty:value,
        }
        }
    }

export const loadCurrentItem = (item) => {
    return {
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
        }
    }


export const addDimension = (itemID,dimension) => {
    return {
            type: actionTypes.ADD_DIMENSION_ITEM,
            payload: {
                id: itemID,
                dimension:dimension,
            }
        }
    }

export const addSuport = (itemID,support) => {
    return {
            type: actionTypes.ADD_SUPPORT,
            payload: {
                id: itemID,
                support:support,
                }
            }
        }    
    

export const addGravura1 = (itemID,gravura1) => {
    return {
            type: actionTypes.ADD_GRAVURA_1,
            payload: {
                id: itemID,
                gravura1:gravura1,
                }
            }
            }    
            
export const addGravura2 = (itemID,gravura2) => {
    return {
            type: actionTypes.ADD_GRAVURA_2,
            payload: {
                id: itemID,
                gravura2:gravura2,
                }
            }
        }    
    