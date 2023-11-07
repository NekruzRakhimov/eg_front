import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/modal/MyModal";
import CreatingLicenceForm from "./CreatingLicenceForm";
import CreatingGoodForm from "./CreatingGoodForm";

const EnterpriseGoodsTable = ({enterprise, goods}) => {
    const [modal, setModal] = useState(false)
    const router = useNavigate();
    return (
        <div>
            <h2> Список товаров</h2>
            <div className="add-licence-btn">
                <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>
                    + Добавить товар
                </MyButton>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <CreatingGoodForm enterprise={enterprise}/>
            </MyModal>
            <table className="enterprises__table">
                <tbody>
                <tr className="enterprises__table__headers">
                    <th>№</th>
                    <th>Глобальный идентификатор</th>
                    <th>Название товара</th>
                    <th>Классификатор</th>
                </tr>
                </tbody>
                <tbody>
                {goods.map((good, index) =>
                    <tr
                        className="table_link"
                        key={good.id}
                        onClick={() => router(`/licences/${good.id}`)}>
                        <td>{good.id}</td>
                        <td>{good.ext_id}</td>
                        <td>{good.full_name}</td>
                        <td>{good.classifier}</td>
                    </tr>
                )}

                </tbody>
            </table>
        </div>
    );
};

export default EnterpriseGoodsTable;