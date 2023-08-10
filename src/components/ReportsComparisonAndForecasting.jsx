import React, {useEffect, useState} from 'react';
import PieDiagram from "./diagrams/pie/pie";
import MyInput from "./UI/input/MyInput";
import ReportService from "../API/ReportService";
import {useFetching} from "../hooks/useFetching";

const ReportsComparisonAndForecasting = () => {
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

    const labels = [
        "действующие",
        "ликвидировано",
        "приостановлено",
        "на банкротстве",
        "передано в аренду",
        "было реорганизовано",
        "должники по таможне",
        "должники по налогам",
    ];

    const dataSet = [
        {
            data: [
                report.active,
                report.liquidated,
                report.stopped,
                report.on_bankruptcy,
                report.leased_out,
                report.re_organized,
                report.customs_debtors,
                report.tax_debtors],
            backgroundColor: ["green", "blue", "purple", "orange", "yellow", "black", "grey", "red"]
        }
    ]
    // const data = {
    //     labels: ["active", "closed", "processing"],
    //     datasets: [
    //         {
    //             data: [1, 2, 3],
    //             backgroundColor: ["green", "blue", "purple"]
    //         }
    //     ]
    // }

    return (
        <div>
            <div>
                <MyInput
                    // type="date"
                    type="date" id="timeRange" name="timeRange"
                    placeholder={"на заданный период ОТ"}
                    value={filter.date_from}
                    onChange={e => setFilter({...filter, date_from: e.target.value})}
                />
                <MyInput
                    type="date"
                    placeholder={"на заданный период ДО"}
                    value={filter.date_to}
                    onChange={e => setFilter({...filter, date_to: e.target.value})}
                />
            </div>
            <PieDiagram labels={labels} dataSet={dataSet}></PieDiagram>
        </div>
    );
};

export default ReportsComparisonAndForecasting;