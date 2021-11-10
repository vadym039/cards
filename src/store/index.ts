import { combineReducers, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import ErrorHandlerReducer from "./ErrorHandlerReducer";

const appReducer = combineReducers({
  error: ErrorHandlerReducer.reducer
})

const rootReducer = (state: any, action: PayloadAction<string>) => {
  if ('logout' === action.type) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export default store
