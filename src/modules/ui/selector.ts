import { RootState } from "config/store"
import { ModalTypes } from './reducer'

export const selectCurrentMetadata = (state: RootState) => state[ModalTypes.ReducerKey].metadata
export const selectOpenModal = (state: RootState, name: string) => state[ModalTypes.ReducerKey].openModals.includes(name)