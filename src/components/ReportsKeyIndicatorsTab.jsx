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
    const [filter, setFilter] = useState({sort: "", query: ""})
    // let enterprises = []
    const [fetchReport, isReportLoading, reportError] = useFetching(
        async () => {
            const response = await ReportService.GetIndustrialObjectsKeyIndicators();
            console.log(response.data)
            setReport(response.data)
            // enterprises = response.data

            // setPosts([...posts, ...response.data,])
            // const totalCount = response.headers["x-total-count"]
            // setTotalPages(getPageCount(totalCount, limit))
        })


    useEffect(() => {
        fetchReport();
    }, []);

    return (
        <div>
            <MyInput
                type="calendar"
                placeholder={"на заданный период"}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MyInput
                placeholder={"по выбору месторасположения"}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MyInput
                placeholder={"по выбору экономической деятельности"}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MyInput
                placeholder={"По выбору возраста организации"}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MyInput
                placeholder={"по заданному годовому обороту"}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MyInput
                placeholder={"по размеру уставного капитала"}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
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