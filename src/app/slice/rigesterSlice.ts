//liberaries
import axios from "axios";
import router from "next/router";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

//components
import {
  showSuccessToast,
  showErrorToast,
} from "../../components/common/toast";

//reduxStore
import type { AppState } from "../store";
import { AnyPtrRecord } from "dns";
import { data } from "autoprefixer";

export interface RigesterState {
  startDate: any;
  username: string;
  password: string;

  confirmPassword: string;
  showErrorUserNameStatus: boolean;
  showErrorPasswordStatus: boolean;
}

const initialState: RigesterState = {
  startDate: "",
  username: "",
  password: "",
  confirmPassword: "",
  showErrorUserNameStatus: false,
  showErrorPasswordStatus: false,
};

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

export const rigesterSlice = createSlice({
  name: "rigester",
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<any>) => {
      state.startDate = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },

    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    setShowErrorUserNameStatus: (state, action: PayloadAction<boolean>) => {
      state.showErrorUserNameStatus = action.payload;
    },
    setShowErrorPasswordStatus: (state, action: PayloadAction<boolean>) => {
      state.showErrorPasswordStatus = action.payload;
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
});

export const {
  setStartDate,
  hardReset,
  setUsername,
  setPassword,
  setShowErrorUserNameStatus,
  setShowErrorPasswordStatus,
  setConfirmPassword,
} = rigesterSlice.actions;

export const selectDataUser = (state: AppState) => state.rigester.startDate;
export const selectUsername = (state: AppState) => state.rigester.username;
export const selectPassword = (state: AppState) => state.rigester.password;
export const selectConfirmPassword = (state: AppState) =>
  state.rigester.confirmPassword;

export const selectShowErrorUserNameStatus = (state: AppState) =>
  state.rigester.showErrorUserNameStatus;
export const selectShowErrorPasswordStatus = (state: AppState) =>
  state.rigester.showErrorPasswordStatus;

export default rigesterSlice.reducer;
