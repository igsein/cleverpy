import { SHOW_NAVBAR  } from "../types/types";
import {IShow} from "../interfaces/interfaces"
import { thirdState } from '../store/globalState';
import {ActionsNavbar } from "../types/ActionsTypes"


export default function loginReducer( state: IShow = thirdState, action: ActionsNavbar ) {
  switch (action.type) {
    case SHOW_NAVBAR:
      return { ...state, show: action.payload };

    default:
      return state;
  }
}
