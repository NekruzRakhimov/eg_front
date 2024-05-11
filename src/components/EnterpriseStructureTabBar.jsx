import React, {useState} from 'react';
import EnterpriseStructureTable from "./EnterpriseStructureTable";

const EnterpriseStructureTabBar = ({activeKey, tabs, enterpriseID, structure}) => {
    const [key, setKey] = useState(activeKey)

    return (
        <div className="tab-container">
            <div className="tabs">
                {tabs.map(item => {
                    return (
                        <div key={item.aKey} className={key === item.aKey ? "tab-item active" : "tab-item"}
                             onClick={() => setKey(item.aKey)}>
                            {item.title}
                        </div>
                    )
                })}
            </div>
            <div className="tab-content">
                {tabs.map(item => {
                        return (
                            <div key={item.aKey} className={key === item.aKey ? "tab-pane active" : "tab-pane"}>
                                {/*{item.props.title}*/}
                                {item.aKey === "1"
                                    ? <EnterpriseStructureTable
                                        enterpriseID={enterpriseID} structure={structure}/>
                                    // : item.props.aKey === "5"
                                    //     ? <EnterpriseEmployeesTable employees={employees} enterprise={enterprise}/>
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

export default EnterpriseStructureTabBar;