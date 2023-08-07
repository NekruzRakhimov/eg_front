import React, {useEffect, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import {useFetching} from "../hooks/useFetching";
import EnterprisesService from "../API/EnterprisesService";
import ReportService from "../API/ReportService";

const ReportsKeyIndicatorsTab = () => {

    // const [limit, setLimit] = useState(10)
    // const [authorizedCapitalFilter, setAuthorizedCapitalFilter] = useState("-1")
    // const [page, setPage] = useState(1)
    const [report, setReport] = useState({})
    const [filter, setFilter] = useState(
        {
            date_from: "",
            date_to: "",
            location: "",
            economic_activity: "",
            // organization_age: 0,
            // yearly_turnover: 0,
            // authorized_capital: 0
        }
    )
    // let enterprises = []
    const [fetchReport, isReportLoading, reportError] = useFetching(
        async (filter) => {
            const response = await ReportService.GetIndustrialObjectsKeyIndicators(filter);
            console.log(response.data)
            setReport(response.data)
            // enterprises = response.data

            // setPosts([...posts, ...response.data,])
            // const totalCount = response.headers["x-total-count"]
            // setTotalPages(getPageCount(totalCount, limit))
        })


    useEffect(() => {
        fetchReport(filter);
    }, [filter]);

    return (
        <div>
            <div>
                <MyInput
                    // type="date"
                    type="date" id="timeRange" name="timeRange"
                    placeholder={"на заданный период"}
                    value={filter.date_from}
                    onChange={e => setFilter({...filter, date_from: e.target.value})}
                />
                <MyInput
                    type="date"
                    placeholder={"на заданный период"}
                    value={filter.date_to}
                    onChange={e => setFilter({...filter, date_to: e.target.value})}
                />
            </div>

            <MyInput
                placeholder={"по выбору месторасположения"}
                value={filter.location}
                onChange={e => setFilter({...filter, location: e.target.value})}
            />
            <MyInput
                placeholder={"по выбору экономической деятельности"}
                value={filter.economic_activity}
                onChange={e => setFilter({...filter, economic_activity: e.target.value})}
            />
            <MyInput
                type="number"
                placeholder={"По выбору возраста организации"}
                value={filter.organization_age}
                onChange={e => setFilter({...filter, organization_age: e.target.value})}
            />
            <MyInput
                type="number"
                placeholder={"по заданному годовому обороту"}
                value={filter.yearly_turnover}
                onChange={e => setFilter({...filter, yearly_turnover: e.target.value})}
            />
            <MyInput
                type="number"
                placeholder={"по размеру уставного капитала"}
                value={filter.authorized_capital}
                onChange={e => setFilter({...filter, authorized_capital: e.target.value})}
            />
            <hr/>
            <div>
                - действующие: {report.active}<br/>
                - ликвидировано: {report.liquidated}<br/>
                - приостановлено: {report.stopped}<br/>
                - на банкротстве: {report.on_bankruptcy}<br/>
                - передано в аренду: {report.leased_out}<br/>
                - было реорганизовано: {report.re_organized}<br/>
                - должники по таможне: {report.customs_debtors}<br/>
                - должники по налогам: {report.tax_debtors}<br/>
            </div>
        </div>
    );
};

export default ReportsKeyIndicatorsTab;