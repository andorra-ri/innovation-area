import { createSlice } from '@reduxjs/toolkit'
// ######## ##    ## ########  ########  ######
//    ##     ##  ##  ##     ## ##       ##    ##
//    ##      ####   ##     ## ##       ##
//    ##       ##    ########  ######    ######
//    ##       ##    ##        ##             ##
//    ##       ##    ##        ##       ##    ##
//    ##       ##    ##        ########  ######
export namespace AppTypes {
  export enum Actions {
    SHOW_LOADING = 'SHOW_LOADING',
    HIDE_LOADING = 'HIDE_LOADING'
  }

  export const ReducerKey = 'app'

  export interface InitialState {
    loading: boolean,
  }
}

export const initialState: AppTypes.InitialState = {
  loading: false,
}

export const appSlice = createSlice({
  name: AppTypes.ReducerKey,
  initialState,
  reducers: {
    [AppTypes.Actions.SHOW_LOADING]: (state) => {
      state.loading = true
    },
    [AppTypes.Actions.HIDE_LOADING]: (state) => {
      state.loading = false
    },
  }
})

export default appSlice.reducer