import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import EnterprisesService from "../API/EnterprisesService";
import Loader from "../components/UI/Loader/Loader";
import EnterpriseTabBar from "../components/UI/EnterpriseTabBar/EnterpriseTabBar";
import {Tab} from "../components/UI/TabBar/TabBar";
import EmployeesService from "../API/EmployeesService";

const EmployeeIdPage = () => {
    const params = useParams()
    const [employee, setEmployee] = useState({});
    const [fetchEmployeeByID, isLoading, error] = useFetching(async (id) => {
        const response = await EmployeesService.getByID(params.id)
        setEmployee(response.data)
        console.log(employee)
    })

    useEffect(() => {
        fetchEmployeeByID(params.id)
    }, []);

    return (
        <div>
            {/*<h1>Предприятие c ID = ${params.id}</h1>*/}
            <h3 style={{"margin": "10px"}}>{employee.full_name}</h3>
            {isLoading
                ? <Loader/>
                : <div>
                    <div className="enterprise_id_page_main">
                        <div className="enterprise_id_page_main_item">
                            <h2 style={{"marginBottom": 10}}>Основная информация</h2>
                            <div><b>ID:</b> {employee.id}</div>
                            <div><b>ФИО:</b> {employee.full_name}</div>
                            <div><b>ИНН:</b> {employee.inn}</div>
                            <div><b>Должность:</b> {employee.job_title}</div>
                            <div><b>Дата рождения:</b> {employee.birth_date}</div>
                            <div><b>Опыт работы(в годах):</b> {employee.work_experience}</div>

                            {/*<h4 style={{"marginTop": 10, "marginBottom": 5}}>Классификаторы:</h4>*/}
                            {/*<div><b>ОКВЭД:</b> {enterPrise.okved}</div>*/}
                            {/*<div><b>ОКПО:</b> пусто</div>*/}
                            {/*<div><b>ОКАТО:</b> {enterPrise.address}</div>*/}
                            {/*<div><b>ОКФС:</b> пусто</div>*/}
                            {/*<div><b>ОКОПФ:</b> пусто</div>*/}
                            {/*<div><b>ОКОГУ:</b> пусто</div>*/}

                        </div>
                        {/*<div className="enterprise_id_page_main_sidebar">*/}
                        {/*    <h5>Филлиалы и дочерние предприятия</h5>*/}
                        {/*    (пусто)*/}
                        {/*</div>*/}
                    </div>
                    {/*<div>*/}
                    {/*    <EnterpriseTabBar activeKey="1"  enterprise={enterPrise} employees={employees}>*/}
                    {/*        {enterpriseTabs.map(item => <Tab key={item.aKey} aKey={item.aKey}*/}
                    {/*                                         title={item.title}>{item.content}</Tab>)}*/}
                    {/*    </EnterpriseTabBar>*/}
                    {/*</div>*/}
                </div>

            }
        </div>
    );
};

export default EmployeeIdPage;