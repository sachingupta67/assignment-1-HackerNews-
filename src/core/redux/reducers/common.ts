import { constants } from "../contants";
const { LOADING, RESULT, GET_PROFILE_INFO, SEARCH_RESULT } = constants;
interface IState {
  isLoading: boolean;
  result: Array<object>;
}

interface Action {
  type: string;
  payload: object;
  profile: object;
}

const iState = {
  isLoading: false,
  result: [],
  profile: {},
  search: [],
};
const common = (state: IState = iState, action: Action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case RESULT:
      return {
        ...state,
        result: action.payload,
      };
    case GET_PROFILE_INFO:
      return {
        ...state,
        profile: action.payload,
      };
    case SEARCH_RESULT:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
export default common;
