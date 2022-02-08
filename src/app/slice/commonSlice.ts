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
}

//async reducers
// export const portfoliTtracker = createAsyncThunk(
//   "wallet/portfoliTtracker",
//   async (
//     {
//       dataUser,
//       startDate,
//       endDate,
//       initialValue,
//     }: { dataUser: any; startDate: any; endDate: any; initialValue: any },
//     { rejectWithValue, fulfillWithValue }
//   ) => {
//     try {
//       const response = await axios({
//         method: "POST",
//         url: `http://65.21.255.228/api/portfolio/portfolio_tracker/`,
//         data: {
//           user_potfolio: dataUser,
//           start_date: `${Number(startDate.year)}-${Number(
//             startDate.month
//           )}-${Number(startDate.day)}`,
//           end_date: `${Number(endDate.year)}-${Number(endDate.month)}-${Number(
//             endDate.day
//           )}`,
//           initial_value: initialValue,
//         },
//         headers: { accept: "*/*", "Content-Type": "application/json" },
//       });
//       if (response.status == 200) {
//         return fulfillWithValue(response.data);
//       }
//       return rejectWithValue(response.data);
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );

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
  // extraReducers: {
  //   // [portfoliTtracker.pending.type]: (state, action) => {
  //   //   // getPreDataRequestIsPending();
  //   //   state.portfoliTtrackerRequestResult = {
  //   //     status: "pending",
  //   //     data: null,
  //   //     error: null,
  //   //   };
  //   // },
  //   // [portfoliTtracker.fulfilled.type]: (state, action) => {
  //   //   // getPreDataWasSuccessfull();
  //   //   state.portfoliTtrackerRequestResult = {
  //   //     status: "fulfilled",
  //   //     data: action.payload,
  //   //     error: null,
  //   //   };
  //   // },
  //   // [portfoliTtracker.rejected.type]: (state, action) => {
  //   //   // getPreDataRequestHasError(action.error.message);
  //   //   state.portfoliTtrackerRequestResult = {
  //   //     status: "rejected",
  //   //     data: null,
  //   //     error: action.error,
  //   //   };
  //   // },

  // },
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

export default commonSlice.reducer
