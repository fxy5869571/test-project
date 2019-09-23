import React, { useEffect } from "react";

import "./App.scss";
import AppList from "./AppList";
import Recomend from "./Recomend";
import { SearchBar } from "antd-mobile";
function App(props) {
  const { receiveAppList, receiveRecomend } = props;
  useEffect(() => {
    receiveRecomend();
    receiveAppList();
  }, []);

  const { recomend, appList } = props;
  return (
    <div className="App">
      <AppList appList={appList} recomend={recomend} />
    </div>
  );
}

export default App;
