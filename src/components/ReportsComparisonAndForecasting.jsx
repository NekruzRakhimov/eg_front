import React, {useEffect, useState} from 'react';
import PieDiagram from "./diagrams/pie/pie";
import MyInput from "./UI/input/MyInput";
import ReportService from "../API/ReportService";
import {useFetching} from "../hooks/useFetching";
import BarDiagram from "./diagrams/bar/bar";

const ReportsComparisonAndForecasting = () => {
    const [currentType, setCurrentType] = useState("pie")
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

    const pieDataSet = [
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

    const barDataSet = {
        labels: [
            filter.date_from + " - " + filter.date_to,
        ],
        datasets: [
            {
                label: "действующие",
                data: [report.active],
                backgroundColor: "green",
                borderColor: "black",
                borderWidth: 1,
            },
            {
                label: "ликвидировано",
                data: [report.liquidated],
                backgroundColor: "blue",
                borderColor: "black",
                borderWidth: 1,
            },
            {
                label: "приостановлено",
                data: [report.stopped],
                backgroundColor: "purple",
                borderColor: "black",
                borderWidth: 1,
            },
            {
                label: "на банкротстве",
                data: [report.on_bankruptcy],
                backgroundColor: "orange",
                borderColor: "black",
                borderWidth: 1,
            },
            {
                label: "передано в аренду",
                data: [report.leased_out],
                backgroundColor: "yellow",
                borderColor: "black",
                borderWidth: 1,
            },
            {
                label: "было реорганизовано",
                data: [report.re_organized],
                backgroundColor: "black",
                borderColor: "black",
                borderWidth: 1,
            },
            {
                label: "должники по таможне",
                data: [report.customs_debtors],
                backgroundColor: "grey",
                borderColor: "black",
                borderWidth: 1,
            },
            {
                label: "должники по налогам",
                data: [report.tax_debtors],
                backgroundColor: "red",
                borderColor: "black",
                borderWidth: 1,
            },
        ]
    }

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
            <input type="radio" id="pieDiagram" name="diagram" checked={currentType === 'pie'} value="pie"
                   onChange={e => setCurrentType(e.target.value)}/>
            <label htmlFor="pieDiagram">Круговая диаграмма</label><br/>
            <input type="radio" id="linear_diagram" name="diagram" checked={currentType === 'bar'} value="bar"
                   onChange={e => setCurrentType(e.target.value)}/>
            <label htmlFor="linear_diagram">Линейная диаграмма</label><br/>

            {currentType === "bar"
                ? <BarDiagram dataSet={barDataSet}></BarDiagram> :
                <PieDiagram labels={labels} dataSet={pieDataSet}></PieDiagram>
            }
        </div>
    );
};

export default ReportsComparisonAndForecasting;