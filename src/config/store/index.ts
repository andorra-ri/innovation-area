import { configureStore, ThunkAction, Action, AnyAction, Reducer } from '@reduxjs/toolkit'
// import createSagaMiddleware from 'redux-saga'
import persistStore from 'redux-persist/es/persistStore'
import rootReducer, { ReduxState } from 'config/reducers/index'

// const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer as Reducer<ReduxState, AnyAction>,
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: false
    // })
    //   .prepend(sagaMiddleware)
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const persistor = persistStore(store, undefined, () => {
  store.getState()
})
