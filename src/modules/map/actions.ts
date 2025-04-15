import { mapSlice } from './reducer'

const {
    SET_LOADING_TRUE,
    SET_LOADING_FALSE,
    MAP_LAYER,

    CHANGE_MAP_LIGHT,

} = mapSlice.actions

export const MapAction = {
    setLoadingTrue: SET_LOADING_TRUE,
    setLoadingFalse: SET_LOADING_FALSE,
    mapLayer: MAP_LAYER,

    changeMapLight: CHANGE_MAP_LIGHT,
}