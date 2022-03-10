//liberaries
import axios from 'axios'
import router from 'next/router'
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

//components
import { showSuccessToast, showErrorToast } from '../../components/common/toast'

//reduxStore
import type { AppState } from '../store'
import { AnyPtrRecord } from 'dns'
import { data } from 'autoprefixer'

export interface CommonState {
  namePage: any
  firstname: any
  lastname: string
  number: string
  email: string
  carts: any
  showDrawer: boolean
  common: string
  news: string
  scroll: number
  treeMapRequestResult: { status: string; data: any; error: any }
}

const initialState: CommonState = {
  namePage: '',
  firstname: '',
  lastname: '',
  number: '',
  email: '',
  carts: '',
  showDrawer: false,
  common: '',
  news: '',
  scroll: 0,
  treeMapRequestResult: { status: 'idel', data: null, error: null },
}

// async reducers
export const treeMap = createAsyncThunk(
  'common/treeMap',
  async (user, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await axios({
        method: 'get',
        url: `http://65.21.255.228/api/heatmap/`,

        headers: { accept: '*/*', 'Content-Type': 'application/json' },
      })
      if (response.status == 200) {
        return fulfillWithValue(response.data)
      }
      return rejectWithValue(response.data)
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setNamePage: (state, action: PayloadAction<string>) => {
      state.namePage = action.payload
    },
    setFirstname: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload
    },
    setLastname: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload
    },
    setNumber: (state, action: PayloadAction<string>) => {
      state.number = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setCarts: (state, action: PayloadAction<string>) => {
      state.carts = action.payload
    },
    setShowDrawer: (state, action: PayloadAction<boolean>) => {
      state.showDrawer = action.payload
    },
    setProfile: (state, action: PayloadAction<string>) => {
      state.common = action.payload
    },
    setNews: (state, action: PayloadAction<string>) => {
      state.news = action.payload
    },
    setScroll: (state, action: PayloadAction<number>) => {
      state.scroll = action.payload
    },

    hardReset: () => initialState,
  },
  extraReducers: {
    [treeMap.pending.type]: (state, action) => {
      // getPreDataRequestIsPending();
      state.treeMapRequestResult = {
        status: 'pending',
        data: null,
        error: null,
      }
    },
    [treeMap.fulfilled.type]: (state, action) => {
      // getPreDataWasSuccessfull();
      state.treeMapRequestResult = {
        status: 'fulfilled',
        data: action.payload,
        error: null,
      }
    },
    [treeMap.rejected.type]: (state, action) => {
      // getPreDataRequestHasError(action.error.message);
      state.treeMapRequestResult = {
        status: 'rejected',
        data: null,
        error: action.error,
      }
    },
  },
})

export const {
  setEmail,
  setFirstname,
  setLastname,
  setNumber,
  setCarts,
  setShowDrawer,
  setNews,
  setProfile,
  setScroll,
  setNamePage,
} = commonSlice.actions

export const selectNamePage = (state: AppState) => state.common.namePage
export const selectEmail = (state: AppState) => state.common.email
export const selectFirstname = (state: AppState) => state.common.firstname
export const selectLastname = (state: AppState) => state.common.lastname
export const selectNumber = (state: AppState) => state.common.number
export const selectCarts = (state: AppState) => state.common.carts
export const selectShowDrawer = (state: AppState) => state.common.showDrawer
export const selectNews = (state: AppState) => state.common.news
export const selectProfile = (state: AppState) => state.common.common
export const selectScroll = (state: AppState) => state.common.scroll
export const selectTreeMapRequestResult = (state: AppState) =>
  state.common.treeMapRequestResult

export default commonSlice.reducer
