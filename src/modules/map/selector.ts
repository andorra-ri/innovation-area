import { RootState } from "config/store"
import { MapTypes } from './reducer'

export const isMapLoading = (state: RootState) => state[MapTypes.ReducerKey].isLoading
export const selectMapLayer = (state: RootState) => state[MapTypes.ReducerKey].mapLayer

export const selectIsDark = (state: RootState) => state[MapTypes.ReducerKey].isDark
