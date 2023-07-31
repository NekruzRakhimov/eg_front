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
            <h1>Предприятие c ID = ${params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>
                    Название предприятия: {enterPrise.name}
                    Уставной капитал: {enterPrise.authorized_capital}
                </div>
            }
        </div>
    );
};

export default EnterPriseIdPage;