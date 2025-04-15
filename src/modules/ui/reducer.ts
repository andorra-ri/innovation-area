import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// ######## ##    ## ########  ########  ######
//    ##     ##  ##  ##     ## ##       ##    ##
//    ##      ####   ##     ## ##       ##
//    ##       ##    ########  ######    ######
//    ##       ##    ##        ##             ##
//    ##       ##    ##        ##       ##    ##
//    ##       ##    ##        ########  ######
export namespace ModalTypes {
  export enum Actions {
    OPEN_MODAL = 'OPEN_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL',

    SHOW_LOADING = 'SHOW_LOADING',
    HIDE_LOADING = 'HIDE_LOADING'
  }

  export const ReducerKey = 'modal'

  export interface InitialState {
    openModals: string[],
    metadata: any
  }
  
  export type ModalParams = Params & Metadata
  export type Params = {
    name: string
  }

  export type Metadata = {metadata?: {}}

  // export type SuccessCallback = {
  //   onSuccess?: () => void // Función que se ejecutará en caso de éxito
  // }

}

export const initialState: ModalTypes.InitialState = {
  openModals: [],
  metadata: {}
}

export const modalSlice = createSlice({
  name: ModalTypes.ReducerKey,
  initialState,
  reducers: {
    [ModalTypes.Actions.OPEN_MODAL]: (state, action: PayloadAction<ModalTypes.ModalParams>) => {
      debugger
      state.openModals.push(action.payload.name)
      if (action.payload.metadata) state.metadata = action.payload.metadata
    },
    [ModalTypes.Actions.CLOSE_MODAL]: (state, action: PayloadAction<ModalTypes.ModalParams>) => {
      state.openModals = state.openModals.filter((x) => x !== action?.payload.name)
    }
  }
})

export default modalSlice.reducer