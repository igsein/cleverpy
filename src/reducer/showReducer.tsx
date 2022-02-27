import { SHOW_NAVBAR  } from "../types/types";
import {IShow} from "../interfaces/interfaces"
import { globalState } from '../store/globalState';
import {ActionsNavbar } from "../types/ActionsTypes"


export default function loginReducer( state: IShow = globalState, action: ActionsNavbar ) {
  switch (action.type) {
    case SHOW_NAVBAR:
      return { ...state, show: action.payload };

    default:
      return state;
  }
}
