import React, {useEffect, useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/modal/MyModal";
import CreatingLicenceForm from "./CreatingLicenceForm";
import {useNavigate} from "react-router-dom";

const EnterpriseStructureTable = ({enterpriseID, structure}) => {
    const [reactiveEnterpriseID, setReactiveEnterpriseID] = useState(enterpriseID)
    const [reactiveStructure, setReactiveStructure] = useState(structure)
    useEffect(() => {
        setReactiveStructure(structure)
    }, [structure]);

    useEffect(() => {
        setReactiveEnterpriseID(enterpriseID)
    }, [enterpriseID]);

    const router = useNavigate();
    return (
        <div>
            <div>
                {/*<div className="add-licence-btn">*/}
                {/*    <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>*/}
                {/*        + Добавить лицензию*/}
                {/*    </MyButton>*/}
                {/*</div>*/}
                {/*<MyModal visible={modal} setVisible={setModal}>*/}
                {/*    <CreatingLicenceForm enterprise={enterprise}/>*/}
                {/*</MyModal>*/}
                <table className="enterprises__table">
                    <tbody>
                    <tr className="enterprises__table__headers">
                        <th>№</th>
                        <th>Наименовние</th>
                        <th>Дата создания</th>
                    </tr>
                    </tbody>
                    <tbody>
                    {reactiveStructure.map((item, index) =>
                        <tr
                            className="table_link"
                            key={item.id} onClick={() => router(`/enterprise_structure/${reactiveEnterpriseID}/${item.id}`, {
                                replace: true
                        })}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.created_at}</td>
                        </tr>
                    )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnterpriseStructureTable;