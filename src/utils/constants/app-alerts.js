import { showMessage, hideMessage } from "react-native-flash-message";
import { fonts } from ".";

const showErrorToast = (title,message) => {
  return showMessage({
    message: title ?title:"Success",
    description: message,
    type: "danger",
    textStyle:{fontFamily:fonts.OpenSans400},
    titleStyle:{fontFamily:fonts.OpenSans600}
  });
};
const showSuccessToast = (title,message) => {
  return showMessage({
    message: title ?title:"",
    description: message,
    type: "success",
    textStyle:{fontFamily:fonts.OpenSans400},
    titleStyle:{fontFamily:fonts.OpenSans600}
  });
};
const showWarningToast = (title,message) => {
  return showMessage({
    message: title ?title:"",
    description: message,
    type: "warning",
    textStyle:{fontFamily:fonts.OpenSans400},
    titleStyle:{fontFamily:fonts.OpenSans600}
  });
};


export {showErrorToast, showSuccessToast,showWarningToast};
