import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MAP_MODULE } from 'models/map'
// ######## ##    ## ########  ########  ######
//    ##     ##  ##  ##     ## ##       ##    ##
//    ##      ####   ##     ## ##       ##
//    ##       ##    ########  ######    ######
//    ##       ##    ##        ##             ##
//    ##       ##    ##        ##       ##    ##
//    ##       ##    ##        ########  ######
export namespace MapTypes {
  export enum Actions {
    SET_LOADING_TRUE = 'SET_LOADING_TRUE',
    SET_LOADING_FALSE = 'SET_LOADING_FALSE',
    MAP_LAYER = 'MAP_LAYER',

    CHANGE_MAP_LIGHT = 'CHANGE_MAP_LIGHT',
    CHANGE_MAP_LAYER = 'CHANGE_MAP_LAYER',
  }

  export const ReducerKey = 'map'

  export interface InitialState {
    isLoading: boolean
    mapLayer: {
      [MAP_MODULE.LAYERS_TYPES.CIRCLE]: boolean,
      [MAP_MODULE.LAYERS_TYPES.HEATMAP]: boolean,
    }

    isDark: boolean
  }

  export type changeMapLayer = {
    [MAP_MODULE.LAYERS_TYPES.CIRCLE]: boolean,
    [MAP_MODULE.LAYERS_TYPES.HEATMAP]: boolean,
  }
}

export const initialState: MapTypes.InitialState = {
  isLoading: true,
  mapLayer: {
    [MAP_MODULE.LAYERS_TYPES.CIRCLE]: true,
    [MAP_MODULE.LAYERS_TYPES.HEATMAP]: false 
  },

  isDark: false,

}

export const mapSlice = createSlice({
  name: MapTypes.ReducerKey,
  initialState,
  reducers: {
    [MapTypes.Actions.SET_LOADING_TRUE]: (state) => {
      state.isLoading = true
    },
    [MapTypes.Actions.SET_LOADING_FALSE]: (state) => {
      state.isLoading = false
    },
    [MapTypes.Actions.MAP_LAYER]: (state, action: PayloadAction<MapTypes.changeMapLayer>)  => {
      state.mapLayer = action.payload
    },
    [MapTypes.Actions.CHANGE_MAP_LIGHT]: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload
    }
  }
})

export default mapSlice.reducer



