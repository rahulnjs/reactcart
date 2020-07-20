import { ShowTaostAction } from "../types";
import { ACTION } from "./constants";


const toast = {
    show: false,
    text: ''
};

export const ToastReducer = (state = toast, action: ShowTaostAction) => {
    switch(action.type) {
        case ACTION.SHOW_TOAST: 
            return {
                show: true,
                text: action.config.text
            };
        case ACTION.HIDE_TOAST:
            return {
                ...state,
                show: false,
            };
        default:
            return state;
    }
}