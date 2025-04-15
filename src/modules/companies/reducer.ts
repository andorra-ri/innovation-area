import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { COMPANIES_MODULE } from 'models/companies'
import { COMPANIES } from 'resources/companies'

// ######## ##    ## ########  ########  ######
//    ##     ##  ##  ##     ## ##       ##    ##
//    ##      ####   ##     ## ##       ##
//    ##       ##    ########  ######    ######
//    ##       ##    ##        ##             ##
//    ##       ##    ##        ##       ##    ##
//    ##       ##    ##        ########  ######
export namespace CompaniesTypes {
  export enum Actions {
    FILTER_DATA = 'FILTER_DATA',
    CLEAR_DATA = 'CLEAR_DATA',
  }

  export const ReducerKey = 'companies'

  export interface InitialState {
    data: any //TODO: SerraCarles-Create tipos
    dataFiltered?: any
  }

  export type filterData = {
    sector?: COMPANIES_MODULE.SECTOR[],
    location?: COMPANIES_MODULE.LOCATION[],
    type?: COMPANIES_MODULE.TYPE[]
  }
}

export const initialState: CompaniesTypes.InitialState = {
  data: COMPANIES.COMPANIES_DATA,
  dataFiltered: COMPANIES.COMPANIES_DATA
}

export const mapSlice = createSlice({
  name: CompaniesTypes.ReducerKey,
  initialState,
  reducers: {
    [CompaniesTypes.Actions.FILTER_DATA]: (state, action: PayloadAction<CompaniesTypes.filterData>) => {
      state.dataFiltered = state.data

      if(action.payload.sector) {
        state.dataFiltered = state.dataFiltered.filter((company: any) => action.payload.sector?.includes(company.sector) )
      }
      if(action.payload.location){
        state.dataFiltered = state.dataFiltered.filter((company: any) => action.payload.location?.includes(company.address.zipCode))
      }
      if(action.payload.type) {
        state.dataFiltered = state.dataFiltered.filter((company: any) => action.payload.type?.includes(company.type))
      }
    },
    [CompaniesTypes.Actions.CLEAR_DATA]: (state) => {
      state.dataFiltered = state.data
    }
  }
})

export default mapSlice.reducer