// 获取app数据
export const REQUEST_APP_LIST = "REQUEST_APP_LIST";
export const requestAppList = payload => ({
  type: REQUEST_APP_LIST,
  ...payload
});

export const RECEIVE_APP_LIST = "RECEIVE_APP_LIST";
export const receiveAppList = payload => ({
  type: RECEIVE_APP_LIST,
  ...payload
});

// 获取推荐数据
export const REQUEST_RECOMEND = "REQUEST_RECOMEND";
export const requestRecomend = payload => ({
  type: REQUEST_RECOMEND,
  ...payload
});

export const RECEIVE_RECOMEND = "RECEIVE_RECOMEND";
export const receiveRecomend = payload => ({
  type: RECEIVE_RECOMEND,
  ...payload
});

// 搜索App数据
export const REQUEST_SEARCH_APP = "REQUEST_SEARCH_APP";
export const requestSearchApp = payload => ({
  type: REQUEST_SEARCH_APP,
  ...payload
});

export const RECEIVE_SEARCH_APP = "RECEIVE_SEARCH_APP";
export const receiveSearchApp = payload => ({
  type: RECEIVE_SEARCH_APP,
  ...payload
});

// 获取App数据详情
export const REQUEST_APP_DETAIL = "REQUEST_APP_DETAIL";
export const requestAppDetail = payload => ({
  type: REQUEST_APP_DETAIL,
  ...payload
});

export const RECEIVE_APP_DETAIL = "RECEIVE_APP_DETAIL";
export const receiveAppDetail = payload => ({
  type: RECEIVE_APP_DETAIL,
  ...payload
});
