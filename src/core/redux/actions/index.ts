import apiClient from "../../apis";
import { endPoints } from "../../apis/endPoints";
import { constants } from "../contants";
const {
  SHOW_STORIES,
  JOBS_STORIES,
  ASK_STORIES,
  TOP_STORIES,
  GET_PROFILE,
} = endPoints;
const { LOADING, RESULT, GET_PROFILE_INFO, SEARCH_RESULT } = constants;

const loadingActions = (payload: boolean) => (dispatch: Function) => {
  dispatch({ type: LOADING, payload });
};

export const getShowNews = () => async (dispatch: Function) => {
  try {
    dispatch(loadingActions(true));
    let res = await apiClient(SHOW_STORIES);
    if (res.data && res.data.length) {
      let temp = [];
      let only10Data = res.data.slice(0, 10);
      for (let ids of only10Data) {
        let news = await apiClient(`/item/${ids}.json`);
        temp.push(news.data);
      }
      dispatch({ type: RESULT, payload: temp });
      dispatch({ type: SEARCH_RESULT, payload: temp });
    }
  } catch (err) {
  } finally {
    dispatch(loadingActions(false));
  }
};

export const getTopNews = () => async (dispatch: Function) => {
  try {
    dispatch(loadingActions(true));
    let res = await apiClient(TOP_STORIES);
    if (res.data && res.data.length) {
      let temp = [];
      let only10Data = res.data.slice(0, 10);
      for (let ids of only10Data) {
        let news = await apiClient(`/item/${ids}.json`);
        temp.push(news.data);
      }
      dispatch({ type: RESULT, payload: temp });
      dispatch({ type: SEARCH_RESULT, payload: temp });
    }
  } catch (err) {
  } finally {
    dispatch(loadingActions(false));
  }
};

export const getAskNews = () => async (dispatch: Function) => {
  try {
    dispatch(loadingActions(true));
    let res = await apiClient(ASK_STORIES);
    if (res.data && res.data.length) {
      let temp = [];
      let only10Data = res.data.slice(0, 10);
      for (let ids of only10Data) {
        let news = await apiClient(`/item/${ids}.json`);
        temp.push(news.data);
      }
      dispatch({ type: RESULT, payload: temp });
      dispatch({ type: SEARCH_RESULT, payload: temp });
    }
  } catch (err) {
  } finally {
    dispatch(loadingActions(false));
  }
};

export const getJobNews = () => async (dispatch: Function) => {
  try {
    dispatch(loadingActions(true));
    let res = await apiClient(JOBS_STORIES);
    if (res.data && res.data.length) {
      let temp = [];
      let only10Data = res.data.slice(0, 10);
      for (let ids of only10Data) {
        let news = await apiClient(`/item/${ids}.json`);
        temp.push(news.data);
      }
      dispatch({ type: RESULT, payload: temp });
      dispatch({ type: SEARCH_RESULT, payload: temp });
    }
  } catch (err) {
  } finally {
    dispatch(loadingActions(false));
  }
};

export const seachFilterAction = (data: Array<object>) => (
  dispatch: Function
) => {
  dispatch({ type: SEARCH_RESULT, payload: data });
};

export const getProfile = (name: string) => async (dispatch: Function) => {
  try {
    dispatch(loadingActions(true));
    let res = await apiClient(`${GET_PROFILE}/${name}.json`);
    if (res.data) {
      dispatch({ type: GET_PROFILE_INFO, payload: res.data });
    }
  } catch (err) {
  } finally {
    dispatch(loadingActions(false));
  }
};
