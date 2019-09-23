import React, { useEffect, useState } from "react";

import "./App.scss";
import AppList from "./AppList";
import { SearchBar } from "antd-mobile";
function App(props) {
  const [searchKey, setSearchKey] = useState("");
  const { requestAppList, requestRecomend } = props;
  useEffect(() => {
    requestRecomend();
    requestAppList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onChange = value => {
    const { requestSearchApp } = props;
    requestSearchApp({ text: value });
    setSearchKey(value);
  };
  const { recomend, appList, searchApp } = props;

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar placeholder="搜索" onChange={onChange} />
      </div>
      {searchKey ? (
        <AppList
          appList={searchApp}
          history={props.history}
          searchKey={searchKey}
        />
      ) : (
        <AppList
          appList={appList}
          requestAppList={requestAppList}
          recomend={recomend}
          history={props.history}
        />
      )}
    </div>
  );
}

export default App;
