import { RootState } from "config/store"
import { CompaniesTypes } from './reducer'

export const selecFilteredData = (state: RootState) => state[CompaniesTypes.ReducerKey].dataFiltered
