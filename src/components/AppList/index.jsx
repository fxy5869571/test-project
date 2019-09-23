import React from "react";
import { ListView } from 'antd-mobile'
import './style.scss'
import Recomend from "../Recomend";
import { SearchBar } from "antd-mobile";
const AppList = (props) => {
    const { recomend } = props
    const { entry = [] } = props.appList

    const renderRow = (rowData, sectionID, rowID) => {
        console.log(rowData)
        const className = rowID % 2 === 0 ? "app-list-item-img" : 'app-list-item-radius'

        return <div className="app-list-item">
            <div className="app-list-item-index">{Number.parseInt(rowID) + 1}</div>
            <img src={rowData['im:image'][2].label} alt="" className={className} />
            < div className="app-list-item-right">
                <span className="app-list-item-title">{rowData['im:name'].label}</span>
                <span className="app-list-item-text">{rowData.category.attributes.label}</span>
                <span className="app-list-item-text">(17)分</span>
            </div>
            <div className="app-list-item-split"></div>
        </div>
    }

    const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });
    const renderHeader = () => {
        return <div>
            <div className="search-bar-container">
                <SearchBar placeholder="搜索" />
            </div>
            <span className="App-title">推荐</span>
            <Recomend recomend={recomend} />
        </div>
    }
    return <ListView dataSource={dataSource.cloneWithRows(entry)}
        renderHeader={renderHeader}
        renderRow={renderRow}
        initialListSize={10}
        className="app-list" />

}

export default AppList