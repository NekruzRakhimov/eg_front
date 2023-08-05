import React from 'react';
import MyButton from "../components/UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const ReportTechnicalEconomic = () => {
    const router = useNavigate();

    return (
        <div>
            Технико-экономический
            <div className="report_technical_economic_list">
                <MyButton className="report_technical_economic_list_item"
                          onClick={() => router(`/reports/technical_economic/industrial_activity_objects`)}
                >Отчет «Объекты промышленной деятельности»</MyButton>
                <MyButton className="report_technical_economic_list_item">Отчет №2</MyButton>
                <MyButton className="report_technical_economic_list_item">Отчет №3</MyButton>
                <MyButton className="report_technical_economic_list_item">Отчет №4</MyButton>
                <MyButton className="report_technical_economic_list_item">Отчет №5</MyButton>
                <MyButton className="report_technical_economic_list_item">Отчет №6</MyButton>
                <MyButton className="report_technical_economic_list_item">Отчет №7</MyButton>
                <MyButton className="report_technical_economic_list_item">Отчет №8</MyButton>
                <MyButton className="report_technical_economic_list_item">Отчет №9</MyButton>
                <MyButton className="report_technical_economic_list_item">Отчет №10</MyButton>
                <MyButton className="report_technical_economic_list_item">Отчет №11</MyButton>
                <MyButton className="report_technical_economic_list_item">Отчет №12</MyButton>
            </div>
        </div>
    );
};

export default ReportTechnicalEconomic;