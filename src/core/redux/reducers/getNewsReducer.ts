import { constants } from "../contants";
const { SHOW_NEWS, ASK_NEWS, TOP_NEWS, JOB_NEWS } = constants;
interface IState {
  topNews: Array<object>;
  askNews: Array<object>;
  showNews: Array<object>;
  jobNews: Array<object>;
}

interface Action {
  type: string;
  payload: object;
}

const iState = {
  showNews: [],
  askNews: [],
  topNews: [],
  jobNews: [],
};
const getNewsReducer = (state: IState = iState, action: Action) => {
  switch (action.type) {
    case SHOW_NEWS:
      return {
        ...state,
        showNews: action.payload,
      };
    case ASK_NEWS:
      return {
        ...state,
        askNews: action.payload,
      };
    case TOP_NEWS:
      return {
        ...state,
        topNews: action.payload,
      };
    case JOB_NEWS:
      return {
        ...state,
        jobNews: action.payload,
      };
    default:
      return state;
  }
};
export default getNewsReducer;
