import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import EnterprisesService from "../API/EnterprisesService";
import TabBar, {Tab} from "../components/UI/TabBar/TabBar";
import EnterpriseTabBar from "../components/UI/EnterpriseTabBar/EnterpriseTabBar";
import reports from "./Reports";

const enterpriseTabs = [
    {aKey: "1", title: "Структура", content: "1"},
    {aKey: "2", title: "Лицензии", content: "2"},
    {aKey: "3", title: "Сертификаты", content: "3"},
    {aKey: "4", title: "Гос. контракты", content: "4"},
    {aKey: "5", title: "Сотрудники", content: "5"},
    {aKey: "6", title: "Экономические показатели", content: "6"},
    {aKey: "7", title: "Контакты", content: "7"},
    {aKey: "8", title: "Адрес", content: "8"},
    {aKey: "9", title: "Взаимодействие", content: "9"},
]

const EnterPriseIdPage = (props) => {
    const params = useParams()
    const [enterPrise, setEnterPrise] = useState({});
    const [employees, setEmployees] = useState([]);
    const [licences, setLicences] = useState([]);
    const [structure, setStructure] = useState([]);
    const [fetchEnterpriseByID, isLoading, error] = useFetching(async (id) => {
        const response = await EnterprisesService.getByID(params.id)
        setEnterPrise(response.data.enterprise)
        setEmployees(response.data.employees)
        setLicences(response.data.licences)
        setStructure(response.data.structure)
    })

    useEffect(() => {
        fetchEnterpriseByID(params.id)
    }, []);

    return (
        <div>
            {/*<h1>Предприятие c ID = ${params.id}</h1>*/}
            <h3 style={{"margin": "10px"}}>{enterPrise.name}</h3>
            {isLoading
                ? <Loader/>
                : <div>
                    <div className="enterprise_id_page_main">
                        <div className="enterprise_id_page_main_item">
                            <h2 style={{"marginBottom": 10}}>Основная информация</h2>
                            <div><b>Наименование:</b> {enterPrise.name}</div>
                            <div><b>ИНН:</b> {enterPrise.inn}</div>
                            <div><b>ЕИН:</b> {enterPrise.ein}</div>

                            <div><b>Информация об учередителях, партнерах:</b> пусто</div>
                            <div><b>Участник Ассоциации:</b> пусто</div>
                            <div><b>Дата регистрации:</b> {enterPrise.registration_date} </div>


                            <h4 style={{"marginTop": 10, "marginBottom": 5}}>Классификаторы:</h4>
                            <div><b>ОКВЭД:</b> {enterPrise.okved}</div>
                            <div><b>ОКПО:</b> пусто</div>
                            <div><b>ОКАТО:</b> {enterPrise.address}</div>
                            <div><b>ОКФС:</b> пусто</div>
                            <div><b>ОКОПФ:</b> пусто</div>
                            <div><b>ОКОГУ:</b> пусто</div>

                        </div>
                        <div className="enterprise_id_page_main_sidebar">
                            <h5>Филлиалы и дочерние предприятия</h5>
                            (пусто)
                        </div>
                    </div>
                    <div>
                        <EnterpriseTabBar activeKey="1"
                                          enterprise={enterPrise}
                                          employees={employees}
                                          licences={licences}
                                          structure={structure}>
                            {enterpriseTabs.map(item => <Tab key={item.aKey} aKey={item.aKey}
                                                             title={item.title}>{item.content}</Tab>)}
                        </EnterpriseTabBar>
                    </div>
                </div>

            }
        </div>
    );
};

export default EnterPriseIdPage;