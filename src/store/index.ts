import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ErrorHandlerReducer from "./ErrorHandlerReducer";

const appReducer = combineReducers({
  error: ErrorHandlerReducer.reducer
})

const rootReducer = (state, action) => {
  if ('logout' === action.type) {
    state = undefined
  }
  return appReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer
})
export type RootState = ReturnType<typeof store.getState>

export default store
