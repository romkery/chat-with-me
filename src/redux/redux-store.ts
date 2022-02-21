import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';

const rootReducer = combineReducers({});

type RootReducerType = typeof rootReducer; // (global state: GLOBALSTATE) => GLOBALSTATE

export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, any, A>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.__store__ = store;

export default store;