import React, { useEffect } from "react";
import './style.scss'
import { Carousel, Icon } from 'antd-mobile'
import Star from 'react-stars'
const Header = (props) => {
    const { appDetail } = props
    return <div>
        <div className="header">
            <img src={appDetail.artworkUrl512} alt="" className="header-image" />
            <div className="header-right">
                <div>
                    <div className="header-right-title">{appDetail.trackName}</div>
                    <div className="header-right-text">{appDetail.trackCensoredName}</div>
                </div>
                <div className="header-right-button">获取</div>
            </div>
        </div>
    </div>
}
const AppDetail = (props) => {
    useEffect(() => {
        const { requestAppDetail } = props
        requestAppDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onTouchMove = (e) => {
        e.preventDefault()
    }

    const { appDetail = {} } = props
    const strArray = appDetail.releaseNotes ? appDetail.releaseNotes.split(/[0-9]/) : []

    const updateTime = new Date(appDetail.releaseDate).toLocaleDateString()
    return <div className="detail">
        <div className="detail-back" onClick={() => props.history.push('/')}>
            <Icon type="left" />
            <div>首页</div>
        </div>
        <Header appDetail={appDetail} />
        <div className="detail-rating">
            <div className="detail-rating-title">{appDetail.averageUserRating}</div>
            <Star count={5} value={appDetail.averageUserRating} size={20} />
        </div>

        <Carousel className="detail-carousel"
            selectedIndex={1}
            dots={false}
            slideWidth={0.85}
            cellSpacing={12}
            speed={200}
        >
            {appDetail.ipadScreenshotUrls &&
                appDetail.ipadScreenshotUrls.map((item, index) =>
                    <img src={item} key={index} className="detail-carousel-images" alt=""
                        onTouchMove={onTouchMove} />)
            }
        </Carousel>
        <div className="detail-split"></div>
        <div className="detail-description">{appDetail.description}</div>
        <div className="detail-split"></div>
        <div className="detail-version">
            <div className="detail-version-header">
                <span className="detail-version-header-title">新功能</span>
                <span className="detail-version-header-text">版本历史</span></div>
            <div className="detail-version-header">
                <span className="detail-version-version">版本{appDetail.version}</span>
                <span className="detail-version-time">{updateTime}</span>
            </div>
            <div>
                {strArray.map((item, index) =>
                    <div key={index} className="detail-version-footer">{index > 0 && index}{item}</div>)}
            </div>
        </div>
    </div >
}

export default AppDetail