import { CHECK_USER, SAVE_USER  } from '../types/types';
import { secondState } from "../store/globalState";
import {ILogin} from "../interfaces/interfaces"
import { TActionReducer } from '../types/types';


export default function loginReducer(state: ILogin = secondState, action: TActionReducer): ILogin {
  switch (action.type) {
    case CHECK_USER:
      return { ...state, loguedUser: action.payload };
    case SAVE_USER:
      return { ...state, loguedUser: action.payload };

    default:
      return state;
  }
}
