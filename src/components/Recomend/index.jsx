import React from "react";
import './style.scss'
const Recomend = (props) => {
    const { entry = [] } = props.recomend
    return <div className="recomend-container">
        <div className="recomend">
            {entry.map(item =>
                <div key={item.id.attributes['im:id']}
                    className="recomend-item">
                    <div className="recomend-item-container">
                        <img src={item['im:image'][2].label} alt=""
                            className="recomend-item-img" />
                        <span className="recomend-item-title">{item['im:name'].label}</span>
                        <span className="recomend-item-text">{item.category.attributes.label}</span>
                    </div>
                    <div className="slider">
                        <ul></ul>
                    </div>
                </div>)}
        </div>
    </div>

}

export default Recomend