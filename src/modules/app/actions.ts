import { appSlice } from './reducer'

const {
    SHOW_LOADING,
    HIDE_LOADING
} = appSlice.actions

export const AppAction = {
    showLoading: SHOW_LOADING,
    hideLoading: HIDE_LOADING
}