import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import EnterprisesService from "../API/EnterprisesService";

const EnterPriseIdPage = (props) => {
    const params = useParams()
    const [enterPrise, setEnterPrise] = useState({});
    const [fetchEnterpriseByID, isLoading, error] = useFetching(async (id) => {
        const response = await EnterprisesService.getByID(params.id)
        setEnterPrise(response.data)
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
                : <div className = "enterprise_id_page_main">
                    <div className= "enterprise_id_page_main_item">
                        <h2 style={{"marginBottom": 10}}>Основная информация</h2>
                        <div><b>Наименование:</b> {enterPrise.name}</div>
                        <div><b>ИНН:</b> {enterPrise.inn}</div>
                        <div><b>ЕИН:</b> {enterPrise.ein}</div>

                        <div><b>Информация об учередителях, партнерах:</b> пусто </div>
                        <div><b>Участник Ассоциации:</b> пусто </div>
                        <div><b>Дата регистрации:</b> {enterPrise.registration_date} </div>


                        <h4 style={{"marginTop": 10, "marginBottom": 5}}>Классификаторы:</h4>
                        <div><b>ОКВЭД:</b> {enterPrise.okved}</div>
                        <div><b>ОКПО:</b> пусто </div>
                        <div><b>ОКАТО:</b> {enterPrise.address}</div>
                        <div><b>ОКФС:</b> пусто </div>
                        <div><b>ОКОПФ:</b> пусто </div>
                        <div><b>ОКОГУ:</b> пусто </div>

                    </div>
                    <div className= "enterprise_id_page_main_sidebar">
                        <h5>Филлиалы и дочерние предприятия</h5>
                        (пусто)
                    </div>
                </div>
            }
        </div>
    );
};

export default EnterPriseIdPage;