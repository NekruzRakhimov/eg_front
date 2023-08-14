import React, {useState} from 'react';
import ReportsKeyIndicatorsTab from "../../ReportsKeyIndicatorsTab";

const EnterpriseTabBar = ({activeKey, children, enterprise}) => {
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
                                {item.props.aKey === "8"
                                    ? <div>
                                        <b>Фактический адрес предприятия</b><br/>
                                        Почтовый индекс: -<br/>
                                        Страна: Таджикистан<br/>
                                        Область: -<br/>
                                        Район: -<br/>
                                        Джамоат: -<br/>
                                        Город: {enterprise.address}<br/>
                                        Улица: -<br/>
                                        Дом: -<br/>
                                        Квартира:-<br/>

                                        <b>Юридический адрес предприятия</b><br/>
                                        Почтовый индекс: -<br/>
                                        Страна: Таджикистан<br/>
                                        Область: -<br/>
                                        Район: -<br/>
                                        Джамоат: -<br/>
                                        Город: {enterprise.address}<br/>
                                        Улица: -<br/>
                                        Дом: -<br/>
                                        Квартира:-<br/>
                                    </div>
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
export default EnterpriseTabBar;