import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import LicencesService from "../API/LicencesService";

const LicenceIdPage = () => {
    const params = useParams()
    const [licence, setLicence] = useState({});
    const [fetchLicenceByID, isLoading, error] = useFetching(async (id) => {
        const response = await LicencesService.getByID(params.id)
        setLicence(response.data)
        console.log(licence)
    })

    useEffect(() => {
        fetchLicenceByID(params.id)
    }, []);

    return (
        <div>
            {/*<h3 style={{"margin": "10px"}}>{licence.id}</h3>*/}
            {isLoading
                ? <Loader/>
                : <div>
                    <div className="enterprise_id_page_main">
                        <div className="enterprise_id_page_main_item">
                            <h2 style={{"marginBottom": 10}}>Основная информация о лицензии {licence.series}</h2>
                            <div><b>ID:</b> {licence.id}</div>
                            <div><b>Серия лицензии:</b> {licence.series}</div>
                            <div><b>Действительна до:</b> {licence.valid_until}</div>
                            <div><b>Кому выдана:</b> {licence.issued_to}</div>
                            <div><b>Вид деятельности и работ:</b> {licence.activity_type}</div>
                            <div><b>Юридический адрес лицензиата:</b> {licence.licensee_legal_address}</div>
                            <div><b>Сведения из Иктибос:</b> {licence.iqtibos_info}</div>
                            <div><b>Дата выдачи лицензии:</b> {licence.issued_at}</div>
                            <div><b>№ Протокола комиссии:</b> {licence.commission_protocol_number}</div>
                            <div><b>№ Реестра:</b> {licence.register_number}</div>
                        </div>
                    </div>
                </div>

            }
        </div>
    );
};

export default LicenceIdPage;