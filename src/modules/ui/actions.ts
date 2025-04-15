import { modalSlice } from './reducer'

const {
    OPEN_MODAL,
    CLOSE_MODAL
} = modalSlice.actions

export const ModalAction = {
    openModal: OPEN_MODAL,
    closeModal: CLOSE_MODAL
}