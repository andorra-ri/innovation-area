import { persistCombineReducers } from 'redux-persist'
import { AnyAction } from 'redux'
import storage from 'redux-persist/lib/storage'
import { createWhitelistFilter } from 'redux-persist-transform-filter'
import { Reducer } from "react";

import modalReducer, { ModalTypes } from 'modules/ui/reducer'
import appReducer, { AppTypes } from 'modules/app/reducer'
import mapReducer, { MapTypes } from 'modules/map/reducer'
import companiesReducer, { CompaniesTypes } from 'modules/companies/reducer'

const config = {
    key: 'root',
    storage,
    whitelist: [],
    transforms: [
        createWhitelistFilter('modals'),
        // createWhitelistFilter(),
        // createWhitelistFilter(),
      ],
  }

export interface ReduxState {
  [ModalTypes.ReducerKey]: ModalTypes.InitialState,
  [AppTypes.ReducerKey]: AppTypes.InitialState,
  [MapTypes.ReducerKey]: MapTypes.InitialState,
  [CompaniesTypes.ReducerKey]: CompaniesTypes.InitialState
}

const rootReducer: Reducer<ReduxState, AnyAction> = persistCombineReducers( config, {
  [ModalTypes.ReducerKey]: modalReducer,
  [AppTypes.ReducerKey]: appReducer,
  [MapTypes.ReducerKey]: mapReducer,
  [CompaniesTypes.ReducerKey]: companiesReducer
})

export default rootReducer