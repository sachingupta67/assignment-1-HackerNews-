interface State {
  getNewsReducer: {
    askNews: Array<object>;
    jobNews: Array<object>;
    topNews: Array<object>;
    showNews: Array<object>;
  };
  common: {
    isLoading: boolean;
    result: Array<object>;
    profile: object;
    search: Array<object>;
  };
}

export const getNewsSelectors = (state: State) => {
  const { askNews, topNews, jobNews, showNews } = state.getNewsReducer;
  return { askNews, topNews, jobNews, showNews };
};

export const commonSelector = (state: State) => {
  const { isLoading, result, profile, search } = state.common;
  return { isLoading, result, profile, search };
};
