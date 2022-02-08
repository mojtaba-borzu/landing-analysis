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

export interface ForgetPasswordState {
  startDate: any;
  username: string;
  password: string;
  newPassword: string;
  confirmNewPassword: string;
  confirmPassword: string;
  showErrorUserNameStatus: boolean;
  showErrorPasswordStatus: boolean;
  step: number;
}

const initialState: ForgetPasswordState = {
  startDate: "",
  username: "",
  password: "",
  newPassword: "",
  confirmNewPassword: "",
  confirmPassword: "",
  showErrorUserNameStatus: false,
  showErrorPasswordStatus: false,
  step: 1,
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

export const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
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
    setNewPassword: (state, action: PayloadAction<string>) => {
      state.newPassword = action.payload;
    },
    setConfirmNewPassword: (state, action: PayloadAction<string>) => {
      state.confirmNewPassword = action.payload;
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
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
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
  setStep,
  setPassword,
  setShowErrorUserNameStatus,
  setShowErrorPasswordStatus,
  setConfirmPassword,
  setConfirmNewPassword,
  setNewPassword,
} = forgetPasswordSlice.actions;

export const selectDataUser = (state: AppState) =>
  state.forgetPassword.startDate;
export const selectStep = (state: AppState) => state.forgetPassword.step;
export const selectUsername = (state: AppState) =>
  state.forgetPassword.username;
export const selectPassword = (state: AppState) =>
  state.forgetPassword.password;
export const selectConfirmPassword = (state: AppState) =>
  state.forgetPassword.confirmPassword;

export const selectShowErrorUserNameStatus = (state: AppState) =>
  state.forgetPassword.showErrorUserNameStatus;
export const selectShowErrorPasswordStatus = (state: AppState) =>
  state.forgetPassword.showErrorPasswordStatus;
export const selectNewPassword = (state: AppState) =>
  state.forgetPassword.newPassword;
export const selectConfirmNewPassword = (state: AppState) =>
  state.forgetPassword.confirmNewPassword;

export default forgetPasswordSlice.reducer;
