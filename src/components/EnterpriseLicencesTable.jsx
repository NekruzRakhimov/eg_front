import React from 'react';
import {useNavigate} from "react-router-dom";

const EnterpriseLicencesTable = ({licences}) => {
    console.log(licences)
    const router = useNavigate();
    return (
        <div>
            Список лицензий
            <table className="enterprises__table">
                <tbody>
                <tr className="enterprises__table__headers">
                    <th>№</th>
                    <th>Серия лицензии</th>
                    <th>Действительна до</th>
                    <th>Кому выдана</th>
                    <th>Вид деятельности и работ</th>
                    <th>Юридический адрес лицензиата </th>
                    <th>Сведения из Иктибос </th>
                    <th>Дата выдачи лицензии </th>
                    <th>№ Протокола комиссии </th>
                    <th>№ Реестра </th>
                </tr>
                </tbody>
                <tbody>
                {licences.map((licence, index) =>
                    <tr
                        className="table_link"
                        key={licences.id} onClick={() => router(`/licences/${licence.id}`)}>
                        <td>{licence.id}</td>
                        <td>{licence.series}</td>
                        <td>{licence.valid_until}</td>
                        <td>{licence.issued_to}</td>
                        <td>{licence.activity_type}</td>
                        <td>{licence.licensee_legal_address}</td>
                        <td>{licence.iqtibos_info}</td>
                        <td>{licence.issued_at}</td>
                        <td>{licence.commission_protocol_number}</td>
                        <td>{licence.register_number}</td>
                    </tr>
                )}

                </tbody>
            </table>
        </div>
    );
};

export default EnterpriseLicencesTable;