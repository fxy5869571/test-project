export const INCREASE = "INCREASE";

export function increase() {
  return {
    type: INCREASE
  };
}

export const DECREASE = "DECREASE";
export function decrease() {
  return {
    type: DECREASE
  };
}

export const ASYNC_INCREASE = "ASYNC_INCREASE";
export function asyncIncrease() {
  return {
    type: ASYNC_INCREASE
  };
}

export const AWAIT_INCREASE = "AWAIT_INCREASE";
export function awaitIncrease() {
  return {
    type: AWAIT_INCREASE
  };
}

// 获取app数据
export const REQUEST_APP_LIST = "REQUEST_APP_LIST";
export const requestAppList = data => ({
  type: REQUEST_APP_LIST,
  ...data
});

export const RECEIVE_APP_LIST = "RECEIVE_APP_LIST";
export const receiveAppList = data => ({
  type: RECEIVE_APP_LIST,
  ...data
});

// 获取推荐数据
export const REQUEST_RECOMEND = "REQUEST_RECOMEND";
export const requestRecomend = data => ({
  type: REQUEST_RECOMEND,
  ...data
});

export const RECEIVE_RECOMEND = "RECEIVE_RECOMEND";
export const receiveRecomend = data => ({
  type: RECEIVE_RECOMEND,
  ...data
});
