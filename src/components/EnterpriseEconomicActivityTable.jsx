import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const EnterpriseEconomicActivityTable = ({economic_activity, enterprise}) => {
    const router = useNavigate();
    const [currentKey, setCurrentKey] = useState(0)
    //setKeys(economic_activity[0].economic_activity)
    console.log("economic_activity", economic_activity)

    let keys = [
        "Выручка, тыс.сомони",
        "Себестоимость продаж, тыс.сомони",
        "Валовая прибыль, тыс.сомони",
        "Прибыль от продаж, тыс.сомони",
        "Среднесписочная численность работников, чел.",
        "Дебиторская задолженность, тыс.сомони",
        "Кредиторская задолженность тыс.сомони",
        "Среднегодовая стоимость основных производственных фондов, тыс.сомони",
        "Среднегодовая стоимость оборотных активов, тыс.сомони",
        "Чистая прибыль, тыс.сомони",
        "Фонд оплаты труда работников, тыс.сомони/год",
        "Среднемесячная заработная плата 1 работника, тыс.сомони",
        "Производительность труда, тыс.сомони / чел.",
        "Фондоотдача, сомони/сомони",
        "Коэффициент оборачиваемости оборотных активов, оборотов",
        "Рентабельность продаж, %",
        "Рентабельность продукции, %"
    ]

    return (
        <div>
            <h2>Экономические показатели</h2>
            <table className="enterprises__table">
                <tbody>
                <tr className="enterprises__table__headers">
                    <th>Показатели</th>
                    {economic_activity.map((activity, index) =>
                        <th key={activity.year}>{activity.year}</th>
                    )}
                </tr>
                </tbody>
                <tbody>

                {economic_activity.map((activity) =>
                    activity.economic_activity.map((item, index) => (
                        <tr key={item.id}>
                            <td>{keys[index]}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))
                )}



                </tbody>
            </table>
        </div>
    );
};

export default EnterpriseEconomicActivityTable;