import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchseInit = (state, action) => {
    return updateObject (state, { purchased: false });
};

const purchseBurgerStart = (state, action) => {
    return (state, { loading: true });
};

const purchseBurgerSuccess = (state, action) => {
    const newOrder = updateObject (action.orderData, { id: action.orderId });
    return updateObject(state, { 
        loading: false, 
        purchased: true, 
        orders: state.orders.concat(newOrder) });
};

const purchseBurgerFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const fetchOrdersStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, { orders: action.orders, loading: false });
};

const fetchOrdersFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return purchseBurgerFail(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
        default: return state;
    }
};

export default reducer;