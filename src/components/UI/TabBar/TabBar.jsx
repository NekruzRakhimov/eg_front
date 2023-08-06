import React, {useState} from 'react';
import "./TabBar.module.css"
import ReportsKeyIndicatorsTab from "../../ReportsKeyIndicatorsTab";

const TabBar = ({activeKey, children}) => {
    const [key, setKey] = useState(activeKey)

    return (
        <div className="tab-container">
            <div className="tabs">
                {children.map(item => {
                    return (
                        <div key={item.props.aKey} className={key === item.props.aKey ? "tab-item active" : "tab-item"}
                             onClick={() => setKey(item.props.aKey)}>
                            {item.props.title}
                        </div>
                    )
                })}
            </div>
            <div className="tab-content">
                {children.map(item => {
                        return (
                            <div key={item.props.aKey} className={key === item.props.aKey ? "tab-pane active" : "tab-pane"}>
                                {/*{item.props.title}*/}
                                {item.props.aKey === "1"
                                    ? <ReportsKeyIndicatorsTab/>
                                    : <div>В разработке</div>
                                }
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    );

}

export const Tab = () => {
    return (
        <></>
    );
}

export default TabBar;