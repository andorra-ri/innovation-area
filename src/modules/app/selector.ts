import { RootState } from "config/store"
import { AppTypes } from './reducer'

export const selectLoading = (state: RootState) => state[AppTypes.ReducerKey].loading