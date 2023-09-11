import React, {useState} from 'react';
import ReportsKeyIndicatorsTab from "../../ReportsKeyIndicatorsTab";
import EnterpriseEmployeesTable from "../../EnterpriseEmployeesTable";
import EnterpriseLicencesTable from "../../EnterpriseLicencesTable";

const EnterpriseTabBar = ({activeKey, children, enterprise, employees, licences}) => {
    const [key, setKey] = useState(activeKey)

    // const employees = [
    //     {
    //         id: 1,
    //         full_name: "Некруз Рахимов",
    //         inn: "1234562456",
    //         job_title: "Разработчик",
    //         birth_date: "09.08.2002",
    //         work_experience: "2 года"
    //     },
    //     {
    //         id: 2,
    //         full_name: "Иванов Иван",
    //         inn: "54323456543",
    //         job_title: "Тестировщик",
    //         birth_date: "07.10.1990",
    //         work_experience: "2 года"
    //     }
    // ]

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

                                    : item.props.aKey === "2"
                                        ? <EnterpriseLicencesTable licences={licences}/>
                                        : item.props.aKey === "5"
                                            ? <EnterpriseEmployeesTable employees={employees}/>
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