import React, { useState } from "react";
import { ListView } from 'antd-mobile'
import './style.scss'
import Recomend from "../Recomend";
import Star from 'react-stars'
const AppList = (props) => {
    const { recomend = [], requestAppList } = props
    const { appList = [], history, searchKey } = props
    const [page, setPage] = useState(1)
    const renderRow = (rowData, sectionID, rowID) => {
        const className = rowID % 2 === 0 ? "app-list-item-img" : 'app-list-item-radius'
        return <div className="app-list-item" onClick={goToDetail}>
            <div className="app-list-item-index">{Number.parseInt(rowID) + 1}</div>
            <div>
                <img src={rowData['im:image'][2].label} alt="" className={className} />
            </div>

            < div className="app-list-item-right">
                <span className="app-list-item-title">{rowData['im:name'].label}</span>
                <span className="app-list-item-text">{rowData.category.attributes.label}</span>
                <div className="app-list-item-footer">
                    <Star count={5} value={4} size={14} />
                    <span className="app-list-item-text" style={{ marginLeft: 4 }}>(4)分</span>
                </div>
            </div>
            <div className="app-list-item-split"></div>
        </div >
    }
    const goToDetail = () => {
        history.push({
            pathname: 'detail',
            query: { id: 111 }
        })
    }
    const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });

    const renderHeader = () => {
        if (recomend.length <= 0) {
            return null
        }
        return <div>
            <span className="App-title">推荐</span>
            <Recomend recomend={recomend} goToDetail={goToDetail} />
        </div>
    }
    const onEndReached = () => {
        const pageIndex = page + 1
        setPage(pageIndex)

        requestAppList({ page: pageIndex })
    }
    if (appList.length <= 0 && searchKey) {
        return null
    }
    return <ListView dataSource={dataSource.cloneWithRows(appList)}
        onEndReached={onEndReached}
        onEndReachedThreshold={100}
        renderHeader={renderHeader}
        renderRow={renderRow}
        initialListSize={10}
        className="app-list" />
}
export default AppList