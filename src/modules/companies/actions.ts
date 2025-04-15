import { mapSlice } from './reducer'

const {
    FILTER_DATA,
    CLEAR_DATA,
} = mapSlice.actions

export const CompaniesAction = {
    filterData: FILTER_DATA,
    clearData: CLEAR_DATA
}