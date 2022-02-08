import { toast } from "react-toastify";

export const showSuccessToast = (msg = "Successful") => toast.success(msg, {});

export const showErrorToast = (msg = "Something wrong happended.") =>
  toast.error(msg, {});
