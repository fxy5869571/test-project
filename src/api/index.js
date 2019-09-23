import appListData from "./appListData";
import lookUp from "./lookUp";
import recomendData from "./recomendData";

// 获取app列表数据
export const getAppList = ({ page = 1 }) => {
  return appListData.feed.entry.filter((item, index) => {
    return index < page * 10 && index >= (page - 1) * 10;
  });
};

// 获取app详情
export const getlookUp = data => {
  return lookUp.results[0];
};

// 获取app推荐数据
export const getrecomend = data => {
  return recomendData;
};

// 搜索app列表数据
export const searchApp = data => {
  const { text } = data;
  if (!text) {
    return [];
  }
  const { entry } = appListData.feed;
  const result = entry.filter(item => {
    return item["im:name"].label.indexOf(text) > -1;
  });

  return result;
};
